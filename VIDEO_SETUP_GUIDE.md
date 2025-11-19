# Video Setup Guide - Memories Section

## ✅ Issue Fixed

**Problem:** Videos were trying to load from `http://localhost:5000` but the backend runs on port `3001`, causing `ERR_CONNECTION_REFUSED` errors.

**Solution:** 
1. ✅ Updated backend to serve video files from `backend/public/videos`
2. ✅ Fixed all video URLs in MemoriesSection to use correct backend URL (`http://localhost:3001`)
3. ✅ Videos now use dynamic `API_BASE_URL` for flexibility

---

## 📁 Video File Structure

Your videos are located in:
```
backend/public/videos/
├── special-message.mp4          ← For unlock surprise section (add this!)
└── memories/                     ← Memory videos (configured)
    ├── near-hostel.mp4
    ├── big-bazaar.mp4
    ├── sitting-talking.mp4
    ├── maggi-point.mp4
    ├── paratha-spot.mp4
    └── chandigarh.mp4
```

**Note:** The unlock surprise section expects `special-message.mp4` at the root of the videos folder.

---

## 🔧 Backend Configuration

### Video Static File Serving
**File:** `backend/src/index.ts`

The backend now serves videos at `/videos` endpoint:
```typescript
// Serve static files from public directory
app.use('/images', express.static(path.join(__dirname, '../public/images')));
app.use('/videos', express.static(path.join(__dirname, '../public/videos')));
```

**Video URLs:**
- `http://localhost:3001/videos/memories/near-hostel.mp4`
- `http://localhost:3001/videos/memories/big-bazaar.mp4`
- etc.

---

## 🎨 Frontend Configuration

### MemoriesSection Component
**File:** `frontend/src/components/MemoriesSection.tsx`

Updated to use dynamic backend URL:
```typescript
// Backend URL - matches the API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const memories: Memory[] = [
  {
    title: "Big Bazaar – Pehli Mulaqat",
    video: `${API_BASE_URL}/videos/memories/big-bazaar.mp4`
  },
  // ... more memories
];
```

---

## 🚀 Testing the Videos

1. **Start Backend:**
   ```bash
   cd backend
   npm run dev
   ```
   You should see: `🚀 Backend server running on http://localhost:3001`

2. **Start Frontend (new terminal):**
   ```bash
   cd frontend
   npm run dev
   ```
   You should see: `➜  Local:   http://localhost:5173/`

3. **Test Videos:**
   - Open `http://localhost:5173` in your browser
   - Scroll to the "Our Beautiful Memories" section
   - All 6 videos should now load and play correctly
   - No more connection refused errors!

4. **Verify Backend Serving:**
   - Open `http://localhost:3001/videos/memories/near-hostel.mp4` directly
   - Video should play in browser

---

## 🎬 Your Memory Videos

1. **Near Hostel – Our Special Spot** (Featured)
   - Large video at the top
   - Location: Hostel ke paas woh jagah

2. **Big Bazaar – Pehli Mulaqat** 🏬
   - Date: 06 Jan 2021
   - Your first meeting

3. **Woh Jagah Jahan Baithke Baatein Karte The** 💬
   - Hostel ke neeche wala spot
   - Where you spent time talking

4. **Maggi Point** 🍜
   - Late night maggi sessions
   - Food and memories

5. **Paratha Wali Jagah** 🥘
   - Simple moments together
   - Special memories

6. **Chandigarh Cricket Match** 🏏
   - First long trip together
   - Quality time

---

## 📝 Adding New Videos

### Step 1: Add Video File
Copy your video to: `backend/public/videos/memories/your-video.mp4`

**Recommended video format:**
- Format: MP4 (H.264 codec)
- Resolution: 1080p or 720p
- Keep file size reasonable (<50MB per video)

### Step 2: Update Component
Edit `frontend/src/components/MemoriesSection.tsx`:

**For a new memory card:**
```typescript
const memories: Memory[] = [
  // ... existing memories
  {
    title: "Your New Memory Title",
    description: "Description of this special memory.",
    icon: "🎯", // Choose appropriate emoji
    video: `${API_BASE_URL}/videos/memories/your-video.mp4`
  }
];
```

**For the featured video (near-hostel):**
Change the source in the featured video section:
```typescript
<source src={`${API_BASE_URL}/videos/memories/your-featured-video.mp4`} type="video/mp4" />
```

---

## 🐛 Troubleshooting

### Videos Not Playing?

**1. Check backend is running:**
```bash
# Backend should be running on port 3001
curl http://localhost:3001/health
# Should return: {"status":"ok","message":"Backend is running!"}
```

**2. Check video files exist:**
```bash
# List video files
ls backend/public/videos/memories/
```

**3. Test video URL directly:**
Open in browser: `http://localhost:3001/videos/memories/near-hostel.mp4`
- If video plays → Backend is serving correctly
- If 404 error → Video file missing
- If connection refused → Backend not running

**4. Check browser console:**
Press F12 and look for errors. Should see no connection errors.

**5. Check video format:**
Ensure videos are MP4 format with H.264 codec (most compatible)

### Video Shows Placeholder Icon?

This means the video failed to load. Component gracefully shows a fallback with the memory icon and title instead.

**Common causes:**
- Video file doesn't exist at specified path
- Wrong filename in code
- Backend not running
- CORS issue (already configured correctly)

---

## 🔄 Environment Variables (Optional)

If deploying to production, set the backend URL:

**Create `.env` file in frontend:**
```env
VITE_API_URL=https://your-backend-domain.com
```

Then videos will automatically use the production backend URL.

---

## 💡 Video Player Features

Your memory videos include:
- ✅ Built-in HTML5 video controls (play, pause, volume, fullscreen)
- ✅ Preload metadata for faster loading
- ✅ Graceful error handling with fallback display
- ✅ Responsive aspect ratio (16:9)
- ✅ Smooth object-cover scaling

---

## 📊 Performance Tips

1. **Video Compression:**
   - Use HandBrake or similar to compress videos
   - Target: ~5-10MB per video for web

2. **Preload Strategy:**
   - Current: `preload="metadata"` (loads only metadata)
   - Alternative: `preload="none"` (loads on play - saves bandwidth)
   - Alternative: `preload="auto"` (loads entire video - faster playback)

3. **Lazy Loading:**
   - Videos only load when scrolled into view (via IntersectionObserver)
   - Already implemented in the component!

---

## ✨ Summary

**What's Working Now:**
- ✅ Backend serves videos from port 3001
- ✅ Frontend loads videos from correct backend URL
- ✅ All 6 memory videos display and play
- ✅ No more connection errors
- ✅ Graceful fallback for missing videos
- ✅ Responsive video player with controls

**Files Modified:**
1. `backend/src/index.ts` - Added video static file serving
2. `frontend/src/components/MemoriesSection.tsx` - Fixed video URLs

**Your memories section is now fully functional!** 🎉📹💞

