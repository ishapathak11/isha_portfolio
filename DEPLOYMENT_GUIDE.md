# 🚀 Step-by-Step Deployment Guide

Follow these steps to deploy your portfolio to GitHub and make it live!

## Prerequisites
- ✅ You have a GitHub account (if not, create one at github.com)
- ✅ Git is installed on your computer (check with `git --version`)

---

## Step 1: Initialize Git Repository

1. **Open your terminal/command prompt** in the portfolio folder
   - Navigate to: `C:\Users\Isha Pathak\Desktop\portfolio`

2. **Check if Git is initialized**
   ```bash
   git status
   ```
   - If you see "not a git repository", continue to step 3
   - If you see file listings, skip to Step 2

3. **Initialize Git** (if not already done)
   ```bash
   git init
   ```

---

## Step 2: Create GitHub Repository

1. **Go to GitHub.com** and sign in

2. **Click the "+" icon** in the top right corner
   - Select "New repository"

3. **Fill in the repository details:**
   - Repository name: `portfolio` (or any name you like)
   - Description: "My Portfolio Website"
   - Visibility: **Public** (required for free GitHub Pages)
   - **DO NOT** check "Add a README file" (we already have one)
   - **DO NOT** add .gitignore or license
   - Click **"Create repository"**

4. **Copy the repository URL**
   - You'll see a page with commands
   - Copy the HTTPS URL (looks like: `https://github.com/YOUR_USERNAME/portfolio.git`)

---

## Step 3: Connect Local Repository to GitHub

**Run these commands in your terminal** (replace `YOUR_USERNAME` with your GitHub username):

```bash
# Add all files to Git
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website"

# Rename branch to main (if needed)
git branch -M main

# Connect to GitHub (replace with your actual repository URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

**Note:** If you're asked for credentials:
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your GitHub password)
  - How to create one: GitHub → Settings → Developer settings → Personal access tokens → Generate new token
  - Give it "repo" permissions

---

## Step 4: Enable GitHub Pages

1. **Go to your repository on GitHub**
   - Visit: `https://github.com/YOUR_USERNAME/portfolio`

2. **Click on "Settings"** tab (top right of repository)

3. **Scroll down to "Pages"** (in the left sidebar)

4. **Under "Source":**
   - Select: **"GitHub Actions"** (NOT "Deploy from a branch")
   - This will use the workflow file we created

5. **Wait for deployment**
   - Go to "Actions" tab in your repository
   - You should see "Deploy to GitHub Pages" workflow running
   - Wait for it to complete (green checkmark)

---

## Step 5: Access Your Live Website

1. **Go back to Settings → Pages**

2. **Your site URL will be displayed:**
   - `https://YOUR_USERNAME.github.io/portfolio/`
   - It may take a few minutes to become active

3. **Visit the URL** in your browser!

---

## Step 6: Future Updates

Whenever you make changes to your portfolio:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Updated portfolio"

# Push to GitHub
git push
```

The website will automatically redeploy via GitHub Actions!

---

## ⚠️ Important Notes

### If your repository name is NOT "portfolio":
1. Open `vite.config.ts`
2. Change this line:
   ```typescript
   base: mode === 'production' ? '/portfolio/' : '/',
   ```
   To:
   ```typescript
   base: mode === 'production' ? '/YOUR_REPO_NAME/' : '/',
   ```
3. Commit and push the change

### If deployment fails:
1. Check the "Actions" tab for error messages
2. Make sure your repository name matches the base path in `vite.config.ts`
3. Verify the workflow file exists at `.github/workflows/deploy.yml`

---

## Alternative: Deploy to Vercel (Even Easier!)

If GitHub Pages seems complicated, try Vercel:

1. **Go to vercel.com** and sign up with GitHub
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Click "Deploy"** - that's it!
5. **Update vite.config.ts:**
   ```typescript
   base: '/',  // Change this line
   ```

---

## Need Help?

If you encounter any issues:
- Check the Actions tab for error logs
- Verify all files are committed and pushed
- Make sure repository name matches the base path
- Try the Vercel alternative (simpler!)

Good luck! 🎉
