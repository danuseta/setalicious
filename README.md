# Setalicious 🍽️

## Fitur Utama
- Jelajahi restoran dari API
- Tambah restoran favorit
- Kelola ulasan restoran
- Aplikasi Web Progresif (PWA)
- Dukungan offline
- Desain responsif

## Prasyarat
- Node.js (v16+)
- npm

## Instalasi
1. Clone repositori
2. Pasang dependensi:
```bash
npm install
```

3. Skrip pengembangan:
```bash
# Jalankan server pengembangan
npm run start-dev

# Bangun untuk produksi
npm run build

# Layani versi produksi
npm run serve
```

## Teknologi Utama
- JavaScript Vanilla
- IndexedDB
- Workbox (Service Worker)
- Webpack
- PWA Manifest

## Struktur Proyek
```
src/
├── scripts/
│   ├── data/
│   │   ├── sumber-restoran.js
│   │   └── restoran-favorit-idb.js
│   ├── views/
│   │   ├── beranda.js
│   │   ├── detail.js
│   │   └── favorit.js
│   └── sw.js
├── styles/
├── template/
└── public/
```

## Fitur Utama
- Jelajahi restoran
- Tambah ke favorit
- Tambah ulasan
- Dapat diakses offline

## Pengujian
```bash
# Jalankan tes
npm test

# Mode pantau
npm run test:watch
```

## Optimasi
- Kompresi gambar
- Lazy loading
- Analisis bundel

## Lisensi
ISC

## Kontak
Danu Setawiardana
danusetawiardana@gmail.com
```
