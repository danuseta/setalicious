const assert = require('assert');

/* Skenario 1: Menambah Review Restoran
   1. Masuk ke halaman utama dan akses detail restoran pertama.
   2. Periksa jumlah review yang ada.
   3. Isi form review dengan nama dan review.
   4. Submit review dan tunggu tampil.
   5. Verifikasi review baru sesuai data yang diisi.
*/

Feature('Menambah Review Restoran');

Before(({ I }) => {
  I.amOnPage('/#/');
});

Scenario('menambah review untuk restoran', async ({ I }) => {
  console.log('Starting review test...');

  I.see('Explore Restaurants', '.content__heading');
  I.click(locate('.view-detail').first());
  I.waitForElement('#restaurant-detail');

  console.log('Checking existing reviews...');
  if (await I.grabNumberOfVisibleElements('.review-item') > 0) {
    const existingReviews = await I.grabTextFrom('.reviewer-name');
    console.log('Existing reviews:', existingReviews);
  }

  const reviewerName = 'Test Customer Review';
  const reviewText = 'Review dari automated testing E2E';

  I.seeElement('#review-form');
  I.fillField('name', reviewerName);
  I.fillField('review', reviewText);

  I.click('.submit-review');
  I.wait(3);

  I.waitForElement('.review-item');

  const lastReviewerName = await I.grabTextFrom(locate('.reviewer-name').last());
  const lastReviewText = await I.grabTextFrom(locate('.review-text').last());

  console.log('Expected reviewer name:', reviewerName);
  console.log('Actual reviewer name:', lastReviewerName);

  assert.strictEqual(lastReviewerName, reviewerName);
  assert.strictEqual(lastReviewText, reviewText);
});


/* Skenario 2: Validasi Form Review Kosong
   1. Akses detail restoran pertama.
   2. Klik submit tanpa mengisi data.
   3. Verifikasi validasi form dengan elemen input invalid.
*/

Scenario('validasi form review kosong', async ({ I }) => {
  I.click(locate('.view-detail').first());
  I.waitForElement('#review-form');

  I.click('.submit-review');

  I.seeElement('input:invalid');
});