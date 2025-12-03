# Adding Organization Logos to Recognition Section

## Overview
The Recognition section now supports organization logos instead of generic icons. Logos will fall back to Font Awesome icons if images are not found.

## Required Logo Files

Add these logo images to the `images/` folder:

### 1. NeurIPS Logo
- **Filename:** `neurips-logo.png`
- **Recommended size:** 200x200px (will auto-scale to 60x60px)
- **Source:** https://neurips.cc/ (official website)
- **Fallback icon:** Award icon (fa-award)

### 2. NSBE Logo
- **Filename:** `nsbe-logo.png`
- **Recommended size:** 200x200px
- **Source:** https://www.nsbe.org/ (official website)
- **Fallback icon:** Trophy icon (fa-trophy)

### 3. ASCE Logo
- **Filename:** `asce-logo.png`
- **Recommended size:** 200x200px
- **Source:** https://www.asce.org/ (official website)
- **Fallback icon:** Star icon (fa-star)

### 4. Argonne National Laboratory Logo
- **Filename:** `argonne-logo.png`
- **Recommended size:** 200x200px
- **Source:** https://www.anl.gov/ (official website)
- **Fallback icon:** Flask icon (fa-flask)

### 5. TPC (Trillion Parameter Consortium) Logo
- **Filename:** `tpc-logo.png`
- **Recommended size:** 200x200px
- **Source:** https://tpc.dev/ (official website)
- **Fallback icon:** Microphone icon (fa-microphone)

### 6. NIST Logo
- **Filename:** `nist-logo.png`
- **Recommended size:** 200x200px
- **Source:** https://www.nist.gov/ (official website)
- **Fallback icon:** Chart icon (fa-chart-line)

## How to Add Logos

### Option 1: Download from Official Websites
1. Visit each organization's official website
2. Look for "Media Kit", "Brand Assets", or "Press" pages
3. Download the official logo (PNG format preferred)
4. Resize to approximately 200x200px (maintains quality)
5. Save with the exact filename listed above

### Option 2: Use Logo Search Services
- **Brandfetch:** https://brandfetch.com/
- **Clearbit Logo API:** https://logo.clearbit.com/[domain.com]
- **Wikipedia Commons:** Often has official logos

### Quick Commands (if you have URLs):
```bash
# Example: Download logo using curl
curl -o images/neurips-logo.png https://example.com/neurips-logo.png

# Or using wget
wget -O images/argonne-logo.png https://example.com/argonne-logo.png
```

## Logo Guidelines

### Image Specifications:
- **Format:** PNG (with transparency preferred)
- **Size:** 200x200px to 400x400px (will auto-scale)
- **Aspect ratio:** Square or close to square works best
- **File size:** Keep under 50KB for fast loading

### Design Considerations:
- Use official logos only (respect trademark guidelines)
- Prefer horizontal or square versions
- Transparent backgrounds work best
- Ensure logos are clearly visible at 60x60px display size

## Testing

After adding logos:

1. Open `index.html` in a browser
2. Scroll to "Recognition & Impact" section
3. Verify each logo displays correctly
4. If a logo doesn't load, check:
   - Filename matches exactly (case-sensitive)
   - File is in `images/` folder
   - File format is PNG or JPG
   - Icon fallback appears if file missing

## Fallback Behavior

If any logo file is missing or fails to load, the system automatically falls back to the corresponding Font Awesome icon. This ensures the site always displays properly even without logos.

## Where to Find Official Logos

### NeurIPS
- Website: https://neurips.cc/
- Look for: Media kit or conference branding

### NSBE
- Website: https://www.nsbe.org/
- Look for: About > Brand Guidelines

### ASCE
- Website: https://www.asce.org/
- Look for: Media Center > Logos

### Argonne National Laboratory
- Website: https://www.anl.gov/
- Search: "Argonne logo" or check media resources

### TPC (Trillion Parameter Consortium)
- Website: https://tpc.dev/
- Check: Footer or about page

### NIST
- Website: https://www.nist.gov/
- Look for: Public Affairs > Visual Identity

## Example Logo Placement

Current structure in HTML:
```html
<div class="highlight-logo">
    <img src="images/neurips-logo.png" 
         alt="NeurIPS" 
         onerror="this.parentElement.innerHTML='<i class=\'fas fa-award\'></i>'">
</div>
```

The `onerror` handler automatically shows the icon if the image fails to load.

## Notes

- All 6 logos use the same CSS styling (60x60px display size)
- Logos are responsive and scale properly on mobile
- Current fallback icons already work perfectly
- Adding logos is optional but recommended for visual impact
- You can test one logo at a time - remaining items will show icons

---

**Need Help?**
If you need assistance getting specific logos, let me know which organizations and I can help locate official sources or create appropriate placeholder images.
