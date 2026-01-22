# 🖥️ LOCAL PREVIEW & TESTING GUIDE

Panduan untuk test website di komputer lokal Anda sebelum deploy ke GitHub Pages.

---

## 🚀 Method 1: Python Simple HTTP Server (Recommended)

### Langkah 1: Buka PowerShell di folder MyProfile

```powershell
# Navigate ke folder
cd C:\Users\Lenovo\source\MyProfile

# Start Python HTTP server
python -m http.server 8000
```

### Langkah 2: Buka di Browser

```
http://localhost:8000
```

### Langkah 3: Test Website

- Cek responsif (open DevTools F12)
- Test semua links
- Test form
- Test mobile view (Ctrl+Shift+M)

---

## 🚀 Method 2: Python 2 (Jika Python 3 Tidak Available)

```powershell
cd C:\Users\Lenovo\source\MyProfile
python -m SimpleHTTPServer 8000
```

Akses: http://localhost:8000

---

## 🚀 Method 3: Live Server VS Code Extension

### Install Extension

1. Open VS Code
2. Extensions (Ctrl+Shift+X)
3. Search: "Live Server"
4. Install by Ritwick Dey

### Run Server

1. Right-click index.html
2. Select "Open with Live Server"
3. Browser opens automatically

---

## 🚀 Method 4: Node.js HTTP Server

```powershell
# Install globally (jika belum)
npm install -g http-server

# Run di folder MyProfile
cd C:\Users\Lenovo\source\MyProfile
http-server

# Akses
http://localhost:8080
```

---

## 📱 TESTING CHECKLIST

### Desktop Testing

- [ ] Full layout renders correctly
- [ ] All sections visible
- [ ] Navbar sticky works
- [ ] Scroll smooth
- [ ] Animations smooth

### Mobile Testing (Ctrl+Shift+M)

- [ ] Hamburger menu works
- [ ] Mobile menu opens/closes
- [ ] Single column layout
- [ ] Touch-friendly buttons
- [ ] Text readable

### Tablet Testing (F12 → Toggle device)

- [ ] Two-column sections
- [ ] Proper spacing
- [ ] Images scaled correctly

### Navigation

- [ ] All nav links working
- [ ] Smooth scroll to sections
- [ ] Active link indicator works

### Links & Forms

- [ ] Email link (mailto)
- [ ] GitHub link opens
- [ ] LinkedIn link opens
- [ ] Contact form focused

### Performance

- [ ] Page loads fast
- [ ] No console errors
- [ ] Animations smooth
- [ ] No layout shifts

---

## 🐛 TROUBLESHOOTING

### Issue: "Access Denied"

**Solution**:

```powershell
# Run PowerShell as Administrator
python -m http.server 8000
```

### Issue: "Port already in use"

**Solution**:

```powershell
# Use different port
python -m http.server 8001
# Or
python -m http.server 9000
```

### Issue: CSS/JS not loading

**Solution**:

1. Check browser console (F12)
2. Check if path is correct
3. Verify file exists in assets/
4. Refresh page (Ctrl+Shift+R)

### Issue: Images not showing

**Solution**:

1. Currently using icons, not images
2. To add images later, place in `assets/images/`
3. Update src path to `assets/images/filename.jpg`

### Issue: Mobile menu not working

**Solution**:

1. Open DevTools (F12)
2. Check Console for JS errors
3. Clear browser cache
4. Hard refresh (Ctrl+Shift+R)

---

## 🔍 BROWSER DEV TOOLS

### Open Dev Tools

```
Chrome/Edge: F12 atau Ctrl+Shift+I
Firefox: F12 atau Ctrl+Shift+I
Safari: Cmd+Option+I (Mac)
```

### Check Responsiveness

```
1. Open Dev Tools
2. Click Toggle device toolbar (Ctrl+Shift+M)
3. Select device: iPhone, iPad, Tablet, Desktop
4. Test all screen sizes
```

### Check Console for Errors

```
1. Dev Tools → Console tab
2. Look for red error messages
3. Fix if any
```

