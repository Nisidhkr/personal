# 🚀 Quick Setup Guide

## Step-by-Step Instructions

### 1. Install Dependencies

Open a terminal in the project root and run:

```bash
npm install
```

Then install workspace dependencies:

```bash
npm run install-all
```

Or install individually:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies  
cd ../frontend
npm install
```

### 2. Start Development Servers

From the root directory:

```bash
npm run dev
```

This will start:
- ✅ Backend API at http://localhost:3001
- ✅ Frontend at http://localhost:5173

### 3. Open in Browser

Navigate to: **http://localhost:5173**

You should see the countdown overlay, then the birthday website!

## ✨ What to Customize

### 1. Add Photos

**Portrait Photo:**
- Add Tannu's portrait to `frontend/public/images/tannu-portrait.jpg`
- Update `PortraitCard.tsx` line 8-16 with:
  ```tsx
  <img 
    src="/images/tannu-portrait.jpg" 
    alt="Tannu"
    className="w-full h-full object-cover"
  />
  ```

**Memory Photos:**
- Add to `backend/public/images/gallery/`
- Name them: `photo1.jpg`, `photo2.jpg`, etc.

**Kota Last Ride Photo:**
- Add to `backend/public/images/kota-ride.jpg`
- Update `MemoriesSection.tsx`

### 2. Add Video Message

In `UnlockSurprise.tsx`, replace the placeholder div (around line 71) with:

**For local video:**
```tsx
<video controls className="w-full h-full rounded-2xl">
  <source src="/videos/message.mp4" type="video/mp4" />
</video>
```

**For YouTube:**
```tsx
<iframe 
  className="w-full h-full rounded-2xl"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### 3. Update Spotify Playlist

In `Header.tsx`, line 24, change the URL:
```tsx
href="YOUR_SPOTIFY_PLAYLIST_LINK"
```

### 4. Customize Messages

Edit `backend/src/data/hourlyMessages.ts` to personalize the 24 hourly messages.

## 🎯 Testing the Features

### Secret Code Unlock
1. Scroll to "Unlock Next Surprise"
2. Enter: `10-12-2020`
3. Watch confetti! 🎉

### Countdown Replay
Click the button in bottom-right corner to replay the countdown.

### Gallery Auto-Play
The gallery auto-advances every 3 seconds. Click pause/play to control it.

### Hourly Messages
The message changes based on the current hour (0-23).

## 🐛 Troubleshooting

### Port Already in Use

**Backend (3001):**
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3001 | xargs kill
```

**Frontend (5173):**
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5173 | xargs kill
```

### API Not Working

1. Check backend is running: http://localhost:3001/health
2. Check CORS settings in `backend/src/index.ts`
3. Check `.env` file in frontend has: `VITE_API_URL=http://localhost:3001`

### Images Not Showing

1. Make sure images are in `backend/public/images/` or `frontend/public/`
2. Check file names match the paths in code
3. Restart backend server after adding images

## 📦 Building for Production

```bash
npm run build
```

This creates:
- `backend/dist/` - Compiled backend
- `frontend/dist/` - Static frontend files

Deploy the frontend to any static hosting (Vercel, Netlify, etc.)
Deploy the backend to Node.js hosting (Heroku, Railway, etc.)

## 💝 Final Touches

1. **Test on Mobile:** Open http://YOUR_LOCAL_IP:5173 on phone
2. **Test Secret Code:** Make sure it works
3. **Check All Links:** Spotify playlist, navigation buttons
4. **Review Content:** Read through all text for typos
5. **Add All Photos:** Don't leave placeholders!

## 🎉 You're Ready!

The website is now ready for Tannu's birthday! 

Make sure to:
- [ ] Add all personal photos
- [ ] Add video message
- [ ] Update Spotify link
- [ ] Test on multiple devices
- [ ] Deploy before her birthday!

---

**Need help?** Check the main README.md for detailed API documentation and component structure.

