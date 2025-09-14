# Deployment Guide

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm start
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## GitHub Pages Setup

### Option 1: Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy on every push to main branch

### Option 2: Manual Deployment

1. Build the project: `npm run build`
2. Deploy: `npm run deploy`
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose "gh-pages"

## Custom Domain (Optional)

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure your domain's DNS to point to `samwei.github.io`
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Environment Variables

Create a `.env` file for any environment-specific variables:

```env
REACT_APP_SITE_URL=https://samwei.github.io/personal-website
```

## Troubleshooting

### Build Issues

- Ensure Node.js 18+ is installed
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### Deployment Issues

- Check GitHub Actions logs for errors
- Ensure repository has Pages enabled
- Verify the `homepage` field in package.json matches your repository

### Routing Issues

- GitHub Pages requires a 404.html file for client-side routing
- The build process should handle this automatically
- If issues persist, add a `_redirects` file to public folder

## Performance Optimization

- Images are automatically optimized during build
- Code splitting is enabled for better loading
- Service worker is included for caching
- Gzip compression is handled by GitHub Pages

## Analytics (Optional)

To add Google Analytics:

1. Add your tracking ID to the environment variables
2. Update the Helmet configuration in App.js
3. Add the Google Analytics script to public/index.html
