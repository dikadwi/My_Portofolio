# 🚀 QUICK START - Deploy ke GitHub Pages dalam 5 Menit

## Prerequisites

- GitHub Account (gratis di github.com)
- Git installed (download dari git-scm.com)

## Step 1: Buat Repository GitHub

1. Pergi ke https://github.com/new
2. **Repository name**: `username.github.io` (ganti `username` dengan username GitHub Anda)
3. Pilih "Public"
4. Klik "Create repository"

## Step 2: Setup Git & Push

Buka PowerShell/Terminal di folder MyProfile:

```powershell
# Initialize git
git init

# Add semua file
git add .

# Commit
git commit -m "Personal portfolio website"

# Rename branch ke main (jika diperlukan)
git branch -M main

# Add remote (ganti USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

# Push ke GitHub
git push -u origin main
```

## Step 3: Selesai! ✅

Website Anda akan live dalam 1-5 menit di:

```
https://USERNAME.github.io
```

---

## 🎯 Kustomisasi Cepat (Wajib!)

Sebelum push, edit `index.html`:

1. **Baris 68**: Update nama Anda
2. **Baris 125-133**: Update About section
3. **Baris 225-330**: Update 3 projects
4. **Baris 352-395**: Update experience
5. **Baris 425, 431, 437**: Update contact info

## 📝 Update Portfolio Kedepannya

```powershell
# Edit file sesuai kebutuhan, lalu:
git add .
git commit -m "Update portfolio"
git push
```

Perubahan akan live dalam beberapa detik!

## 🎨 Personalisasi Warna (Optional)

Edit `assets/css/style.css` baris 2-10:

```css
--primary-color: #6366f1; /* Change this */
--secondary-color: #ec4899; /* And this */
```

Lihat PERSONALISASI.md untuk lebih banyak opsi.

---

**Selamat! Portfolio Anda sudah live! 🎉**
