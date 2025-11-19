# Git Setup for Render Deployment

## Current Status
✅ Git repository initialized
✅ Files committed locally (120 files)
❌ Need to set up GitHub remote

## Steps to Complete

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `tannu-birthday` (or your choice)
3. **Important**: Keep it **PRIVATE** (since it has personal content)
4. Do NOT initialize with README, .gitignore, or license
5. Click "Create repository"

### 2. Connect Your Local Repo to GitHub

After creating the repo, GitHub will show you commands. Use these:

```powershell
# Add GitHub as remote (use YOUR repository URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Rename branch from master to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example** (replace with your actual details):
```powershell
git remote add origin https://github.com/nisid/tannu-birthday.git
git branch -M main
git push -u origin main
```

### 3. Verify Upload

Check GitHub - you should see all 120 files uploaded!

### 4. Deploy to Render

Now follow these steps:

1. Go to https://dashboard.render.com/
2. Click "New" → "Web Service"
3. Click "Connect account" (if first time) to link GitHub
4. Find your repository in the list
5. Click "Connect"
6. Render auto-detects `render.yaml` settings
7. Click "Create Web Service"
8. Wait 3-5 minutes for build
9. Get your live URL! 🎉

## Troubleshooting

### If you get "Repository not found"
Your GitHub URL might be wrong. Check:
```powershell
git remote -v
```

Should show your GitHub URL. If wrong:
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
```

### If push asks for credentials
GitHub now uses tokens instead of passwords:
1. Use GitHub Desktop app (easier), OR
2. Create a Personal Access Token at https://github.com/settings/tokens

### Alternative: Use GitHub Desktop (EASIER!)

Simpler option if you're not familiar with Git:
1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. File → Add Local Repository
4. Select `C:\Users\nisid\OneDrive\Desktop\tannu`
5. Click "Publish repository"
6. Choose name and privacy settings
7. Click "Publish"
8. Done! Now follow Render steps above

## Quick Reference

```powershell
# Check remote status
git remote -v

# Check current branch
git branch

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main

# View commit history
git log --oneline
```

## You're Almost There!

Once you push to GitHub, deploying to Render takes just 5 minutes! 🚀

