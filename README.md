# Isha Pathak - Portfolio Website

A modern portfolio website built with React, TypeScript, and Vite.

## ⚠️ TROUBLESHOOTING: If you see blank page or /src/main.tsx error

**Problem**: Your site shows blank page and browser console shows error loading `/src/main.tsx`

**Solution**: GitHub Pages is serving source files instead of built files. You MUST configure it correctly:

1. Go to: https://github.com/ishapathak11/isha_portfolio
2. Click **"Settings"** tab (at the top, next to "Code", "Issues", etc.)
3. In the LEFT sidebar, scroll down and click **"Pages"**
4. Find section **"Build and deployment"**
5. Under **"Source"**, click the dropdown
6. **IMPORTANT**: Select **"GitHub Actions"** (NOT "Deploy from a branch")
7. If you don't see "GitHub Actions" option:
   - Make sure you have successfully run the workflow at least once (check Actions tab)
   - Try refreshing the Settings page
   - The option appears after your first successful workflow run
8. After selecting "GitHub Actions", wait 2-3 minutes
9. Clear browser cache completely (`Ctrl + Shift + Delete` → Clear all cached files)
10. Visit site in Incognito window: https://ishapathak11.github.io/isha_portfolio/

**Why this happens**: If "Source" is set to "Deploy from a branch", GitHub Pages serves files directly from your repository root (including the source `index.html` with `/src/main.tsx`). Setting it to "GitHub Actions" makes it serve the built files from the `dist/` folder created by the workflow.

## �� Deployment Guide

### Option 1: Deploy to GitHub Pages (Free)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `portfolio` (or any name you prefer)
   - **Important**: If you use a different repository name, update the `base` path in `vite.config.ts`

2. **Push Your Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The deployment will automatically start via the workflow file

4. **Access Your Live Site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio/`

### Option 2: Deploy to Vercel (Recommended - Easier)

1. **Install Vercel CLI** (optional, or use web interface)
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Web Interface** (Easiest)
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click **New Project**
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click **Deploy**
   - Your site will be live instantly!

3. **Deploy via CLI**
   ```bash
   vercel
   ```

**Note**: If using Vercel, update `vite.config.ts` and change `base: '/portfolio/'` to `base: '/'`

### Option 3: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click **New site from Git**
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy site**

**Note**: If using Netlify, update `vite.config.ts` and change `base: '/portfolio/'` to `base: '/'`

## 📝 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- React Icons
- CSS3

## 📄 License

MIT
