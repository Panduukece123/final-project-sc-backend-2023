# README Proyek Akhir Backend

## Pengenalan

Selamat datang di proyek akhir untuk kelas pengembangan backend! Proyek ini menggunakan teknologi-teknologi berikut:

- **dotenv**: Modul zero-dependency yang memuat variabel lingkungan dari file .env ke dalam process.env.
- **express**: Kerangka kerja web yang cepat, tidak memihak, minimalist untuk Node.js.
- **mongoose**: Pemodelan objek MongoDB yang elegan untuk Node.js.
- **nodemon**: Memantau perubahan pada sumber Anda dan secara otomatis me-restart server Anda.

## Memulai

Untuk memulai dengan proyek ini, pastikan Anda telah menginstal Node.js di mesin Anda. Anda dapat menginstal dependensi yang diperlukan dengan menjalankan:

```bash
npm install
```

Sebelum menjalankan aplikasi, pastikan bahwa basis data MongoDB Anda sudah berjalan. Pastikan untuk mengonfigurasi koneksi basis data dengan benar di folder **config** Anda.

## Konfigurasi Basis Data

Di folder config, berikan konfigurasi yang diperlukan untuk basis data MongoDB Anda:

```bash
url: "mongodb://localhost:27017/library",

```

Gantilah url sesuai dengan string koneksi sebenarnya untuk basis data MongoDB Anda.

## Konfigurasi Basis Data
