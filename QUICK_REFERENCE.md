# 🚀 Quick Reference Card

## Essential Commands

```bash
# Install dependencies
npm install

# Development (hot reload)
npm run dev
# → Frontend: http://localhost:5173
# → Backend: http://localhost:3001

# Build for production
npm run build
# → Creates frontend/dist/ and backend/dist/

# Start production server
npm start
# → Runs on http://localhost:3001

# Health check
curl http://localhost:3001/health
```

## File Structure

```
tannu/
├── frontend/           # React app
│   ├── src/           # Source code
│   └── dist/          # Built files (after npm run build)
│
├── backend/           # Express API
│   ├── src/           # Source code
│   ├── dist/          # Built files (after npm run build)
│   └── public/        # Static assets (images, videos)
│
├── render.yaml        # Render deployment config
└── package.json       # Root config
```

## URLs

| Environment | URL |
|-------------|-----|
| Dev - Frontend | http://localhost:5173 |
| Dev - Backend | http://localhost:3001 |
| Production Local | http://localhost:3001 |
| Production Render | https://your-app.onrender.com |

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/health` | Health check (returns JSON) |
| `/api/hourly-messages` | Get hourly messages |
| `/api/gallery` | Get gallery photos |
| `/api/config` | Get app configuration |
| `/images/*` | Static images |
| `/videos/*` | Static videos |

## Deployment (3 Steps)

```bash
# 1. Build and test locally
npm run build
npm start
# Visit http://localhost:3001

# 2. Push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 3. Deploy on Render
# → Go to https://dashboard.render.com/
# → New → Web Service
# → Connect GitHub repo
# → Done! (auto-detects render.yaml)
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Run `npm install` first |
| Port in use | Kill process on port 3001/5173 |
| Images not loading | Check `backend/public/images/` |
| TypeScript errors | Check for unused variables |
| Server won't start | Check if backend/dist/ exists |

## Environment Variables

| Variable | Dev | Production |
|----------|-----|------------|
| NODE_ENV | development | production |
| PORT | 3001 | 10000 (Render) |
| VITE_API_URL | (optional) | (optional) |

## Documentation Files

| File | Purpose |
|------|---------|
| `RENDER_QUICKSTART.md` | 5-min deploy guide |
| `RENDER_DEPLOYMENT_GUIDE.md` | Full deployment docs |
| `DEPLOYMENT_CHECKLIST.md` | Pre/post deploy checks |
| `WINDOWS_FIX.md` | Windows compatibility |
| `ISSUES_FIXED.md` | Recent fixes |
| `MERGE_SUMMARY.md` | Technical details |

## Quick Tests

```bash
# Test build
npm run build
# ✅ Should complete without errors

# Test server
npm start
# ✅ Should start on port 3001

# Test health
curl http://localhost:3001/health
# ✅ Should return {"status":"ok","message":"Backend is running!"}

# Test frontend
# ✅ Visit http://localhost:3001
# ✅ Should see birthday website
```

## Common Tasks

### Adding Images
1. Add to `backend/public/images/gallery/`
2. Update `backend/src/data/gallery.ts`
3. Commit and push

### Adding Videos
1. Add to `backend/public/videos/`
2. Reference in components
3. Commit and push

### Updating Content
1. Edit files in `frontend/src/`
2. Test with `npm run dev`
3. Build with `npm run build`
4. Push to GitHub (auto-deploys on Render)

## Status Check

```bash
# Check if everything is ready
npm run build        # Should pass ✅
npm start           # Should start ✅
curl localhost:3001/health  # Should return 200 ✅
```

## Support

- **Render Docs**: https://render.com/docs
- **Issues**: See `ISSUES_FIXED.md`
- **Deployment**: See `RENDER_QUICKSTART.md`

---

**Current Status**: ✅ All systems ready for deployment!


