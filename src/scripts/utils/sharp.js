const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, '../../public/images/heros');
const destination = path.resolve(__dirname, '../../public/images/heros/optimized');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

const image = 'hero-image_4.jpg';

// lebar 1200px (large)
sharp(`${target}/${image}`)
  .resize(1200, null, {
    withoutEnlargement: true
  })
  .jpeg({
    quality: 90,
    progressive: true,
    mozjpeg: true
  })
  .toFile(path.resolve(
    destination,
    `${image.split('.').slice(0, -1).join('.')}-large.jpg`
  ))
  .then((info) => console.log(`Large version created: ${info.width}x${info.height}`))
  .catch((err) => console.error('Error creating large version:', err));

// lebar 900px (medium)
sharp(`${target}/${image}`)
  .resize(900, null, {
    withoutEnlargement: true
  })
  .jpeg({
    quality: 85,
    progressive: true,
    mozjpeg: true
  })
  .toFile(path.resolve(
    destination,
    `${image.split('.').slice(0, -1).join('.')}-medium.jpg`
  ))
  .then((info) => console.log(`Medium version created: ${info.width}x${info.height}`))
  .catch((err) => console.error('Error creating medium version:', err));

// lebar 600px (small)
sharp(`${target}/${image}`)
  .resize(600, null, {
    withoutEnlargement: true
  })
  .jpeg({
    quality: 80,
    progressive: true,
    mozjpeg: true
  })
  .toFile(path.resolve(
    destination,
    `${image.split('.').slice(0, -1).join('.')}-small.jpg`
  ))
  .then((info) => console.log(`Small version created: ${info.width}x${info.height}`))
  .catch((err) => console.error('Error creating small version:', err));