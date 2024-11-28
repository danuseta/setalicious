const assert = require('assert');

/* Skenario 1: Batal Menyukai Satu Restoran
   1. Masuk ke halaman utama dan pilih restoran pertama untuk disukai.
   2. Klik tombol "Favorite" di halaman detail restoran.
   3. Verifikasi restoran muncul di halaman favorit.
   4. Klik tombol "Favorite" kembali untuk batal menyukai restoran.
   5. Verifikasi halaman favorit kosong dan restoran tidak ada lagi.
*/

Feature('Batal Menyukai Restoran');

Before(({ I }) => {
  I.amOnPage('/#/');
});

Scenario('batal menyukai satu restoran', async ({ I }) => {
  I.waitForElement('.content__heading');
  I.see('Explore Restaurants', '.content__heading');

  const restoName = await I.grabTextFrom(locate('.restaurant-name').first());
  I.click(locate('.view-detail').first());

  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item');

  const likedRestoName = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(likedRestoName, restoName);

  I.click(locate('.view-detail').first());
  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.content');

  I.see("You haven't added any restaurants to your favorites yet");

  const remainingFavorites = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(remainingFavorites, 0);
});

/* Skenario 2: Batal Menyukai Beberapa Restoran
   1. Masuk ke halaman utama dan sukai dua restoran berbeda.
   2. Verifikasi jumlah restoran favorit di halaman favorit adalah dua.
   3. Batalkan suka pada restoran pertama, lalu verifikasi sisa satu restoran.
   4. Batalkan suka pada restoran kedua, lalu verifikasi halaman favorit kosong.
*/

Scenario('batal menyukai beberapa restoran', async ({ I }) => {
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

  let numberOfFavorites = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(numberOfFavorites, 2);

  I.click(locate('.view-detail').first());
  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.content');

  numberOfFavorites = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(numberOfFavorites, 1);

  I.click(locate('.view-detail').first());
  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.content');

  I.see("You haven't added any restaurants to your favorites yet");
  numberOfFavorites = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(numberOfFavorites, 0);
});