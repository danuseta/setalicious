const assert = require('assert');

Feature('Restaurant Search');

Before(({ I }) => {
  I.amOnPage('/#/');
});

/* Skenario 1: Mencari Restaurant yang Ada
   1. Masuk ke halaman utama aplikasi.
   2. Pilih nama restoran pertama untuk dicari.
   3. Isi kolom pencarian dengan nama restoran dan klik tombol pencarian.
   4. Verifikasi nama restoran muncul dalam hasil pencarian.
*/
Scenario('mencari restaurant yang ada', async ({ I }) => {
  I.waitForElement('.content__heading');
  I.see('Explore Restaurants');

  I.waitForElement('.restaurant-item');
  const targetRestaurant = await I.grabTextFrom(locate('.restaurant-name').first());

  I.seeElement('#searchForm');
  I.fillField('#searchInput', targetRestaurant);
  I.click('.search-button');

  I.waitForElement('.restaurant-item');
  
  const searchResults = await I.grabTextFrom('.restaurant-name');
  assert.ok(
    Array.isArray(searchResults) 
      ? searchResults.some(name => name.includes(targetRestaurant))
      : searchResults.includes(targetRestaurant)
  );
});

/* Skenario 2: Mencari Restaurant yang Tidak Ada
   1. Masuk ke halaman utama aplikasi.
   2. Isi kolom pencarian dengan kata kunci yang tidak mungkin ditemukan.
   3. Klik tombol pencarian.
   4. Verifikasi pesan "No restaurants found" muncul.
   5. Klik tombol "Show All Restaurants".
   6. Verifikasi semua restaurant kembali ditampilkan.
*/
Scenario('mencari restaurant yang tidak ada', async ({ I }) => {
  I.waitForElement('.content__heading');
  I.see('Explore Restaurants');

  I.seeElement('#searchForm');
  I.fillField('#searchInput', 'restodanuseta');
  I.click('.search-button');

  I.waitForElement('#no-results');
  I.see('No restaurants found matching your search');
  
  I.seeElement('.all-restaurants-button');
  I.click('.all-restaurants-button');
  I.waitForElement('.restaurant-item');
});

/* Skenario 3: Pencarian dengan Spasi dan Case Berbeda
   1. Masuk ke halaman utama aplikasi.
   2. Pilih nama restoran pertama, ubah menjadi lowercase dan tambah spasi.
   3. Isi kolom pencarian dengan nama yang diubah, lalu klik tombol pencarian.
   4. Verifikasi nama restoran muncul dalam hasil pencarian.
*/
Scenario('pencarian dengan spasi dan case berbeda', async ({ I }) => {
  I.waitForElement('.content__heading');
  I.see('Explore Restaurants');

  I.waitForElement('.restaurant-item');
  const originalName = await I.grabTextFrom(locate('.restaurant-name').first());
  const searchQuery = `  ${originalName.toLowerCase()}  `;

  I.seeElement('#searchForm');
  I.fillField('#searchInput', searchQuery);
  I.click('.search-button');

  I.waitForElement('.restaurant-item');
  const searchResults = await I.grabTextFrom('.restaurant-name');
  assert.ok(
    Array.isArray(searchResults) 
      ? searchResults.some(name => name.toLowerCase() === originalName.toLowerCase())
      : searchResults.toLowerCase() === originalName.toLowerCase()
  );
});

/* Skenario 4: Pencarian dengan Kata Kunci Parsial
   1. Masuk ke halaman utama aplikasi.
   2. Ambil nama restoran pertama dan gunakan kata pertamanya saja.
   3. Isi kolom pencarian dengan kata parsial tersebut.
   4. Verifikasi hasil pencarian menampilkan restaurant yang mengandung kata tersebut.
*/
Scenario('pencarian dengan kata kunci parsial', async ({ I }) => {
  I.waitForElement('.restaurant-item');
  const originalName = await I.grabTextFrom(locate('.restaurant-name').first());
  const partialQuery = originalName.split(' ')[0];

  I.fillField('#searchInput', partialQuery);
  I.click('.search-button');

  I.waitForElement('.restaurant-item');
  const searchResults = await I.grabTextFrom('.restaurant-name');
  assert.ok(
    Array.isArray(searchResults) 
      ? searchResults.some(name => name.toLowerCase().includes(partialQuery.toLowerCase()))
      : searchResults.toLowerCase().includes(partialQuery.toLowerCase())
  );
});

/* Skenario 5: Submit Form Pencarian Kosong
   1. Masuk ke halaman utama aplikasi.
   2. Kosongkan kolom pencarian.
   3. Klik tombol pencarian.
   4. Verifikasi semua restaurant tetap ditampilkan.
*/
Scenario('submit form pencarian kosong', async ({ I }) => {
  I.waitForElement('.content__heading');
  I.seeElement('#searchForm');
  
  I.fillField('#searchInput', '');
  I.click('.search-button');
  
  I.waitForElement('.restaurant-item');
  const initialCount = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.ok(initialCount > 0);
});

/* Skenario 6: Pencarian dengan Lokasi Restaurant
   1. Masuk ke halaman utama aplikasi.
   2. Ambil nama kota dari restaurant pertama.
   3. Isi kolom pencarian dengan nama kota tersebut.
   4. Verifikasi hasil pencarian menampilkan restaurant dari kota yang dicari.
*/
Scenario('pencarian dengan nama kota', async ({ I }) => {
  I.waitForElement('.restaurant-item');
  
  // Gunakan nama kota yang ada di daftar restaurant
  const originalCity = (await I.grabTextFrom(locate('.restaurant-city'))).replace('📍', '').trim();
  
  I.fillField('#searchInput', originalCity);
  I.click('.search-button');
  
  I.waitForElement('.restaurant-item');
  const visibleRestaurants = await I.grabTextFrom('.restaurant-city');
  assert.ok(
    Array.isArray(visibleRestaurants)
      ? visibleRestaurants.some(city => city.toLowerCase().includes(originalCity.toLowerCase()))
      : visibleRestaurants.toLowerCase().includes(originalCity.toLowerCase())
  );
});