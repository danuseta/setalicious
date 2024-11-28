import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

// const simulateSlowImage = (url, minDelay = 2000, maxDelay = 4000) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.random() * (maxDelay - minDelay) + minDelay;
//     const img = new Image();

//     img.onload = () => {
//       setTimeout(() => resolve(url), delay);
//     };

//     img.onerror = () => {
//       reject(new Error('Failed to load image'));
//     };

//     img.src = url;
//   });
// };

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
    try {
      const isFavorite = await FavoriteRestaurantIdb.getRestaurant(this._restaurant.id);

      this.innerHTML = `
        <article class="restaurant-item">
          <div class="restaurant-image-container">
            <!-- Restaurant image placeholder -->
            <div class="restaurant-image-placeholder"></div>
            
            <!-- Restaurant image with lazy loading -->
            <img 
              class="lazyload restaurant-image blur-up"
              data-src="${CONFIG.BASE_IMAGE_URL}${this._restaurant.pictureId}"
              data-sizes="auto"
              alt="${this._restaurant.name}"
            >
            
            <!-- Loading progress bar -->
            <div class="image-loading-progress"></div>
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

      this._initFavoriteButton();
      this._handleImageLoading();
    } catch (error) {
      console.error('Error rendering restaurant item:', error);
      this._renderError();
    }
  }

  _handleImageLoading() {
    const image = this.querySelector('.restaurant-image');
    const progressBar = this.querySelector('.image-loading-progress');
    if (!image || !progressBar) return;

    image.addEventListener('lazyloaded', () => {
      image.classList.add('loaded');
      progressBar.style.width = '100%';

      setTimeout(() => {
        progressBar.style.opacity = '0';
      }, 200);
    });

    requestAnimationFrame(() => {
      progressBar.style.width = '90%';
    });

    image.addEventListener('error', () => {
      this._handleImageError(image, progressBar);
    });
  }

  // async _handleImageLoading() {
  //   const image = this.querySelector('.restaurant-image');
  //   const progressBar = this.querySelector('.image-loading-progress');
  //   if (!image || !progressBar) return;

  //   try {
  //     const originalSrc = image.dataset.src;
  //     let loadingProgress = 0;

  //     const progressInterval = setInterval(() => {
  //       loadingProgress += 2;
  //       if (loadingProgress <= 90) {
  //         progressBar.style.width = `${loadingProgress}%`;
  //       }
  //     }, 50);

  //     const imageUrl = await simulateSlowImage(originalSrc);

  //     clearInterval(progressInterval);
  //     progressBar.style.width = '100%';

  //     image.src = imageUrl;
  //     image.classList.add('loaded');

  //     setTimeout(() => {
  //       progressBar.style.opacity = '0';
  //     }, 200);

  //   } catch (error) {
  //     console.warn('Failed to load image:', error);
  //     this._handleImageError(image, progressBar);
  //   }
  // }

  async _handleImageError(image, progressBar) {
    try {
      const imageUrl = image.dataset.src;
      const cache = await caches.open('restaurant-images');
      const cachedResponse = await cache.match(imageUrl);

      if (cachedResponse) {
        const blob = await cachedResponse.blob();
        image.src = URL.createObjectURL(blob);
        image.classList.add('loaded');
      } else {
        image.src = '/images/placeholder-restaurant.jpg';
        image.classList.add('error');
      }
    } catch (error) {
      console.warn('Failed to load image:', error);
      image.src = '/images/placeholder-restaurant.jpg';
      image.classList.add('error');
    } finally {
      if (progressBar) {
        progressBar.style.opacity = '0';
      }
    }
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
          this._showFeedback('Removed from Favorites', 'success');
        } else {
          await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
          this._showFeedback('Added to Favorites', 'success');
        }

        this.render();
      } catch (error) {
        console.error('Error toggling favorite status:', error);
        this._showFeedback('Unable to update favorite status', 'error');
      }
    });
  }

  _showFeedback(message, type = 'success') {
    Swal.fire({
      icon: type,
      title: type === 'success' ? message : 'Error',
      html: `<strong>${this._restaurant.name}</strong> ${message.toLowerCase()}`,
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

  _renderError() {
    this.innerHTML = `
      <article class="restaurant-item error">
        <div class="error-message">
          <p>Failed to load restaurant data</p>
          <button onclick="location.reload()" class="retry-button">
            Try Again
          </button>
        </div>
      </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);