### Check Performance

```
1. Dev Tools → Lighthouse tab
2. Click "Analyze page load"
3. Check scores
4. Fix if low performance
```

---

## ✅ VALIDATION

### HTML Validation (Online)

```
1. Go to: validator.w3.org
2. Upload index.html
3. Check for errors
4. Fix if any
```

### CSS Validation (Online)

```
1. Go to: jigsaw.w3.org/css-validator
2. Upload style.css
3. Check for errors
```

### Link Checker (Online)

```
1. Go to: validator.w3.org/checklink
2. Input URL or file
3. Check all links valid
```

---

## 📊 TEST MATRIX

Test pada kombinasi ini:

| Browser | Desktop | Mobile | Tablet |
| ------- | ------- | ------ | ------ |
| Chrome  | ✅      | ✅     | ✅     |
| Firefox | ✅      | ✅     | ✅     |
| Safari  | ✅      | ✅     | ✅     |
| Edge    | ✅      | ✅     | ✅     |

---

## 🎯 TEST CASES

### Navigation Tests

- [ ] Navbar visible on top
- [ ] Logo clickable
- [ ] Nav links clickable
- [ ] Mobile menu toggle works
- [ ] Menu closes when clicking link
- [ ] Menu closes when clicking outside

### Hero Section Tests

- [ ] Title displays correctly
- [ ] Subtitle visible
- [ ] CTA buttons visible & clickable
- [ ] Social icons visible
- [ ] Scroll indicator bouncing

### About Section Tests

- [ ] About text readable
- [ ] 3 highlight items visible
- [ ] Profile image placeholder visible

### Skills Section Tests

- [ ] 3 skill categories visible
- [ ] All skills display correctly
- [ ] Hover effects working
- [ ] Icons showing correctly

### Projects Section Tests

- [ ] 3 project cards visible
- [ ] Project images showing (icons)
- [ ] Tech badges visible
- [ ] GitHub & demo links working
- [ ] Hover effects working

### Experience Section Tests

- [ ] Timeline visible
- [ ] Experience items display
- [ ] Education items display
- [ ] Timeline line connecting items

### Contact Section Tests

- [ ] Contact items visible
- [ ] Contact form visible
- [ ] All form fields present
- [ ] Submit button clickable
- [ ] Email link working

### Footer Tests

- [ ] Footer visible at bottom
- [ ] Copyright text showing
- [ ] Heart icon showing

---

## 📝 TEST REPORT TEMPLATE

```
Test Date: [DATE]
Browser: [BROWSER] [VERSION]
Device: [DEVICE]
Screen Size: [RESOLUTION]

RESULTS:
- Desktop Layout: PASS/FAIL
- Mobile Layout: PASS/FAIL
- Navigation: PASS/FAIL
- Links: PASS/FAIL
- Forms: PASS/FAIL
- Performance: PASS/FAIL

Issues Found:
1. [Issue description]
   Fix: [How to fix]

2. [Issue description]
   Fix: [How to fix]

Status: READY/NOT READY FOR DEPLOYMENT
```

---

## 🚀 BEFORE DEPLOYMENT

Final checklist sebelum push ke GitHub:

- [ ] All sections tested
- [ ] No console errors
- [ ] Responsive on all sizes
- [ ] All links working
- [ ] All content updated
- [ ] No typos
- [ ] Performance good
- [ ] Ready for public

---

## 🎉 READY FOR GITHUB PAGES!

Setelah semua test passed, Anda siap untuk:

```powershell
git init
git add .
git commit -m "Personal portfolio website"
git push -u origin main
```

Website akan live di: `https://username.github.io`

---

## 🔗 USEFUL TESTING LINKS

- Local HTTP Server: http://localhost:8000
- HTML Validator: validator.w3.org
- CSS Validator: jigsaw.w3.org/css-validator
- Link Checker: validator.w3.org/checklink
- Performance: web.dev/measure
- Mobile Friendly: search.google.com/test/mobile-friendly

---

**Happy testing! 🧪 Let me know if you find any issues!**
