# 🍫 DeBrownies Website - Custom Brownies | Fudgy Brownies

Website profesional untuk bisnis brownies dengan desain modern, responsive, dan fitur lengkap.

## ✨ Fitur Lengkap

### 1. **Navigasi & Header**
- Top bar dengan informasi kontak dan social media
- Navbar sticky dengan logo DeBrownies
- Menu dropdown untuk kategori
- Mobile responsive dengan hamburger menu
- Smooth scrolling ke setiap section

### 2. **Hero Slider**
- 3 slide dengan gambar dan CTA buttons
- Auto-play slider setiap 5 detik
- Navigation arrows & dots
- Pause on hover
- Responsive di semua device

### 3. **Promo Section**
- Grid layout untuk promo produk
- Modal popup untuk memperbesar gambar
- Badge "HOT DEAL", "NEW", "PROMO"
- Hover effects yang menarik

### 4. **Partnership Section**
- Info kemitraan dengan animated counters
- Statistik: Varian Produk, Outlet, Tahun Melayani
- CTA button untuk info lebih lanjut

### 5. **Products Section**
- Filter produk (All, Fudgy, Custom, Premium)
- Product cards dengan rating & harga
- Quick view modal
- Add to cart functionality
- Shopping cart counter
- Hover overlay effects

### 6. **Testimonials**
- Customer reviews dengan rating bintang
- Platform logo (Shopee)
- Auto-scroll testimonials
- Responsive grid layout

### 7. **About Section**
- Sejarah, Visi, dan Misi
- Layout alternatif (kiri-kanan, kanan-kiri)
- Gambar ilustrasi untuk setiap section

### 8. **Outlets Section**
- Daftar outlet dengan lokasi
- Google Maps integration
- Contact info setiap outlet
- Get directions button

### 9. **Partnership Details**
- Program Agen dengan benefits
- Program Reseller dengan benefits
- WhatsApp integration untuk pendaftaran

### 10. **Career Section**
- Job listings
- Apply button dengan WhatsApp integration
- Job type badges

### 11. **Footer**
- Company info & contact
- Quick links
- Social media icons
- Copyright notice

### 12. **Floating Buttons**
- WhatsApp floating button dengan animasi pulse
- Shopping cart floating button dengan counter
- Scroll to top button

### 13. **Additional Features**
- Notification system
- Form validation
- Lazy loading images
- Scroll reveal animations
- Smooth scrolling
- Mobile responsive
- SEO optimized

## 📁 Struktur Folder

```
debrownies-website/
│
├── index.html              # File HTML utama
├── css/
│   └── style.css          # Stylesheet lengkap
├── js/
│   └── script.js          # JavaScript interaktif
└── images/                # Folder untuk gambar
    ├── promo1.jpg
    ├── promo2.jpg
    ├── promo3.jpg
    ├── product1.jpg
    ├── product2.jpg
    ├── product3.jpg
    ├── product4.jpg
    ├── product5.jpg
    ├── product6.jpg
    ├── about-history.jpg
    ├── about-vision.jpg
    ├── about-mission.jpg
    └── shopee-logo.png
```

## 🚀 Cara Menggunakan

### Opsi 1: Langsung di Browser
1. Download semua file
2. Buat struktur folder sesuai di atas
3. Double click `index.html`
4. Website akan terbuka di browser

### Opsi 2: Menggunakan VS Code & Live Server
1. Buka VS Code
2. Install extension "Live Server"
3. Klik kanan pada `index.html`
4. Pilih "Open with Live Server"
5. Website akan auto-reload saat ada perubahan

### Opsi 3: Upload ke Hosting
1. Upload semua file ke hosting (cPanel, dll)
2. Pastikan struktur folder tetap sama
3. Akses melalui domain Anda

## 🎨 Customisasi

### Mengubah Warna
Edit file `css/style.css` bagian CSS Variables:
```css
:root {
    --primary-brown: #8B4513;      /* Warna coklat utama */
    --secondary-brown: #D2691E;    /* Warna coklat sekunder */
    --dark-brown: #5C3317;         /* Warna coklat gelap */
    --light-brown: #DEB887;        /* Warna coklat terang */
    --cream: #F5F5DC;              /* Warna cream */
}
```

