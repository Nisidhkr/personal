# ✅ Pre-Deployment Checklist

Use this checklist before deploying to Render to ensure everything is ready!

## 📋 Pre-Deployment Steps

### 1. Code Verification
- [ ] All changes committed to Git
- [ ] No uncommitted files (`git status` is clean)
- [ ] Code is on main/master branch
- [ ] `.gitignore` properly configured

### 2. Dependencies Check
- [ ] All dependencies listed in package.json files
- [ ] No missing packages
- [ ] Node version >= 18.0.0
- [ ] npm version >= 9.0.0

### 3. Content Verification
- [ ] All images are in `backend/public/images/gallery/`
- [ ] All videos are in `backend/public/videos/`
- [ ] Images are committed to Git (not in .gitignore)
- [ ] File names match references in code

### 4. Configuration Files
- [ ] `render.yaml` exists in root
- [ ] `package.json` has correct scripts
- [ ] `backend/src/index.ts` has production config
- [ ] `frontend/vite.config.ts` has build config

### 5. Local Build Test
```bash
# Run these commands and verify success

# Install dependencies
npm install
# ✅ Should complete without errors

# Build project
npm run build
# ✅ Should create frontend/dist/ directory
# ✅ Should create backend/dist/ directory

# Start in production mode
npm start
# ✅ Server should start on port 3001

# Test in browser
# Visit http://localhost:3001
# ✅ App should load completely
# ✅ All images should display
# ✅ All features should work
```

### 6. API Testing
```bash
# Test health endpoint
curl http://localhost:3001/health
# ✅ Should return: {"status":"ok","message":"Backend is running!"}

# Test API endpoints
curl http://localhost:3001/api/hourly-messages
# ✅ Should return JSON array

curl http://localhost:3001/api/gallery
# ✅ Should return JSON array
```

### 7. GitHub Repository
- [ ] Repository exists on GitHub
- [ ] Code is pushed to remote
- [ ] Branch is main or master
- [ ] Repository is accessible (public or you have access)

