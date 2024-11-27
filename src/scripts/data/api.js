export const API_ENDPOINT = 'https://restaurant-api.dicoding.dev';
export const BASE_IMAGE_URL = 'https://restaurant-api.dicoding.dev/images/medium/';

const RestaurantAPI = {
  async getRestaurants() {
    try {
      const response = await fetch(`${API_ENDPOINT}/list`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      throw new Error('Unable to load restaurants. Please check your connection.');
    }
  },

  async getRestaurantDetail(id, skipCache = false) {
    const cacheKey = `${API_ENDPOINT}/detail/${id}`;
    try {
      if (!skipCache) {
        const cache = await caches.open('restaurant-details');
        const cachedResponse = await cache.match(cacheKey);

        if (cachedResponse) {
          const data = await cachedResponse.json();
          if (data.restaurant) {
            return data.restaurant;
          }
        }
      }

      const response = await fetch(cacheKey);
      if (!response.ok) {
        throw new Error(`Failed to fetch restaurant (status: ${response.status})`);
      }

      const responseJson = await response.json();

      if (!skipCache) {
        const cache = await caches.open('restaurant-details');
        cache.put(cacheKey, new Response(JSON.stringify(responseJson)));
      }

      return responseJson.restaurant;
    } catch (error) {
      console.error('Error fetching restaurant detail:', error);
      throw new Error('Unable to load restaurant details. Please check your connection.');
    }
  },

  async addReview(reviewData) {
    try {
      const response = await fetch(`${API_ENDPOINT}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      return await response.json();
    } catch (error) {
      console.error('Error submitting review:', error);
      throw error;
    }
  }
};

export default RestaurantAPI;
