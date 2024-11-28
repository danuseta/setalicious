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
    return Array(6).fill()
      .map(() => `
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
      `).join('');
  },

  async afterRender() {
    const elements = {
      restaurantsContainer: document.querySelector('#restaurants'),
      searchForm: document.querySelector('#searchForm'),
      searchInput: document.querySelector('#searchInput'),
      noResults: document.querySelector('#no-results'),
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

      this._initializeEventListeners(elements);
    } catch (error) {
      console.error('Error in afterRender:', error);
      this.renderError(error, elements.restaurantsContainer);
    }
  },

  _initializeEventListeners(elements) {
    const { searchForm, searchInput, showAllButton } = elements;

    if (showAllButton) {
      showAllButton.addEventListener('click', async () => {
        if (searchInput) {
          searchInput.value = '';
        }

        const url = new URL(window.location);
        url.searchParams.delete('q');
        window.history.pushState({}, '', url);

        await this._loadAllRestaurants(elements);
      });
    }

    searchForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();

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
  },

  async _loadAllRestaurants(elements) {
    const { restaurantsContainer, noResults } = elements;

    try {
      const cachedRestaurants = await this._fetchRestaurantsFromCache();
      if (cachedRestaurants?.length) {
        this.renderRestaurants(cachedRestaurants, restaurantsContainer);
        this._showResults(restaurantsContainer, noResults);
      }

      const networkRestaurants = await this._fetchRestaurantsFromNetwork();
      if (networkRestaurants?.length) {
        const shouldUpdate = !cachedRestaurants ||
          JSON.stringify(networkRestaurants) !== JSON.stringify(cachedRestaurants);

        if (shouldUpdate) {
          this.renderRestaurants(networkRestaurants, restaurantsContainer);
          this._showResults(restaurantsContainer, noResults);
        }
      }
    } catch (error) {
      console.error('Load error:', error);
      if (!cachedRestaurants?.length) {
        this.renderError(error, restaurantsContainer);
      }
    }
  },

  async _fetchRestaurantsFromNetwork() {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}/list`);
      const { restaurants } = await response.json();

      this._prefetchRestaurantDetails(restaurants);

      return restaurants;
    } catch (error) {
      console.warn('Network fetch failed:', error);
      return null;
    }
  },

  async _prefetchRestaurantDetails(restaurants) {
    const BATCH_SIZE = 5;
    const cache = await caches.open('restaurant-details');

    for (let i = 0; i < restaurants.length; i += BATCH_SIZE) {
      const batch = restaurants.slice(i, i + BATCH_SIZE);
      await Promise.allSettled(batch.map(async (restaurant) => {
        try {
          const response = await fetch(`${CONFIG.BASE_URL}/detail/${restaurant.id}`);
          const data = await response.json();
          await cache.put(
            `${CONFIG.BASE_URL}/detail/${restaurant.id}`,
            new Response(JSON.stringify(data))
          );
        } catch (err) {
          console.warn(`Detail fetch failed for ${restaurant.id}:`, err);
        }
      }));
    }
  },

  async _fetchRestaurantsFromCache() {
    try {
      const [apiCache, detailCache] = await Promise.all([
        caches.open('api-responses'),
        caches.open('restaurant-details')
      ]);

      const listResponse = await apiCache.match(`${CONFIG.BASE_URL}/list`);
      if (listResponse) {
        const { restaurants } = await listResponse.json();
        if (restaurants?.length) return restaurants;
      }

      const keys = await detailCache.keys();
      const detailResponses = await Promise.all(
        keys
          .filter((key) => key.url.includes('/detail/'))
          .map((key) => detailCache.match(key))
      );

      const restaurants = await Promise.all(
        detailResponses
          .filter(Boolean)
          .map(async (response) => {
            const data = await response.json();
            return data.restaurant;
          })
      );

      return restaurants.filter(Boolean);
    } catch (error) {
      console.warn('Cache fetch failed:', error);
      return null;
    }
  },

  async _performSearch(query, elements) {
    const { restaurantsContainer, noResults } = elements;

    try {
      restaurantsContainer.innerHTML = this._generateSkeletons();
      if (noResults) noResults.style.display = 'none';

      let restaurants = await this._fetchRestaurantsFromNetwork();
      if (!restaurants?.length) {
        restaurants = await this._fetchRestaurantsFromCache();
      }

      if (!restaurants?.length) {
        throw new Error('No restaurant data available');
      }

      const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
      const filteredRestaurants = this._filterRestaurants(restaurants, searchTerms);

      if (filteredRestaurants.length) {
        this.renderRestaurants(filteredRestaurants, restaurantsContainer);
        this._showResults(restaurantsContainer, noResults);
      } else {
        this._showNoResults(restaurantsContainer, noResults);
      }
    } catch (error) {
      console.error('Search error:', error);
      this.renderError(error, restaurantsContainer);
    }
  },

  _filterRestaurants(restaurants, searchTerms) {
    return restaurants.filter((restaurant) => {
      const searchableText = [
        restaurant.name,
        restaurant.city,
        restaurant.description
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchTerms.every((term) => searchableText.includes(term));
    });
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
    if (!container || !restaurants?.length) return;

    container.innerHTML = '';

    const fragment = document.createDocumentFragment();
    restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement('restaurant-item');
      restaurantElement.setAttribute('data-id', restaurant.id);
      restaurantElement.restaurant = restaurant;
      fragment.appendChild(restaurantElement);
    });

    container.appendChild(fragment);
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