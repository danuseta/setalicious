import UrlParser from '../../utils/url-parser';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { showConnectionStatus, startConnectionMonitoring } from './offline';
import { checkInternetConnection } from './offline';

const DetailRestaurant = {
  async render() {
    return `
      <div id="restaurant-detail" class="restaurant-detail">
      <!-- <div id="loading-detail" class="loading-indicator">
        <div class="loading-spinner"></div>
        <p>Loading restaurant details...</p>
      </div> -->
        <div id="detail-content"></div>
      </div>
    `;
  },

  async afterRender() {
    const elements = {
      loadingIndicator: document.querySelector('#loading-detail'),
      detailContent: document.querySelector('#detail-content')
    };

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      if (!url.id) {
        throw new Error('Restaurant ID not found');
      }

      await showConnectionStatus();
      startConnectionMonitoring();

      this._showLoading(elements.loadingIndicator);
      const restaurant = await this.getRestaurantDetail(url.id);

      if (!restaurant) {
        throw new Error('Restaurant not found');
      }

      await this.renderRestaurantDetail(restaurant, elements.detailContent);
      await this.initializeFavoriteButton(restaurant);
    } catch (error) {
      console.error('Error in afterRender:', error);
      this.renderError(error, elements.detailContent);
    } finally {
      this._hideLoading(elements.loadingIndicator);
    }
  },

  async getRestaurantDetail(id) {
    try {
      const isOnline = await checkInternetConnection();
      let restaurant = null;

      const cache = await caches.open('restaurant-details');
      const cachedResponse = await cache.match(`${CONFIG.BASE_URL}/detail/${id}`);

      if (cachedResponse) {
        const cachedData = await cachedResponse.json();
        restaurant = cachedData.restaurant;
        if (restaurant) {
          await this.renderRestaurantDetail(restaurant, document.querySelector('#detail-content'));
        }
      }

      if (isOnline) {
        try {
          const response = await fetch(`${CONFIG.BASE_URL}/detail/${id}`);
          const responseJson = await response.json();

          if (responseJson.error) {
            throw new Error('Restaurant not found');
          }

          restaurant = responseJson.restaurant;

          if (JSON.stringify(responseJson.restaurant) !== JSON.stringify(cachedData?.restaurant)) {
            await this.renderRestaurantDetail(restaurant, document.querySelector('#detail-content'));
          }

          const restaurantToCache = { ...restaurant };
          delete restaurantToCache.customerReviews;
          await cache.put(
            `${CONFIG.BASE_URL}/detail/${id}`,
            new Response(JSON.stringify({
              error: false,
              message: 'success',
              restaurant: restaurantToCache
            }))
          );
        } catch (error) {
          console.warn('Network fetch failed:', error);
          if (restaurant) return restaurant;
          throw error;
        }
      }

      if (!restaurant) {
        throw new Error('Restaurant not found - no cache available offline');
      }

      return restaurant;

    } catch (error) {
      console.error('Restaurant detail error:', error);
      throw error;
    }
  },

  _showLoading(loadingIndicator) {
    if (loadingIndicator) loadingIndicator.classList.add('active');
  },

  _hideLoading(loadingIndicator) {
    if (loadingIndicator) loadingIndicator.classList.remove('active');
  },

  async renderRestaurantDetail(restaurant, container) {
    if (!container) return;

    const sortedReviews = this._sortReviewsByDate(restaurant.customerReviews || []);

    container.innerHTML = `
      <h1 class="restaurant-detail-title">Restaurant Details</h1>
      <div class="detail-header">
        <div class="detail-card">
          <div class="detail-card-inner">
            <div class="detail-image-container">
              <button onclick="window.history.back()" class="back-button-details" aria-label="Back to previous page">
                <i class="fa-solid fa-angle-left"></i>
              </button>
              <div class="image-loading"></div>
              <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" 
                   alt="${restaurant.name}" 
                   class="detail-image">
            </div>

            <div class="detail-info">
              <div class="detail-header-content">
                <div class="detail-header-left">
                  <div class="restaurant-title">
                    <h2 class="detail-name">${restaurant.name}</h2>
                    <div class="detail-rating">
                      <i class="fa-solid fa-star icon"></i>
                      <span class="rating-value">${restaurant.rating || 'N/A'}</span>
                    </div>
                  </div>
                  <div class="detail-meta">
                    <div class="detail-address">
                      <span class="icon" aria-hidden="true">🏠</span>
                      <span>${restaurant.address || 'Address not available offline'}</span>
                    </div>
                    <div class="detail-city">
                      <span class="icon" aria-hidden="true">📍</span>
                      <span>${restaurant.city || 'City not available offline'}</span>
                    </div>
                  </div>
                </div>
                <div id="favoriteButtonContainer" class="favorite-button-container">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-description">
        <div class="detail-description-inner">
          <h3><i class="fa-solid fa-circle-info menu-icon"></i>About</h3>
          <p>${restaurant.description}</p>
        </div>
      </div>

      <div class="detail-menus">
        <div class="detail-menus-inner">
          <div class="menu-section">
            <h3>
              <i class="fa-solid fa-utensils menu-icon"></i>
              Foods Menu
            </h3>
            <ul class="menu-list">
              ${(restaurant.menus?.foods || []).map((food) => `
                <li class="menu-item">
                  <div class="menu-icon-container">
                    <i class="fa-solid fa-burger food-icon"></i>
                  </div>
                  <div class="menu-item-content">
                    <div class="menu-item-name">${food.name}</div>
                  </div>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="menu-section">
            <h3>
              <i class="fa-solid fa-glass-water menu-icon"></i>
              Drinks Menu
            </h3>
            <ul class="menu-list">
              ${(restaurant.menus?.drinks || []).map((drink) => `
                <li class="menu-item">
                  <div class="menu-icon-container">
                    <i class="fa-solid fa-mug-hot drink-icon"></i>
                  </div>
                  <div class="menu-item-content">
                    <div class="menu-item-name">${drink.name}</div>
                  </div>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>

      <div class="detail-reviews">
        <div class="detail-reviews-inner">
          <h3><i class="fa-solid fa-comments menu-icon"></i>Customer Reviews</h3>
          <ul class="review-list">
            ${this._generateReviewsHTML(sortedReviews)}
            ${!sortedReviews.length ? '<li class="no-reviews">No reviews yet</li>' : ''}
          </ul>

          <div class="add-review">
            <h4>
              <i class="fa-solid fa-pen"></i>
              Add Your Review
            </h4>
            <form id="review-form">
              <input type="hidden" name="id" value="${restaurant.id}">
              <div class="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required
                  autocomplete="name"
                >
              </div>
              <div class="form-group">
                <textarea 
                  name="review" 
                  placeholder="Share your experience..." 
                  required
                ></textarea>
              </div>
              <button type="submit" class="submit-review">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    `;

    this._initImageLoading();
    this.initReviewForm(restaurant.id);
    await this.initializeFavoriteButton(restaurant);
  },

  _sortReviewsByDate(reviews) {
    if (!Array.isArray(reviews)) return [];

    return reviews.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      // if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
      //     console.warn('Invalid date found:', a.date, b.date);
      //     return 0;
      // }

      return dateA - dateB;
    });
  },

  _generateReviewsHTML(reviews) {
    if (!Array.isArray(reviews) || !reviews.length) return '';

    return reviews.map((review) => `
      <li class="review-item">
        <div class="review-avatar">
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="review-content">
          <div class="review-header">
            <span class="reviewer-name">${review.name}</span>
            <span class="review-date">${review.date}</span>
          </div>
          <p class="review-text">${review.review}</p>
        </div>
      </li>
    `).join('');
  },

  async initializeFavoriteButton(restaurant) {
    const favoriteButtonContainer = document.querySelector('#favoriteButtonContainer');
    if (!favoriteButtonContainer) return;

    try {
      const isFavorite = await FavoriteRestaurantIdb.getRestaurant(restaurant.id);
      this._renderFavoriteButton(favoriteButtonContainer, !!isFavorite);
      this._initializeFavoriteButtonHandler(restaurant, favoriteButtonContainer);
    } catch (error) {
      console.error('Error initializing favorite button:', error);
      favoriteButtonContainer.innerHTML = `
        <div class="error-message">
          Unable to access favorites
        </div>
      `;
    }
  },

  _renderFavoriteButton(container, isFavorite) {
    if (!container) return;
    container.innerHTML = `
      <button 
        aria-label="${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}"
        id="favoriteButton" 
        class="favorite-button ${isFavorite ? 'favorite' : ''}"
      >
        <span class="icon" aria-hidden="true">
          ${isFavorite ? '❤️' : '🤍'}
        </span>
      </button>
    `;
  },

  _initializeFavoriteButtonHandler(restaurant, container) {
    const favoriteButton = container.querySelector('#favoriteButton');
    if (!favoriteButton) return;

    favoriteButton.addEventListener('click', async (event) => {
      event.stopPropagation();
      try {
        const isFavorite = await FavoriteRestaurantIdb.getRestaurant(restaurant.id);

        if (isFavorite) {
          await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
          Swal.fire({
            icon: 'success',
            title: 'Removed from Favorites',
            html: `<strong>${restaurant.name}</strong> removed from your favorites`,
            position: 'center',
            timer: 2000,
            showConfirmButton: false,
            background: '#fff',
            customClass: {
              popup: 'swal-custom',
              title: 'swal-title',
              htmlContainer: 'swal-text'
            }
          });
        } else {
          await FavoriteRestaurantIdb.putRestaurant(restaurant);
          Swal.fire({
            icon: 'success',
            title: 'Added to Favorites',
            html: `<strong>${restaurant.name}</strong> added to your favorites`,
            position: 'center',
            timer: 2000,
            showConfirmButton: false,
            background: '#fff',
            customClass: {
              popup: 'swal-custom',
              title: 'swal-title',
              htmlContainer: 'swal-text'
            }
          });
        }

        const newIsFavorite = !isFavorite;
        container.innerHTML = `
          <button 
            aria-label="${newIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}"
            id="favoriteButton" 
            class="favorite-button ${newIsFavorite ? 'favorite' : ''}"
          >
            <span class="icon" aria-hidden="true">
              ${newIsFavorite ? '❤️' : '🤍'}
            </span>
          </button>
        `;

        this._initializeFavoriteButtonHandler(restaurant, container);

      } catch (error) {
        console.error('Error toggling favorite status:', error);
        this._showAlert('Error', 'Unable to update favorite status', 'error');
      }
    });
  },

  _initImageLoading() {
    const imageContainer = document.querySelector('.detail-image-container');
    const image = imageContainer?.querySelector('.detail-image');
    const loadingIndicator = imageContainer?.querySelector('.image-loading');

    if (!image || !loadingIndicator || !imageContainer) return;

    image.addEventListener('load', () => {
      loadingIndicator.style.display = 'none';
      image.classList.add('loaded');
    });

    image.addEventListener('error', () => {
      loadingIndicator.style.display = 'none';
      image.classList.add('error');
    });
  },

  _showAlert(title, text, icon) {
    Swal.fire({
      icon,
      title,
      text,
      position: 'center',
      timer: 2000,
      showConfirmButton: false,
      background: '#fff',
      customClass: {
        popup: 'swal-custom',
        title: 'swal-title',
        htmlContainer: 'swal-text'
      }
    });
  },

  async initReviewForm(restaurantId) {
    const form = document.querySelector('#review-form');
    if (!form) return;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]');
      const reviewList = document.querySelector('.review-list');

      if (!submitButton || !reviewList) return;

      try {
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';

        const reviewData = {
          id: restaurantId,
          name: formData.get('name'),
          review: formData.get('review')
        };

        const response = await fetch(`${CONFIG.BASE_URL}/review`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reviewData),
        }); if (!response.ok) {
          throw new Error('Unable to submit review');
        }

        const responseData = await response.json();

        if (responseData.customerReviews) {
          const sortedReviews = this._sortReviewsByDate(responseData.customerReviews);
          reviewList.innerHTML = this._generateReviewsHTML(sortedReviews);
        }

        form.reset();
        this._showAlert('Success', 'Review submitted successfully', 'success');
      } catch (error) {
        console.error('Review submission error:', error);
        this._showAlert('Error', 'No Internet Connection. Please try again later', 'error');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Review';
      }
    });
  },

  renderError(error, container) {
    if (!container) return;

    container.innerHTML = `
      <div class="error">
        <p>${error.message || 'Something went wrong'}</p>
        <button onclick="window.history.back()" class="back-button">Back to Previous Page</button>
      </div>
    `;
  }
};

export default DetailRestaurant;