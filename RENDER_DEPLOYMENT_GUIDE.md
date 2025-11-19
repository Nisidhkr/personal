# Render Deployment Guide

## 🚀 Quick Deployment Steps

### Method 1: Using render.yaml (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **Create a new Web Service on Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` file

3. **That's it!** Render will automatically:
   - Install dependencies
   - Build the frontend and backend
   - Start the server
   - Assign a URL

### Method 2: Manual Configuration

If you prefer manual setup:

1. **Create a new Web Service on Render**
   - Connect your GitHub repository
   - Configure the following:

2. **Build Settings**
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node

3. **Environment Variables**
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (or leave default)
   - `FRONTEND_URL`: `https://your-app-name.onrender.com` (optional, for CORS)

4. **Advanced Settings**
   - **Health Check Path**: `/health`
   - **Auto-Deploy**: Yes (recommended)

## 📋 Pre-Deployment Checklist

- [ ] Code is pushed to GitHub
- [ ] All dependencies are listed in package.json files
- [ ] Images and videos are in the correct directories:
  - `backend/public/images/`
  - `backend/public/videos/`
- [ ] Test the build locally:
  ```bash
  npm run build
  npm start
  ```
- [ ] Visit `http://localhost:3001` to test

## 🔧 Environment Variables

### Required
- `NODE_ENV=production` - Set automatically by Render

### Optional
- `PORT` - Render sets this automatically (usually 10000)
- `FRONTEND_URL` - Your Render app URL for CORS (optional)
- `VITE_API_URL` - Only needed if API is on different domain

## 🏗️ Build Process

The build process runs in this order:

1. **Install root dependencies**
2. **Install frontend dependencies**
3. **Install backend dependencies**
4. **Build frontend** (creates `frontend/dist/`)
   - Compiles React + TypeScript
   - Bundles with Vite
   - Optimizes assets
5. **Build backend** (creates `backend/dist/`)
   - Compiles TypeScript
   - Copies types and configurations

6. **Start server**
   - Backend serves API at `/api/*`
   - Backend serves frontend static files at `/*`
   - All client-side routes handled by React Router

## 📁 File Structure After Build

```
tannu/
├── frontend/
│   └── dist/              # Frontend build (static files)
│       ├── index.html
│       ├── assets/
│       └── ...
├── backend/
│   ├── dist/              # Backend build (compiled JS)
│   │   ├── index.js
│   │   └── routes/
│   └── public/            # Static assets served by backend
│       ├── images/
│       └── videos/
└── render.yaml            # Render configuration
```

## 🧪 Testing Locally Before Deploy

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start in production mode**
   ```bash
   npm start
   ```

3. **Test the application**
   - Open `http://localhost:3001` in browser
   - Test all features
   - Check that images/videos load
   - Verify API endpoints work

4. **Check health endpoint**
   ```bash
   curl http://localhost:3001/health
   ```

## 🐛 Troubleshooting

### Build Fails
- Check Node version (must be >= 18.0.0)
- Verify all dependencies in package.json
- Check for TypeScript errors: `npm run build --workspace=frontend`

### Frontend Not Loading
- Ensure `NODE_ENV=production` is set
- Check that frontend built successfully
- Verify `frontend/dist/` directory exists

### API Errors (404)
- API routes must start with `/api`
- Check CORS settings in `backend/src/index.ts`
- Verify backend built successfully

### Images/Videos Not Loading
- Files must be in `backend/public/images/` or `backend/public/videos/`
- Check file names match references in code
- Verify files are committed to Git

### Render-Specific Issues
- Check Render logs in dashboard
- Verify build command completed successfully
- Ensure health check endpoint returns 200 OK
- Check that PORT environment variable is used

## 🔄 Updating Your Deployment

After making changes:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

Render will automatically:
- Detect the push
- Rebuild the application
- Deploy the new version
- Zero-downtime deployment

## 🌐 Custom Domain (Optional)

1. Go to your service settings on Render
2. Click "Custom Domain"
3. Add your domain
4. Update DNS records as instructed
5. SSL certificates are automatically provisioned

## 📊 Monitoring

- **Health Check**: Render pings `/health` endpoint
- **Logs**: View real-time logs in Render dashboard
- **Metrics**: CPU, memory, bandwidth in dashboard

## 💰 Cost

- **Free Tier**: 750 hours/month, sleeps after inactivity
- **Starter**: $7/month, no sleeping, more resources
- **Upgrade anytime** from dashboard

## 🎉 Post-Deployment

Once deployed, your app will be available at:
```
https://your-app-name.onrender.com
```

Share this URL with Tannu! 💞

## 📞 Support

If you encounter issues:
1. Check Render logs
2. Verify environment variables
3. Test build locally first
4. Contact Render support if needed

Happy deploying! 🚀

