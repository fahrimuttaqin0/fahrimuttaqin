# Portfolio — Muhamad Fahri Muttaqin

## Cara menambahkan gambar

Taruh semua gambar di folder `assets/`. Nama file harus **persis sama** dengan label yang tampil di kotak placeholder (huruf kecil, tanpa spasi, pakai tanda `-`).

| Slot | Path file | Rasio | Ukuran disarankan |
|---|---|---|---|
| Foto profil (About) | `assets/profile.jpg` | 1:1 | min 600×600 px |
| Telkom Infra, foto 1 & 2 | `assets/experience/telkom-1.jpg`, `telkom-2.jpg` | 4:3 | ±1200×900 px |
| MBC Lab, foto 1 & 2 | `assets/experience/mbc-1.jpg`, `mbc-2.jpg` | 4:3 | ±1200×900 px |
| Arsitektur / screenshot proyek | `assets/project/architecture.png` | 16:9 | ±1600×900 px |

Struktur folder:

```
portfolio/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── profile.jpg
    ├── experience/  (telkom-1.jpg, telkom-2.jpg, mbc-1.jpg, mbc-2.jpg)
    └── project/     (architecture.png)
```

## Tips
- Selama file belum ada, placeholder bergaris putus tampil otomatis. Begitu file ada, foto menggantikannya, tanpa ubah kode.
- Kompres gambar sebelum upload (target < 300 KB per foto, pakai squoosh.app) supaya website cepat.
- Format `.jpg`/`.png` harus sesuai nama di `index.html`. Kalau pakai `.webp`, ubah juga atribut `src` di `index.html`.
- Slot tidak terpakai? Hapus tag `<figure class="photo-slot ...">` terkait di `index.html`.
- Mau foto profil bulat? Tambahkan class `rounded-full` pada `<figure>` foto profil.
- Nama file di GitHub Pages/Vercel peka huruf besar-kecil (`Profile.jpg` ≠ `profile.jpg`).
- Ganti isi atribut `alt` pada tiap `<img>` dengan deskripsi singkat foto.
