import * as TestFactories from './helper/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Menyukai Restoran', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('menampilkan widget suka ketika restoran belum disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Tambah ke favorit"]'))
      .toBeTruthy();
  });

  it('tidak menampilkan widget batal suka ketika restoran belum disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus dari favorit"]'))
      .toBeFalsy();
  });

  it('dapat menyukai restoran', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restoran = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restoran).toEqual({ id: 1 });
  });

  it('tidak menambahkan restoran lagi ketika sudah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toHaveLength(1);
  });

  it('tidak menyukai restoran tanpa id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toHaveLength(0);
  });

  it('tidak menyukai restoran dengan id undefined', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: undefined });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toHaveLength(0);
  });
  
  it('tidak menyukai restoran dengan id null', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: null });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toHaveLength(0);
  });

});

describe('Batal Menyukai Restoran', () => {
  beforeEach(async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('menampilkan widget batal suka ketika restoran sudah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus dari favorit"]'))
      .toBeTruthy();
  });

  it('tidak menampilkan widget suka ketika restoran sudah disukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Tambah ke favorit"]'))
      .toBeFalsy();
  });

  it('dapat menghapus restoran yang disukai dari daftar favorit', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const semuaRestoran = await FavoriteRestaurantIdb.getAllRestaurants();
    
    expect(semuaRestoran).toHaveLength(0);
  });

  it('tidak error ketika menghapus restoran yang tidak ada di daftar favorit', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const semuaRestoran = await FavoriteRestaurantIdb.getAllRestaurants();
    
    expect(semuaRestoran).toHaveLength(0);
  });

  it('tidak crash ketika menghapus restoran dengan id undefined', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: undefined });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const semuaRestoran = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(semuaRestoran).toHaveLength(0);
  });
  
  it('tetap menampilkan widget yang tepat setelah batal menyukai', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    
    expect(document.querySelector('[aria-label="Tambah ke favorit"]')).toBeTruthy();
    expect(document.querySelector('[aria-label="Hapus dari favorit"]')).toBeFalsy();
  });
  
});