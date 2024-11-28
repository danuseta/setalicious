const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant || {};

    if (!id) {
      this._renderLike();
      return;
    }

    try {
      const isExist = await this._isRestaurantExist(id);
      if (isExist) {
        this._renderLiked();
      } else {
        this._renderLike();
      }
    } catch (error) {
      console.error('Error in _renderButton:', error);
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    try {
      const restaurant = await this._favoriteRestaurants.getRestaurant(id);
      return !!restaurant;
    } catch {
      return false;
    }
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = `
      <button aria-label="Tambah ke favorit" id="likeButton" class="like">
        <i class="like-icon" aria-hidden="true"></i>
      </button>
    `;

    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    likeButton?.addEventListener('click', async () => {
      if (this._restaurant?.id) {
        await this._favoriteRestaurants.putRestaurant(this._restaurant);
        await this._renderButton();
      }
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = `
      <button aria-label="Hapus dari favorit" id="likeButton" class="like">
        <i class="liked-icon" aria-hidden="true"></i>
      </button>
    `;

    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    likeButton?.addEventListener('click', async () => {
      try {
        await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
        await this._renderButton();
      } catch (error) {
        console.error('Error deleting restaurant:', error);
      }
    });
  },
};

export default LikeButtonPresenter;