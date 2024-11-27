const assert = require('assert');

/* Skenario 1: Menyukai Satu Restoran
   1. Masuk ke halaman utama dan pilih restoran pertama.
   2. Masuk ke halaman detail restoran pertama dan klik tombol favorite.
   3. Verifikasi restoran yang disukai ada di halaman favorit.
*/

Feature('Menyukai Restoran');

Before(({ I }) => {
  I.amOnPage('/#/');
});

Scenario('menyukai satu restoran', async ({ I }) => {
  I.waitForElement('.content__heading');
  I.see('Explore Restaurants');

  I.waitForElement('.restaurant-item');
  const firstRestoName = await I.grabTextFrom(locate('.restaurant-name').first());
  
  I.click(locate('.view-detail').first());
  I.waitForElement('#restaurant-detail');
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item');
  
  const likedRestoName = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(likedRestoName, firstRestoName);
});


/* Skenario 2: Menyukai Beberapa Restoran
   1. Masuk ke halaman utama dan pilih restoran pertama dan kedua.
   2. Suka restoran pertama dan kedua, verifikasi jumlah favorit.
   3. Verifikasi restoran yang disukai ada di halaman favorit.
*/

Scenario('menyukai beberapa restoran', async ({ I }) => {
  I.waitForElement('.restaurant-item');
  const firstRestoName = await I.grabTextFrom(locate('.restaurant-name').first());
  I.click(locate('.view-detail').first());
  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/');

  const secondRestoName = await I.grabTextFrom(locate('.restaurant-name').at(2));
  I.click(locate('.view-detail').at(2));
  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item');
  
  const numberOfFavorites = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(numberOfFavorites, 2);

  const favoritedRestos = await I.grabTextFrom('.restaurant-name');
  assert.ok(Array.isArray(favoritedRestos) ? 
    favoritedRestos.includes(firstRestoName) && favoritedRestos.includes(secondRestoName) :
    favoritedRestos === firstRestoName || favoritedRestos === secondRestoName
  );
});