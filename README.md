# Personal Academic Website

A minimalist, professional website for Chibuike Robinson Umeike - AI & Computer Vision Researcher.

## 🚀 Quick Start

### Local Development

1. Simply open `index.html` in your browser
2. No build process required - it's pure HTML/CSS/JS

### Deployment Options

#### Option 1: GitHub Pages (Recommended - Free)

1. Create a new repository on GitHub (e.g., `username.github.io`)
2. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. Go to Settings → Pages → Select "main" branch
4. Your site will be live at `https://yourusername.github.io`

#### Option 2: Netlify (Easy drag-and-drop)

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up for free
3. Drag and drop the entire `personal-website` folder
4. Get instant deployment with custom domain support

#### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com/)
2. Sign up and import your GitHub repository
3. Auto-deploy on every push

## 📁 File Structure

```
personal-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── script.js      # Interactive features
├── images/            # Add your photos here
└── assets/
    └── cv.pdf         # Your CV (add this)
```

## ✏️ Customization

### Add Your Photo

1. Add your professional photo to `images/` folder
2. Update the hero section in `index.html` if you want to include it

### Update CV Link

1. Place your CV PDF in the `assets/` folder
2. Make sure it's named `cv.pdf` or update the link in `index.html`

### Modify Content

- **About section**: Update the text in the `#about` section
- **Research areas**: Modify the research cards in `#research`
- **Publications**: Add/remove publications in `#publications`
- **Contact info**: Update all contact details in `#contact`

### Change Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #1a1a2e;
    --highlight-color: #e94560;
    /* Modify these to change the color scheme */
}
```

## 🎨 Design Features

- **Minimalist & Professional**: Clean design suitable for academic/research positions
- **Responsive**: Works perfectly on mobile, tablet, and desktop
- **Fast**: No heavy frameworks, loads instantly
- **Accessible**: Semantic HTML with proper ARIA labels
- **SEO-friendly**: Proper meta tags and structure

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔧 Technologies Used

- Pure HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- Font Awesome icons

## 📈 Performance

- No frameworks = Fast loading
- Optimized animations
- Lazy loading for sections
- Minimal HTTP requests

## 🆘 Support

For questions or issues:
- Email: chibuikeumeike@gmail.com
- GitHub: [@crumeike](https://github.com/crumeike)

## 📄 License

Feel free to use this template for your own website. Attribution appreciated but not required.

---

**Last Updated**: November 2025
