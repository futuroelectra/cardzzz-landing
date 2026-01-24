# GitHub Pages Deployment Notes

## Asset Path Fixes Applied

### 1. CNAME File
- ✅ Fixed: Changed from `www.cardzzz.com` to `cardzzz.com`
- Location: Root directory
- Content: `cardzzz.com` (no https, no slashes, no www)

### 2. Absolute Paths Converted to Relative
- ✅ `index.html`: 
  - Changed `/cardzzz.svg` → `./cardzzz.svg`
  - Changed `/src/main.jsx` → `./src/main.jsx`
- ✅ `src/components/Logo.jsx`:
  - Changed `/cardzzz.svg` → `./cardzzz.svg`

### 3. Vite Configuration
- ✅ Updated `vite.config.js`:
  - Added `base: './'` for relative paths
  - Configured build output directory

### 4. Font Paths
- ✅ Verified case sensitivity:
  - `Roundo-Variable.ttf` (matches CSS reference)
  - `Satoshi-Variable.ttf` (matches CSS reference)
- ✅ Font paths in CSS use relative paths: `url('../Roundo-Variable.ttf')`

### 5. SVG Filter
- ✅ Verified: Liquid glass SVG filter (`id="frosted"`) is present in `index.html`
- ✅ CSS references: `backdrop-filter: url(#frosted)` correctly references the filter

## Build and Deploy Instructions

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **The build output will be in the `dist/` folder**

3. **For GitHub Pages:**
   - Option A: Deploy from `dist/` folder
   - Option B: Configure GitHub Actions to build and deploy automatically

4. **Important:** After building, ensure the `dist/` folder contains:
   - `index.html` (with relative paths)
   - `assets/` folder (with CSS and JS)
   - `cardzzz.svg` (in root of dist)
   - All font files (if not processed by Vite)

## File Structure After Build

```
dist/
├── index.html
├── cardzzz.svg
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── Roundo-Variable.ttf (if not processed)
└── Satoshi-Variable.ttf (if not processed)
```

## Verification Checklist

- [x] CNAME file contains only `cardzzz.com`
- [x] All absolute paths converted to relative
- [x] Font filenames match case-sensitively
- [x] SVG filter present in HTML
- [x] Vite config set to use relative base path
- [x] Logo component uses relative path

## Troubleshooting

If assets still fail to load:
1. Check browser console for 404 errors
2. Verify the built `dist/` folder structure
3. Ensure GitHub Pages is serving from the correct directory
4. Check that CNAME file is in the deployed branch
5. Verify DNS settings for cardzzz.com point to GitHub Pages