### 8. Render Account
- [ ] Render account created (https://render.com)
- [ ] Email verified
- [ ] GitHub connected to Render account

## 🚀 During Deployment

### 1. Create Web Service
- [ ] Click "New" → "Web Service"
- [ ] Connect GitHub repository
- [ ] Select correct repository
- [ ] Choose correct branch

### 2. Verify Settings
- [ ] Build Command: `npm run build`
- [ ] Start Command: `npm start`
- [ ] Environment: Node
- [ ] Region: Choose closest to you
- [ ] Plan: Free (or Starter)

### 3. Environment Variables
- [ ] `NODE_ENV` = `production` (auto-set)
- [ ] `PORT` = Let Render set automatically

### 4. Advanced Settings
- [ ] Health Check Path: `/health`
- [ ] Auto-Deploy: Yes (recommended)

### 5. Create Service
- [ ] Click "Create Web Service"
- [ ] Wait for build to complete (3-5 min)
- [ ] Check build logs for errors

## ✅ Post-Deployment Verification

### 1. Initial Load
- [ ] Visit your Render URL
- [ ] App loads without errors
- [ ] Console has no errors (F12 → Console)

### 2. Core Features
- [ ] Hero section displays
- [ ] Countdown timer works
- [ ] Profile image loads
- [ ] Navigation works

### 3. Gallery Section
- [ ] Gallery images load
- [ ] All photos display correctly
- [ ] Click on images works (if applicable)
- [ ] No broken image links

### 4. Interactive Features
- [ ] Hourly messages display
- [ ] Games are playable
- [ ] Buttons work
- [ ] Animations work

### 5. Videos (if added)
- [ ] Videos load
- [ ] Videos play
- [ ] Controls work

### 6. Mobile Testing
- [ ] Open on mobile browser
- [ ] Layout responsive
- [ ] Touch interactions work
- [ ] Images scale properly

### 7. API Endpoints
```bash
# Replace YOUR-APP with your Render app name
curl https://YOUR-APP.onrender.com/health
# ✅ Should return 200 OK

curl https://YOUR-APP.onrender.com/api/hourly-messages
# ✅ Should return JSON data

curl https://YOUR-APP.onrender.com/api/gallery
# ✅ Should return JSON data
```

### 8. Performance
- [ ] Initial load < 3 seconds
- [ ] No console errors
- [ ] Images load progressively
- [ ] Smooth animations

## 🐛 Troubleshooting Checklist

### Build Failed
- [ ] Check Render build logs
- [ ] Verify Node version in logs
- [ ] Test build locally: `npm run build`
- [ ] Check package.json scripts
- [ ] Verify all dependencies installed

### App Not Loading
- [ ] Check if build completed successfully
- [ ] Verify start command is correct
- [ ] Check Render logs for errors
- [ ] Test health endpoint
- [ ] Wait 30 sec (free tier wake time)

### Images Not Showing
- [ ] Images in correct directory
- [ ] File names match exactly (case-sensitive)
- [ ] Images committed to Git
- [ ] Check browser console for 404 errors
- [ ] Verify image paths in code

### API Errors
- [ ] Check Render logs
- [ ] Verify API routes in `backend/src/routes/api.ts`
- [ ] Test locally first
- [ ] Check CORS settings

### Slow Performance
- [ ] Normal on free tier (sleeping)
- [ ] Consider upgrading to Starter plan
- [ ] Optimize images (compress if large)
- [ ] Check bundle size

## 📊 Monitoring Checklist

### Daily (First Week)
- [ ] Check Render dashboard
- [ ] Review any error logs
- [ ] Verify uptime
- [ ] Test random feature

### Weekly
- [ ] Check usage metrics
- [ ] Review performance
- [ ] Test on different devices
- [ ] Gather user feedback

### As Needed
- [ ] Update content
- [ ] Fix bugs
- [ ] Add features
- [ ] Monitor costs

## 🎯 Optimization Checklist (Optional)

### Performance
- [ ] Compress images (use TinyPNG or similar)
- [ ] Lazy load images
- [ ] Enable caching headers
- [ ] Minimize bundle size

### SEO (if needed)
- [ ] Add meta tags
- [ ] Add Open Graph tags
- [ ] Create sitemap
- [ ] Add favicon

### Monitoring
- [ ] Set up UptimeRobot (keep free tier awake)
- [ ] Add analytics (optional)
- [ ] Monitor error rates
- [ ] Track performance metrics

### Security
- [ ] Update dependencies regularly
- [ ] Review CORS settings
- [ ] Check for vulnerabilities
- [ ] Use environment variables for secrets

## 📱 Share Checklist

Before sharing with Tannu:
- [ ] Test on your phone
- [ ] Test on friend's phone
- [ ] Test on different browsers
- [ ] All features work perfectly
- [ ] No broken links or images
- [ ] Loading is reasonable
- [ ] Looks beautiful! 💞

## 🎉 Final Checklist

- [ ] App is live on Render
- [ ] All features tested
- [ ] Mobile-friendly
- [ ] Fast loading
- [ ] No errors in console
- [ ] Images all working
- [ ] Games playable
- [ ] You're happy with it!
- [ ] Ready to share with Tannu! 💞

---

## Quick Commands Reference

```bash
# Test locally
npm run build && npm start

# Push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# Check health
curl http://localhost:3001/health

# View logs
# Go to Render dashboard → Your service → Logs
```

## Emergency Rollback

If something goes wrong:
1. Go to Render dashboard
2. Click your service
3. Go to "Deploys" tab
4. Click "Rollback" on last working deploy

## Support Resources

- **Render Docs**: https://render.com/docs
- **Render Status**: https://status.render.com/
- **Community**: https://community.render.com/

---

**Remember**: Take your time, test thoroughly, and don't rush! 🚀

**You got this!** 💪

