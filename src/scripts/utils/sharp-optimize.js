const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, '../../public/images/heros');
const targetDir = path.resolve(__dirname, '../../public/images/heros/optimized');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const optimizeHeroImage = async () => {
  try {
    const heroImage = path.resolve(sourceDir, 'hero-image_4.jpg');
    const filename = 'hero-image_4';

    console.log('Starting hero image optimization...');

    await sharp(heroImage)
      .resize(1200, null, {
        withoutEnlargement: true
      })
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true
      })
      .toFile(path.resolve(targetDir, `${filename}-large.jpg`));

    await sharp(heroImage)
      .resize(900, null, {
        withoutEnlargement: true
      })
      .jpeg({
        quality: 85,
        progressive: true,
        mozjpeg: true
      })
      .toFile(path.resolve(targetDir, `${filename}-medium.jpg`));

    await sharp(heroImage)
      .resize(600, null, {
        withoutEnlargement: true
      })
      .jpeg({
        quality: 80,
        progressive: true,
        mozjpeg: true
      })
      .toFile(path.resolve(targetDir, `${filename}-small.jpg`));

    const largeSize = fs.statSync(path.resolve(targetDir, `${filename}-large.jpg`)).size;
    const mediumSize = fs.statSync(path.resolve(targetDir, `${filename}-medium.jpg`)).size;
    const smallSize = fs.statSync(path.resolve(targetDir, `${filename}-small.jpg`)).size;

    console.log('\n✓ Successfully optimized hero image:');
    console.log(`  - Large version (1200px width): ${(largeSize / 1024).toFixed(2)}KB`);
    console.log(`  - Medium version (900px width): ${(mediumSize / 1024).toFixed(2)}KB`);
    console.log(`  - Small version (600px width): ${(smallSize / 1024).toFixed(2)}KB`);

    if (largeSize > 200 * 1024) {
      console.warn('\n⚠️ Warning: Large version is above 200KB');
    }

    console.log('\n✨ Hero image optimization completed!');
  } catch (err) {
    console.error('\n× Error during optimization:', err.message);
    process.exit(1);
  }
};

optimizeHeroImage();