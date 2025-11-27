# Quick Deployment Guide

## 🎯 Fastest Way to Get Your Site Online (5 minutes)

### Method 1: GitHub Pages (Recommended - Completely Free)

**Step-by-step:**

1. **Create a GitHub account** (if you don't have one): https://github.com/signup

2. **Create a new repository**:
   - Go to https://github.com/new
   - Repository name: `crumeike.github.io` (replace `crumeike` with your GitHub username)
   - Make it Public
   - Don't initialize with README
   - Click "Create repository"

3. **Upload your files**:
   - Click "uploading an existing file"
   - Drag and drop ALL files from the `personal-website` folder
   - Commit the files

4. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Under "Source", select "main" branch
   - Click Save
   - Wait 2-3 minutes

5. **Visit your site**: `https://crumeike.github.io`

**To add your CV:**
- Create an `assets` folder in your repository
- Upload your CV as `cv.pdf`

---

### Method 2: Netlify (Easiest - Drag & Drop)

**Step-by-step:**

1. Go to https://www.netlify.com/
2. Sign up (free)
3. Click "Add new site" → "Deploy manually"
4. Drag the entire `personal-website` folder
5. Done! You get a URL like `your-site.netlify.app`
6. You can change to a custom name in Site settings

**Benefits:**
- Automatic HTTPS
- Can connect custom domain
- Form handling (if you add a contact form later)

---

## ✏️ Before Deploying - Quick Customizations

### 1. Add Your CV
- Place your CV PDF in a new `assets` folder
- Name it `cv.pdf`
- The download button will work automatically

### 2. Add Your Photo (Optional)
If you want to add a profile photo in the hero section:
- Add photo to `images` folder
- Insert this code in `index.html` after line 40 (in the hero section):

```html
<div class="hero-image">
    <img src="images/your-photo.jpg" alt="Chibuike Robinson Umeike">
</div>
```

### 3. Update Email & Links
All your contact info is already in there, but double-check:
- Email: chibuikeumeike@gmail.com
- Phone: +1-205-887-3455
- Location: Tuscaloosa, Alabama

### 4. Customize Colors (Optional)
Open `css/style.css` and change these at the top:

```css
--primary-color: #1a1a2e;    /* Main dark blue */
--highlight-color: #e94560;  /* Pink/red accent */
```

---

## 🔧 Advanced: Custom Domain

If you buy a domain (like `robinsonumeike.com`):

**GitHub Pages:**
1. In repository settings → Pages
2. Add custom domain
3. Update DNS at your domain provider

**Netlify:**
1. Domain settings → Add custom domain
2. Follow DNS instructions

---

## 📧 Need Help?

Email me at chibuikeumeike@gmail.com or check the README.md file for more details.

---

**Remember**: The site works perfectly as-is. Just upload and go!
