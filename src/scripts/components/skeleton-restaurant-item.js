class SkeletonRestaurantItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
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
}

customElements.define('skeleton-restaurant-item', SkeletonRestaurantItem);