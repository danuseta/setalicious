import { showConnectionStatus, startConnectionMonitoring } from './offline';

const Home = {
  async render() {
    return `
      <div class="content">
        <h1 class="content__heading">Explore Restaurants</h1>
        <div class="search-container">
          <form id="searchForm" class="search-form">
            <div class="search-input-container">
              <input 
                type="search" 
                id="searchInput" 
                class="search-input" 
                placeholder="Search restaurants..."
                aria-label="Search restaurants"
                value="${this._getSearchQueryFromURL()}"
              >
              <button type="submit" class="search-button" aria-label="Search">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div id="restaurants" class="restaurant-list">
          ${this._generateSkeletons()}
        </div>
        <div id="no-results" class="no-results" style="display: none">
          <p>No restaurants found matching your search.</p>
          <button class="all-restaurants-button">
            <i class="fa fa-utensils"></i>
            Show All Restaurants
          </button>
        </div>
      </div>
    `;
  },

  _getSearchQueryFromURL() {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.get('q') || '';
    } catch (error) {
      console.error('Error getting search query:', error);
      return '';
    }
  },

  _generateSkeletons() {
    let skeletons = '';
    for (let i = 0; i < 6; i++) {
      skeletons += `
        <div class="restaurant-item skeleton">
          <div class="restaurant-image-container">
            <div class="skeleton-img"></div>
          </div>
          <div class="restaurant-info">
            <div class="skeleton-text restaurant-name-skeleton"></div>
            <div class="restaurant-meta">
              <div class="skeleton-text restaurant-city-skeleton"></div>
              <div class="skeleton-text restaurant-rating-skeleton"></div>
            </div>
            <div class="skeleton-text restaurant-description-skeleton"></div>
            <div class="skeleton-text restaurant-description-skeleton"></div>
            <div class="restaurant-actions">
              <div class="skeleton-text view-detail-skeleton"></div>
            </div>
          </div>
        </div>
      `;
    }
    return skeletons;
  },

  async afterRender() {
    const elements = {
      restaurantsContainer: document.querySelector('#restaurants'),
      searchForm: document.querySelector('#searchForm'),
      searchInput: document.querySelector('#searchInput'),
      noResults: document.querySelector('#no-results'),
      loadingIndicator: document.querySelector('.loading-indicator'),
      showAllButton: document.querySelector('.all-restaurants-button')
    };

    try {
      await showConnectionStatus();
      startConnectionMonitoring();

      const initialQuery = this._getSearchQueryFromURL();
      if (initialQuery) {
        await this._performSearch(initialQuery, elements);
      } else {
        await this._loadAllRestaurants(elements);
      }

      if (elements.showAllButton) {
        elements.showAllButton.addEventListener('click', async () => {
          if (elements.searchInput) {
            elements.searchInput.value = '';
          }
          
          const url = new URL(window.location);
          url.searchParams.delete('q');
          window.history.pushState({}, '', url);

          await this._loadAllRestaurants(elements);
        });
      }

      elements.searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = elements.searchInput.value.trim();

        const url = new URL(window.location);
        if (query) {
          url.searchParams.set('q', query);
        } else {
          url.searchParams.delete('q');
        }
        window.history.pushState({}, '', url);

        if (query) {
          await this._performSearch(query, elements);
        } else {
          await this._loadAllRestaurants(elements);
        }
      });
    } catch (error) {
      console.error('Error in afterRender:', error);
      this.renderError(error, elements.restaurantsContainer);
    }
  },

  async _loadAllRestaurants(elements) {
    const { restaurantsContainer, noResults } = elements;

    try {
      const cachedRestaurants = await this._fetchRestaurantsFromCache();
      if (cachedRestaurants) {
        this.renderRestaurants(cachedRestaurants, restaurantsContainer);
        this._showResults(restaurantsContainer, noResults);
        this._initializeLazyLoading();
      }

      const networkRestaurants = await this._fetchRestaurantsFromNetwork();
      if (networkRestaurants) {
        const shouldUpdate = !cachedRestaurants ||
          JSON.stringify(networkRestaurants) !== JSON.stringify(cachedRestaurants);

        if (shouldUpdate) {
          this.renderRestaurants(networkRestaurants, restaurantsContainer);
          this._showResults(restaurantsContainer, noResults);
          this._initializeLazyLoading();
        }
      }
    } catch (error) {
      console.error('Load error:', error);
      this.renderError(error, restaurantsContainer);
    }
  },

  async _fetchRestaurantsFromNetwork() {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}/list`);
      const { restaurants } = await response.json();

      const BATCH_SIZE = 5;
      for (let i = 0; i < restaurants.length; i += BATCH_SIZE) {
        const batch = restaurants.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map((restaurant) =>
          fetch(`${CONFIG.BASE_URL}/detail/${restaurant.id}`)
            .then((res) => res.json())
            .then((data) => {
              if ('serviceWorker' in navigator) {
                caches.open('restaurant-details')
                  .then((cache) => cache.put(
                    `${CONFIG.BASE_URL}/detail/${restaurant.id}`,
                    new Response(JSON.stringify(data))
                  ));
              }
            })
            .catch((err) => console.warn(`Detail fetch failed for ${restaurant.id}:`, err))
        ));
      }

      return restaurants;
    } catch (error) {
      console.warn('Network fetch failed:', error);
      return null;
    }
  },

  async _fetchRestaurantsFromCache() {
    try {
      const apiCache = await caches.open('api-responses');
      const listResponse = await apiCache.match(`${CONFIG.BASE_URL}/list`);

      if (listResponse) {
        const data = await listResponse.json();
        if (data.restaurants && data.restaurants.length > 0) {
          return data.restaurants;
        }
      }

      const detailCache = await caches.open('restaurant-details');
      const detailKeys = await detailCache.keys();

      const detailUrls = detailKeys.filter((key) => key.url.includes('/detail/'));

      const detailPromises = detailUrls.map(async (key) => {
        const response = await detailCache.match(key);
        if (response) {
          const data = await response.json();
          return data.restaurant;
        }
        return null;
      });

      const detailResults = await Promise.all(detailPromises);
      const restaurants = detailResults.filter(Boolean);

      return restaurants.length > 0 ? restaurants : null;
    } catch (error) {
      console.warn('Cache fetch failed:', error);
      return null;
    }
  },

  async _prefetchRestaurantDetailsAndImages(restaurants) {
    if (!restaurants?.length) return;

    const BATCH_SIZE = 5;
    const seen = new Set();

    for (let i = 0; i < restaurants.length; i += BATCH_SIZE) {
      const batch = restaurants.slice(i, i + BATCH_SIZE)
        .filter((r) => !seen.has(r.id));

      batch.forEach((r) => seen.add(r.id));

      await Promise.all(batch.map((restaurant) =>
        this._optimizedImageLoading(`${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}`)
          .catch((err) => console.warn(`Image prefetch failed for ${restaurant.id}:`, err))
      ));
    }
  },

  _initializeLazyLoading() {
    if (!('IntersectionObserver' in window)) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          this._loadImage(img);
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px'
    });

    document.querySelectorAll('.restaurant-item__thumbnail')
      .forEach((img) => imageObserver.observe(img));
  },

  _loadImage(img) {
    const actualSrc = img.dataset.src;
    if (actualSrc) {
      img.src = actualSrc;
    }
  },

  async _performSearch(query, elements) {
    const { restaurantsContainer, noResults } = elements;

    try {
      restaurantsContainer.innerHTML = this._generateSkeletons();
      if (noResults) noResults.style.display = 'none';

      let restaurants = await this._fetchRestaurantsFromNetwork();
      if (!restaurants) {
        restaurants = await this._fetchRestaurantsFromCache();
      }

      if (!restaurants) {
        throw new Error('No restaurant data available');
      }

      const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
      
      const filteredRestaurants = restaurants.filter((restaurant) => {
        const searchableText = [
          restaurant.name || '',
          restaurant.city || ''
        ].join(' ').toLowerCase();

        return searchTerms.every(term => searchableText.includes(term));
      });

      if (filteredRestaurants.length > 0) {
        this.renderRestaurants(filteredRestaurants, restaurantsContainer);
        this._showResults(restaurantsContainer, noResults);
        this._initializeLazyLoading();
      } else {
        this._showNoResults(restaurantsContainer, noResults);
      }
    } catch (error) {
      console.error('Search error:', error);
      this.renderError(error, restaurantsContainer);
    }
},

  _showLoading(loadingIndicator, restaurantsContainer, noResults) {
    if (loadingIndicator) loadingIndicator.classList.add('active');
    if (restaurantsContainer) restaurantsContainer.style.display = 'none';
    if (noResults) noResults.style.display = 'none';
  },

  _hideLoading(loadingIndicator) {
    if (loadingIndicator) loadingIndicator.classList.remove('active');
  },

  _showResults(restaurantsContainer, noResults) {
    if (restaurantsContainer) restaurantsContainer.classList.remove('loading');
    if (noResults) noResults.style.display = 'none';
  },

  _showNoResults(restaurantsContainer, noResults) {
    if (restaurantsContainer) restaurantsContainer.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
  },

  renderRestaurants(restaurants, container) {
    if (!container) return;

    container.innerHTML = '';
    restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.setAttribute('data-id', restaurant.id);
      restaurantItemElement.restaurant = restaurant;
      container.appendChild(restaurantItemElement);
    });
  },

  renderError(error, container) {
    if (!container) return;

    container.innerHTML = `
      <div class="error">
        <p>Error loading restaurants</p>
        <p>${error.message || 'Something went wrong'}</p>
        <button onclick="window.location.reload()" class="retry-button">Try Again</button>
      </div>
    `;
  }
};

export default Home;