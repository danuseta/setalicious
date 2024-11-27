import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import Swal from 'sweetalert2';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  async connectedCallback() {
    if (!this._restaurant) {
      this.renderSkeleton();
    } else {
      this.render();
    }
  }

  renderSkeleton() {
    this.innerHTML = `
      <article class="restaurant-item skeleton">
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
      </article>
    `;
  }

  async render() {
    const isFavorite = await FavoriteRestaurantIdb.getRestaurant(this._restaurant.id);

    this.innerHTML = `
      <article class="restaurant-item">
        <div class="restaurant-image-container">
          <div class="image-loading"></div>
          <img 
            class="restaurant-image" 
            src="${CONFIG.BASE_IMAGE_URL}${this._restaurant.pictureId}" 
            alt="${this._restaurant.name}"
            loading="lazy"
          >
        </div>
        <div class="restaurant-info">
          <h3 class="restaurant-name">${this._restaurant.name}</h3>
          <div class="restaurant-meta">
            <div class="restaurant-city">
              <span class="icon" aria-hidden="true">📍</span>
              <span>${this._restaurant.city}</span>
            </div>
            <div class="restaurant-rating">
              <span class="icon" aria-hidden="true">⭐</span>
              <span>${this._restaurant.rating}</span>
            </div>
          </div>
          <p class="restaurant-description">${this._restaurant.description}</p>
          <div class="restaurant-actions">
            <a 
              href="#/detail/${this._restaurant.id}" 
              class="view-detail"
              aria-label="View details of ${this._restaurant.name}"
            >
              View Details
            </a>
            <button 
              class="favorite-button ${isFavorite ? 'favorite' : ''}"
              aria-label="${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}"
              data-id="${this._restaurant.id}"
            >
              <span class="icon" aria-hidden="true">
                ${isFavorite ? '❤️' : '🤍'}
              </span>
            </button>
          </div>
        </div>
      </article>
    `;

    this._initImageLoading();
    this._initFavoriteButton();
  }

  _initImageLoading() {
    const imageContainer = this.querySelector('.restaurant-image-container');
    const image = imageContainer.querySelector('.restaurant-image');
    const loadingIndicator = imageContainer.querySelector('.image-loading');

    image.addEventListener('load', () => {
      loadingIndicator.style.display = 'none';
      image.classList.add('loaded');
    });

    image.addEventListener('error', async () => {
      try {
        const imageUrl = image.src;
        const cache = await caches.open('images');
        const cachedResponse = await cache.match(imageUrl);

        if (cachedResponse) {
          const blob = await cachedResponse.blob();
          image.src = URL.createObjectURL(blob);
        } else {
          image.src = '/images/placeholder-restaurant.jpg';
        }
      } catch (error) {
        console.warn('Failed to load image from cache:', error);
        image.src = '/images/placeholder-restaurant.jpg';
      } finally {
        loadingIndicator.style.display = 'none';
      }
    });
  }

  async _initFavoriteButton() {
    const favoriteButton = this.querySelector('.favorite-button');
    if (!favoriteButton) return;

    favoriteButton.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      try {
        const restaurantId = favoriteButton.dataset.id;
        const isFavorite = await FavoriteRestaurantIdb.getRestaurant(restaurantId);

        if (isFavorite) {
          await FavoriteRestaurantIdb.deleteRestaurant(restaurantId);
          Swal.fire({
            icon: 'success',
            title: 'Removed from Favorites',
            html: `<strong>${this._restaurant.name}</strong> removed from your favorites`,
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
          await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
          Swal.fire({
            icon: 'success',
            title: 'Added to Favorites',
            html: `<strong>${this._restaurant.name}</strong> added to your favorites`,
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

        this.render();
      } catch (error) {
        console.error('Error toggling favorite status:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Unable to update favorite status',
          position: 'center',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  }
}

customElements.define('restaurant-item', RestaurantItem);