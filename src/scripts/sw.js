import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import CONFIG from './config';

precacheAndRoute(self.__WB_MANIFEST);

const BackgroundSync = {
  async cacheRestaurantsList() {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}/list`);
      if (!response.ok) return;

      const { restaurants } = await response.json();
      const cache = await caches.open('api-responses');

      await cache.put(
        `${CONFIG.BASE_URL}/list`,
        new Response(JSON.stringify({ restaurants }))
      );

      const detailCache = await caches.open('restaurant-details');
      const BATCH_SIZE = 5;

      for (let i = 0; i < restaurants.length; i += BATCH_SIZE) {
        const batch = restaurants.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map(async (restaurant) => {
          try {
            const detailResponse = await fetch(`${CONFIG.BASE_URL}/detail/${restaurant.id}`);
            if (detailResponse.ok) {
              const detailData = await detailResponse.clone().json();
              await detailCache.put(
                `${CONFIG.BASE_URL}/detail/${restaurant.id}`,
                new Response(JSON.stringify(detailData))
              );

              if (detailData.restaurant?.pictureId) {
                const imageUrl = `${CONFIG.BASE_IMAGE_URL}${detailData.restaurant.pictureId}`;
                const imageResponse = await fetch(imageUrl);
                if (imageResponse.ok) {
                  const imageCache = await caches.open('images');
                  await imageCache.put(imageUrl, imageResponse);
                }
              }
            }
          } catch (error) {
            console.warn(`Failed to cache restaurant ${restaurant.id}:`, error);
          }
        }));
      }
    } catch (error) {
      console.error('Background sync failed:', error);
    }
  }
};

registerRoute(
  ({ url }) => url.href.includes('/list'),
  new NetworkFirst({
    cacheName: 'api-responses',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60,
        maxEntries: 1,
      }),
    ],
    networkTimeoutSeconds: 3,
  })
);

registerRoute(
  ({ url }) => url.href.includes('/detail/'),
  new NetworkFirst({
    cacheName: 'restaurant-details',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60,
        maxEntries: 50,
        purgeOnQuotaError: true
      }),
    ],
    networkTimeoutSeconds: 3,
  })
);

registerRoute(
  ({ request, url }) => request.destination === 'image' || url.href.includes('/images/'),
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60,
        purgeOnQuotaError: true
      }),
    ],
  })
);

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing');
  event.waitUntil(
    Promise.all([
      self.skipWaiting(),
      BackgroundSync.cacheRestaurantsList()
    ])
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating');
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!['api-responses', 'restaurant-details', 'images'].includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    ])
  );
});

self.addEventListener('online', () => {
  console.log('Back online - refreshing caches');
  BackgroundSync.cacheRestaurantsList();
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/detail/')) {
    event.respondWith((async () => {
      try {
        if (navigator.onLine) {
          const networkResponse = await fetch(event.request);
          if (networkResponse.ok) {
            const cache = await caches.open('restaurant-details');
            await cache.put(event.request, networkResponse.clone());

            const data = await networkResponse.clone().json();
            if (data.restaurant?.pictureId) {
              const imageUrl = `${CONFIG.BASE_IMAGE_URL}${data.restaurant.pictureId}`;
              fetch(imageUrl)
                .then(async (imgResponse) => {
                  if (imgResponse.ok) {
                    const imageCache = await caches.open('images');
                    await imageCache.put(imageUrl, imgResponse);
                  }
                })
                .catch(console.warn);
            }

            return networkResponse;
          }
        }

        const cache = await caches.open('restaurant-details');
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        throw new Error('No cached data available and network request failed');
      } catch (error) {
        console.error('Fetch failed:', error);
        const cache = await caches.open('restaurant-details');
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }
        throw error;
      }
    })());
  }
});