### Mengubah Konten
1. Buka `index.html`
2. Cari section yang ingin diubah
3. Edit teks sesuai kebutuhan
4. Save file

### Menambah Gambar
1. Siapkan gambar (format: JPG/PNG)
2. Masukkan ke folder `images/`
3. Update path di HTML:
```html
<img src="images/nama-gambar.jpg" alt="Deskripsi">
```

### Menambah Produk
Copy-paste code product card di HTML:
```html
<div class="product-card" data-category="fudgy">
    <div class="product-image">
        <img src="images/product-baru.jpg" alt="Nama Produk">
        <div class="product-overlay">
            <button class="quick-view">Quick View</button>
        </div>
    </div>
    <div class="product-info">
        <h3>Nama Produk Baru</h3>
        <div class="product-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <span>(100 reviews)</span>
        </div>
        <p class="product-price">Rp 50.000</p>
        <button class="btn-add-cart">Tambah ke Keranjang</button>
    </div>
</div>
```

## 📱 Contact Integration

Website sudah terintegrasi dengan WhatsApp untuk:
- Floating chat button
- Product inquiry
- Partnership application
- Career application
- Outlet inquiries

**Nomor WhatsApp yang digunakan:** 0812-4080-6323

Untuk mengubah nomor WhatsApp, cari dan replace:
```
6281240806323
```
dengan nomor baru (format: 62xxxxxxxxxxxx)

## 🌐 Browser Support

Website kompatibel dengan:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📊 SEO & Performance

Website sudah dioptimasi untuk:
- Meta tags
- Semantic HTML
- Fast loading
- Mobile responsive
- Lazy loading images
- Smooth animations
- Clean code structure

## 🔧 Dependencies

Website menggunakan:
- **Font Awesome 6.4.0** - Icons
- **Google Fonts** - Playfair Display & Poppins
- **Pure JavaScript** - No jQuery required
- **Pure CSS** - No framework required

## 📝 Checklist Sebelum Launch

- [ ] Ganti semua gambar placeholder dengan gambar asli
- [ ] Update nomor WhatsApp
- [ ] Update alamat email
- [ ] Update alamat outlet
- [ ] Test semua link
- [ ] Test di mobile & desktop
- [ ] Optimize gambar (compress)
- [ ] Test form functionality
- [ ] Update meta tags untuk SEO
- [ ] Setup Google Analytics (optional)

## 💡 Tips & Tricks

1. **Gambar Optimal:**
   - Hero slider: 1920x600px
   - Produk: 600x600px
   - Promo: 800x600px
   - About: 800x600px
   - Format: JPG untuk foto, PNG untuk logo

2. **Loading Speed:**
   - Compress gambar sebelum upload
   - Use webp format untuk modern browsers
   - Enable caching di hosting

3. **Mobile First:**
   - Selalu test di mobile
   - Touch-friendly buttons
   - Readable font sizes

## 🆘 Troubleshooting

**Problem:** Gambar tidak muncul
- **Solution:** Periksa path file di `src="images/..."`
- Pastikan nama file dan extension sesuai

**Problem:** JavaScript tidak berfungsi
- **Solution:** Periksa console browser (F12)
- Pastikan file `js/script.js` ter-load dengan benar

**Problem:** CSS berantakan
- **Solution:** Clear browser cache (Ctrl+Shift+R)
- Periksa path file CSS di `<link>` tag

**Problem:** WhatsApp tidak terbuka
- **Solution:** Periksa format nomor (harus 62xxxxxxxxxx)
- Test di mobile device langsung

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, silakan hubungi:
- Email: debrownies@gmail.com
- WhatsApp: 0812-4080-6323

## 📄 License

Free to use for DeBrownies business.

---

**Dibuat dengan ❤️ untuk DeBrownies**

**Custom Brownies | Fudgy Brownies**
