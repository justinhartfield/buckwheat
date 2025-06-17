# Deployment Guide - Buckwheat.com

## 🚨 Important: Deployment Fixes Applied

This version includes fixes for common deployment issues:
- ✅ Fixed MIME type errors for JavaScript modules
- ✅ Corrected asset paths for production builds
- ✅ Added server configuration files for all major hosting platforms
- ✅ Optimized build configuration

## 🌐 Hosting Platform Instructions

### 1. Netlify (Recommended)
1. **Build the project:**
   ```bash
   npm run build
   # or
   pnpm run build
   ```

2. **Deploy the `dist` folder to Netlify**
   - The `netlify.toml` file is already configured
   - Drag and drop the `dist` folder to Netlify dashboard
   - Or connect your GitHub repository for automatic deployments

3. **Build settings (if using Git):**
   - Build command: `npm run build`
   - Publish directory: `dist`

### 2. Vercel
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - The `vercel.json` file is already configured
   - Use Vercel CLI: `vercel --prod`
   - Or connect your GitHub repository

3. **Build settings:**
   - Framework Preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

### 3. GitHub Pages
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Copy contents of `dist` folder to your GitHub Pages repository
   - The `.htaccess` file will handle routing

### 4. Traditional Web Hosting (cPanel, etc.)
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload:**
   - Upload all contents of the `dist` folder to your web root
   - The `.htaccess` file will handle routing and MIME types

### 5. AWS S3 + CloudFront
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to S3:**
   - Upload `dist` folder contents to S3 bucket
   - Configure bucket for static website hosting
   - Set up CloudFront distribution

3. **Important S3 settings:**
   - Error document: `index.html`
   - Index document: `index.html`

## 🔧 Build Process

### Prerequisites
```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development
```bash
# Start development server
npm run dev
# or
pnpm run dev
```

### Production Build
```bash
# Create production build
npm run build
# or
pnpm run build

# Preview production build locally
npm run preview
# or
pnpm run preview
```

## 📁 Build Output Structure
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── products/
│       ├── better-buckwheat-sea-salt.png
│       ├── bobs-red-mill-flour.jpg
│       └── ...
├── .htaccess (for Apache servers)
└── web.config (for IIS servers)
```

## 🚨 Common Issues & Solutions

### Issue 1: "Failed to load module script" MIME type error
**Solution:** The configuration files included in this package fix this:
- `netlify.toml` for Netlify
- `vercel.json` for Vercel
- `.htaccess` for Apache servers
- `web.config` for IIS servers

### Issue 2: "p.map is not a function" error
**Solution:** Fixed by correcting asset paths from `/src/assets/` to `/assets/`

### Issue 3: 404 errors on page refresh
**Solution:** All configuration files include proper routing rules for SPA

### Issue 4: Images not loading
**Solution:** Images are now properly placed in `public/assets/` and referenced correctly

## 🔍 Testing Your Deployment

1. **Check the homepage loads correctly**
2. **Test navigation between pages**
3. **Verify images load properly**
4. **Test page refresh on different routes**
5. **Check mobile responsiveness**
6. **Verify SEO meta tags in page source**

## 📞 Support

If you encounter any deployment issues:
1. Check the browser console for specific error messages
2. Verify your hosting platform supports the configuration files
3. Ensure you're uploading the `dist` folder contents, not the source code
4. Check that your hosting platform serves the correct MIME types

## 🎯 Domain Configuration

When connecting to your buckwheat.com domain:
1. Update DNS settings to point to your hosting platform
2. Configure SSL certificate
3. Set up redirects from www to non-www (or vice versa)
4. Update any hardcoded URLs in the code if necessary

---

**This deployment package is tested and ready for production use! 🚀**

