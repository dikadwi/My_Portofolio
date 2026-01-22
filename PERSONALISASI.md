# 📖 Panduan Lengkap Personalisasi Portfolio

## 🎯 Langkah-langkah Penting

### 1. Update Identitas Pribadi

Buka `index.html` dan cari & replace:

#### Hero Section (Baris 68-75)

```html
<!-- SEBELUM -->
<span class="gradient-text animate-text">Full Stack Engineer</span>

<!-- SESUDAH - Ganti dengan profesi Anda -->
<span class="gradient-text animate-text">Your Job Title Here</span>
```

#### Contact Info (Baris 405, 411, 417, 425, 431, 437)

```html
<!-- SEBELUM -->
<a href="mailto:your.email@gmail.com">
  <!-- SESUDAH -->
  <a href="mailto:your.actual.email@gmail.com"></a
></a>
```

### 2. Update Social Media Links

Cari semua link social di HTML:

```html
<!-- GitHub -->
<a href="https://github.com/yourusername" → Ganti dengan GitHub URL Anda
<a href="https://github.com" → Ganti dengan GitHub profile Anda

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourusername" → Ganti dengan LinkedIn profile Anda

<!-- Email -->
<a href="mailto:your.email@gmail.com" → Ganti dengan email Anda
```

### 3. Kustomisasi About Section

Edit paragraf tentang Anda (Baris 125-133):

```html
<p class="about-intro">Ganti teks ini dengan intro singkat tentang Anda</p>
```

### 4. Update Skills

Ubah skill cards (Baris 165-215) sesuai keahlian Anda:

- Tambah skill baru dengan duplicate `.skill-card`
- Ubah nama skill
- Ubah icon (lihat Font Awesome icons: https://fontawesome.com/icons)
- Update skill level

### 5. Update Projects

Edit 3 project di section Projects (Baris 227-330):

```html
<h3 class="project-title">Your Project Name</h3>
<p class="project-description">Deskripsi project Anda</p>
<span class="tech-badge">Technology Used</span>
<a href="https://github.com/your-repo">GitHub Link</a>
<a href="https://your-demo.com">Demo Link</a>
```

### 6. Update Experience & Education

Edit timeline (Baris 352-395):

```html
<h4>Your Job Title</h4>
<p class="timeline-company">Company Name | Year Range</p>
<p class="timeline-description">Job description dan responsibilities</p>
```

### 7. Customize Colors

Edit `assets/css/style.css` baris 2-10:

```css
:root {
  --primary-color: #6366f1; /* Main color */
  --primary-dark: #4f46e5; /* Darker shade */
  --primary-light: #818cf8; /* Lighter shade */
  --secondary-color: #ec4899; /* Accent color */
  /* ... update sesuai preferensi */
}
```

### 8. Update Navigation Logo

Edit navbar logo (Baris 57-61):

```html
<div class="logo">
  <span class="logo-bracket">&lt;</span>
  <span class="logo-text">Your Name</span>
  <!-- Ganti dengan nama Anda -->
  <span class="logo-bracket">/&gt;</span>
</div>
```

## 🎨 Color Palette Suggestions

### Option 1: Blue & Purple (Default)

```css
--primary-color: #6366f1;
--secondary-color: #ec4899;
```

### Option 2: Green & Teal

```css
--primary-color: #10b981;
--secondary-color: #14b8a6;
```

### Option 3: Orange & Red

```css
--primary-color: #f97316;
--secondary-color: #ef4444;
```

### Option 4: Purple & Blue

```css
--primary-color: #8b5cf6;
--secondary-color: #3b82f6;
```

## 🔗 Icon Resources

### Font Awesome Icons

- https://fontawesome.com/icons
- Search untuk icon yang sesuai dengan skill/project Anda
- Gunakan class: `<i class="fab fa-php"></i>` atau `<i class="fas fa-code"></i>`

### Icon Cheat Sheet untuk Skills

```html
<!-- Frontend -->
<i class="fab fa-html5"></i>
<!-- HTML -->
<i class="fab fa-css3-alt"></i>
<!-- CSS -->
<i class="fab fa-js-square"></i>
<!-- JavaScript -->
<i class="fab fa-react"></i>
<!-- React -->
<i class="fab fa-vue"></i>
<!-- Vue -->

<!-- Backend -->
<i class="fab fa-php"></i>
<!-- PHP -->
<i class="fab fa-python"></i>
<!-- Python -->
<i class="fab fa-java"></i>
<!-- Java -->
<i class="fab fa-node"></i>
<!-- Node.js -->

<!-- Database & Tools -->
<i class="fas fa-database"></i>
<!-- Database -->
<i class="fab fa-git"></i>
<!-- Git -->
<i class="fab fa-github"></i>
<!-- GitHub -->
<i class="fas fa-server"></i>
<!-- Server -->
<i class="fab fa-docker"></i>
<!-- Docker -->
```

## 📱 Testing Responsive

Sebelum deploy, test di:

1. **Desktop** - Browser dev tools (F12)
2. **Tablet** - iPad size (768px)
3. **Mobile** - iPhone size (375px)
4. **Toggle device toolbar** - Ctrl+Shift+M (Chrome/Firefox)

## 📤 Pre-Deployment Checklist

- [ ] Update semua nama dan identitas
- [ ] Update semua social media links
- [ ] Update 3 projects dengan real projects
- [ ] Update experience & education
- [ ] Update skills sesuai keahlian
- [ ] Test responsif di mobile
- [ ] Test di berbagai browser
- [ ] Cek semua links bekerja
- [ ] Validasi HTML (https://validator.w3.org/)

## 🚀 Quick Deploy Commands

```bash
# Initialize git (jika belum)
git init

# Add semua file
git add .

# Commit
git commit -m "Initial portfolio website"

# Create main branch
git branch -M main

# Add remote (ganti username dengan GitHub username Anda)
git remote add origin https://github.com/username/username.github.io.git

# Push ke GitHub
git push -u origin main

# Tunggu 1-5 menit untuk GitHub Pages aktif
# Akses: https://username.github.io
```

## 🐛 Troubleshooting

### Website tidak muncul setelah push

1. Pastikan repository naming benar: `username.github.io`
2. Check Settings → GitHub Pages → branch dipilih dengan benar
3. Tunggu 2-5 menit untuk propagasi
4. Hard refresh: Ctrl+Shift+R

### Styling tidak loading

1. Check console (F12 → Console) untuk error
2. Pastikan path CSS & JS benar
3. Cek file tersimpan di folder `assets/css/` dan `assets/js/`

### Links tidak bekerja

1. Pastikan href path benar
2. Untuk local testing, gunakan live server
3. Check browser console untuk errors

## 💡 Advanced Tips

### Add Custom Domain

1. Beli domain (GoDaddy, Namecheap, etc)
2. Di GitHub Settings → Custom domain
3. Setup DNS records (follow GitHub documentation)

### Add Analytics

Tambahkan Google Analytics di `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_ID");
</script>
```

### Add Sitemap & Robots.txt

Buat `robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## 📚 Referensi

- [GitHub Pages Docs](https://pages.github.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [CSS Gradient Generator](https://cssgradient.io/)
- [Responsive Design Checker](https://responsivedesignchecker.com/)

---

**Selamat membuat portfolio yang menarik! 🎉**
