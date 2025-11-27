# Project Images Guide

## 📸 Where to Add Your Custom Images

Place your custom project images in the `images/` folder with these exact names:

```
images/
├── project-foundation-models.jpg   (for Multimodal Foundation Models)
├── project-disaster.jpg             (for Post-Disaster Assessment)
├── project-biomedical.jpg           (for Biomedical Imaging)
└── project-smart-cities.jpg         (for Smart Cities & IoT)
```

## 🎨 Image Specifications

**Recommended dimensions:** 800x500px (16:10 aspect ratio)
**Format:** JPG, PNG, or WebP
**File size:** Keep under 500KB for optimal loading

## 🔗 GitHub Links

Each project card has a GitHub icon that appears on hover. Update the links in `index.html`:

Find this section for each project:
```html
<a href="https://github.com/crumeike/YOUR-PROJECT" target="_blank" class="project-github">
```

Replace `https://github.com/crumeike/YOUR-PROJECT` with your actual project repository URL.

**If a project doesn't have a GitHub repo:**
- Remove the entire `<div class="project-overlay">...</div>` section for that project
- Or change the link to point to a demo, documentation, or publication

## 💡 Image Tips

**Good project images:**
- Show visualizations from your work (model diagrams, results, dashboards)
- Use clean, professional graphics
- Have good contrast and readability
- Represent the project visually

**Where to get images:**
- Screenshots from your papers/presentations
- Diagrams from your research
- Result visualizations
- Create custom graphics in Figma/Canva
- Use relevant stock photos as placeholders

## 🎭 Placeholder Images

If you don't have images yet, you can:

1. **Use placeholder services temporarily:**
   - https://placehold.co/800x500/1a1a2e/ffffff?text=Foundation+Models
   - Replace `YOUR-PROJECT.jpg` with the URL temporarily

2. **Create simple graphics:**
   - Use Canva (free)
   - Use Figma (free)
   - Take screenshots from your slides

## 🔄 Quick Test

After adding images:
1. Open `index.html` in a browser
2. Check each project card displays correctly
3. Hover over images to see GitHub link appear
4. Click project headers to expand/collapse details

---

**Need help?** Email chibuikeumeike@gmail.com
