import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const FavoritePage = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurants</h2>
        <div id="loading-indicator" class="loading-indicator">
          <div class="loading-spinner"></div>
          <p>Loading favorites...</p>
        </div>
        <div id="restaurants" class="restaurant-list"></div>
        <div class="browse-button-wrapper">
          <div id="browse-button" class="browse-button-container">
            <a href="#/" class="browse-restaurants-button">
              <i class="fa-solid fa-utensils"></i>
              Browse All Restaurants
            </a>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const loadingIndicator = document.querySelector('#loading-indicator');
    const restaurantsContainer = document.querySelector('#restaurants');
    const browseButton = document.querySelector('#browse-button');
    const browseWrapper = document.querySelector('.browse-button-wrapper');

    if (browseWrapper && browseButton) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            browseButton.classList.add('sticky');
          } else {
            browseButton.classList.remove('sticky');
          }
        },
        { threshold: 1 }
      );

      observer.observe(browseWrapper);
    }

    try {
      loadingIndicator.classList.add('active');
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

      if (restaurants.length === 0) {
        this.renderEmpty(restaurantsContainer);
      } else {
        this.renderRestaurants(restaurants, restaurantsContainer);
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
      this.renderError(error, restaurantsContainer);
    } finally {
      loadingIndicator.classList.remove('active');
    }
  },

  renderRestaurants(restaurants, container) {
    container.innerHTML = '';
    restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.setAttribute('data-id', restaurant.id);
      restaurantItemElement.restaurant = restaurant;
      container.appendChild(restaurantItemElement);
    });
  },

  renderEmpty(container) {
    container.innerHTML = `
      <div class="empty-favorites">
        <i class="fa-solid fa-heart-crack empty-icon"></i>
        <p>You haven't added any restaurants to your favorites yet.</p>
      </div>
    `;
  },

  renderError(error, container) {
    container.innerHTML = `
      <div class="error">
        <p>Error loading favorite restaurants</p>
        <p>${error.message}</p>
      </div>
    `;
  }
};

export default FavoritePage;