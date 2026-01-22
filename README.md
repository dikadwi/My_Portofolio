# Personal Profile Website

Website portfolio personal yang modern dan responsif untuk Full Stack Engineer. Dibangun dengan HTML, CSS, dan JavaScript murni (static), siap untuk dideploy ke GitHub Pages.

## 🌟 Fitur

- ✨ Design modern dan clean
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Animasi ringan dan smooth
- 🚀 Fast loading dan optimized
- ♿ Accessible dan SEO-friendly
- 🔗 Static site - tidak perlu backend
- 💾 Mudah di-deploy ke GitHub Pages
- 🎯 Navbar dengan mobile menu
- 📊 Section Skills dengan kategori
- 🎁 Project showcase dengan 3 project
- 📅 Timeline Experience & Education
- 📝 Contact form dengan mailto integration
- 🌐 Social media links

## 📋 Struktur File

```
MyProfile/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
└── README.md
```

## 🎨 Desain

- **Color Scheme**: Modern dengan primary color Indigo (#6366f1) dan secondary color Pink (#ec4899)
- **Typography**: Google Fonts - Poppins (main), Fira Code (code)
- **Responsive**: Mobile-first approach dengan breakpoints di 768px dan 480px
- **Animasi**: Smooth transitions, parallax effect, scroll animation

## 📄 Sektor yang Disediakan

1. **Hero** - Intro dengan CTA buttons
2. **About Me** - Deskripsi pribadi dengan highlight points
3. **Skills** - Organize dalam 3 kategori:
   - Frontend (HTML, CSS, JavaScript)
   - Backend (PHP, CodeIgniter, Laravel)
   - Database & Tools (MySQL, Git, REST API)
4. **Projects** - 3 project showcase dengan tech stack dan links
5. **Experience & Education** - Timeline format
6. **Contact** - Contact info dan form dengan mailto integration
7. **Navigation** - Sticky navbar dengan mobile responsive menu

## 🚀 Deployment ke GitHub Pages

### Langkah 1: Persiapkan Repository

1. Buat repository baru di GitHub dengan nama: `username.github.io`
   (ganti `username` dengan GitHub username Anda)

2. Clone repository:

```bash
git clone https://github.com/username/username.github.io.git
cd username.github.io
```

### Langkah 2: Copy File-file

Copy semua file dari folder MyProfile ke dalam repository:

- `index.html`
- `assets/` folder (termasuk css dan js)

### Langkah 3: Push ke GitHub

```bash
git add .
git commit -m "Initial commit: Personal portfolio website"
git push origin main
```

### Langkah 4: Aktifkan GitHub Pages

1. Pergi ke repository settings
2. Scroll ke "GitHub Pages" section
3. Pilih branch `main` sebagai source
4. Simpan dan tunggu beberapa menit

Website Anda akan tersedia di: `https://username.github.io`

### Alternative: Deploy ke Repository Lain

Jika ingin deploy ke repository dengan nama lain:

1. Buat repository baru dengan nama apapun (contoh: `myprofile`)

2. Clone dan tambahkan file-file

3. Di `Settings` → `GitHub Pages` → Pilih branch `main` atau `gh-pages`

4. Website akan tersedia di: `https://username.github.io/myprofile`

## 🔧 Kustomisasi

### Update Informasi Pribadi

Edit `index.html` dan ganti:

```html
<!-- Hero Section -->
<span class="gradient-text animate-text">Full Stack Engineer</span>
<!-- Ganti dengan profesi Anda -->

<!-- About Section -->
<!-- Ganti deskripsi dengan cerita Anda -->

<!-- Skills Section -->
<!-- Tambah/kurangi skill sesuai keahlian -->

<!-- Projects Section -->
<!-- Update 3 project dengan project Anda -->

<!-- Experience Section -->
<!-- Update experience dan education -->

<!-- Contact Section -->
your.email@gmail.com github.com/yourusername linkedin.com/in/yourusername
<!-- Ganti dengan contact info Anda -->
```

### Update Social Links

Cari dan update semua href untuk social media:

```html
<!-- Email -->
<a href="mailto:your.email@gmail.com">
  <!-- GitHub -->
  <a href="https://github.com/yourusername">
    <!-- LinkedIn -->
    <a href="https://linkedin.com/in/yourusername"></a></a
></a>
```

### Customize Colors

Edit variable di `assets/css/style.css`:

```css
:root {
  --primary-color: #6366f1; /* Ubah warna utama */
  --secondary-color: #ec4899; /* Ubah warna secondary */
  /* ... variables lainnya ... */
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## ⚡ Performance

- Page size: ~150KB
- No external dependencies (except Google Fonts)
- Font Awesome CDN untuk icons
- Optimized CSS dan JavaScript
- Lazy loading support untuk images

## 🛠️ Tools Digunakan

- **HTML5** - Semantic markup
- **CSS3** - Modern styling dengan Grid, Flexbox, Gradient
- **Vanilla JavaScript** - No framework
- **Google Fonts** - Typography
- **Font Awesome** - Icons library
- **Git** - Version control

## 📝 Maintenance

### Update Project

Untuk menambah/edit project:

1. Edit section projects di `index.html`
2. Update `.project-card` dengan info project baru
3. Push changes ke GitHub

### Update Skills

Edit `.skills-grid` untuk menambah/remove skills.

### Update Experience

Edit `.timeline` di experience section.

## 🚨 Tips

1. **Gunakan bahasa yang jelas** - Deskripsi yang mudah dipahami
2. **Update secara berkala** - Tambah project baru, skill baru
3. **Add project links** - Update GitHub links ke project real
4. **Profesional** - Gunakan foto profil yang proper (optional)
5. **Mobile test** - Test di berbagai devices sebelum share

## 🎓 Learning Resources

Untuk mempelajari lebih lanjut:

- [HTML MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [GitHub Pages Docs](https://pages.github.com/)

## 📄 License

Bebas digunakan untuk keperluan pribadi dan komersial.

## 🤝 Kontribusi

Jika ingin mengembangkan lebih lanjut, Anda bebas melakukan:

- Menambah section baru
- Improve design dan animasi
- Add backend features (optional)
- Integrate dengan CMS

## 📞 Support

Untuk pertanyaan atau issues:

- Buka GitHub Issues di repository
- Email ke contact Anda
- Konsultasi dengan mentor/teman

---

**Made with ❤️ by Full Stack Engineer**

_Terakhir diupdate: Januari 2024_
