# 🎬 How to Add Your Special Birthday Video

## Current Issue

The "Special Video Message" section is showing the fallback placeholder because the video file is missing.

**Expected file:** `backend/public/videos/special-message.mp4`  
**Current status:** File doesn't exist ❌

---

## ✅ Quick Fix - 3 Options

### Option 1: Rename Your Existing Video (Recommended)

I saw you have a video file: `original-020e5afec3b51c1ef21a46463054bcbe.mp4`

**Rename it to `special-message.mp4`:**

**Windows (File Explorer):**
1. Navigate to: `E:\tannu\backend\public\videos\`
2. Find the video file (probably `original-*.mp4`)
3. Right-click → Rename
4. Change to: `special-message.mp4`
5. Refresh your browser!

**Windows (PowerShell):**
```powershell
cd E:\tannu\backend\public\videos
Rename-Item "original-*.mp4" "special-message.mp4"
```

---

### Option 2: Copy Your Video File

If you have your special birthday video somewhere else:

1. **Copy your video file to:**
   ```
   E:\tannu\backend\public\videos\special-message.mp4
   ```

2. **Make sure:**
   - File name is exactly: `special-message.mp4` (lowercase, with dash)
   - File is in MP4 format
   - Located directly in `videos/` folder (not in `videos/memories/`)

3. **Refresh browser** - video should play!

---

### Option 3: Use a Different Filename (Update Code)

If you want to keep your current filename, update the code:

**Edit:** `frontend/src/components/UnlockSurprise.tsx`

Find line 242 (around the video source):
```typescript
<source 
  src={`${API_BASE_URL}/videos/special-message.mp4`} 
  type="video/mp4" 
/>
```

Change to your actual filename:
```typescript
<source 
  src={`${API_BASE_URL}/videos/original-020e5afec3b51c1ef21a46463054bcbe.mp4`} 
  type="video/mp4" 
/>
```

Save and refresh browser!

---

## 🧪 Test Your Video

1. **Direct URL test:**
   - Open in browser: `http://localhost:3001/videos/special-message.mp4`
   - If backend is running, video should play directly
   - If you get 404 → file doesn't exist
   - If you get connection refused → backend not running

2. **Website test:**
   - Unlock surprise section with password: `10-12-2020`
   - Scroll to "Special Video Message 🎬"
   - Video should appear and play with controls

---

## 📋 Checklist

- [ ] Backend is running: `cd backend && npm run dev`
- [ ] Frontend is running: `cd frontend && npm run dev`
- [ ] Video file exists: `E:\tannu\backend\public\videos\special-message.mp4`
- [ ] Video file is MP4 format
- [ ] Direct URL works: `http://localhost:3001/videos/special-message.mp4`
- [ ] Video plays in unlock surprise section
- [ ] Video controls work (play, pause, volume, fullscreen)

---

## 🎥 Video Requirements

**Best format:**
- Format: MP4 (H.264 codec)
- Resolution: 720p or 1080p
- Size: Keep under 50MB for smooth loading

**If your video is too large:**
- Use online compressor: https://www.freeconvert.com/video-compressor
- Or HandBrake (free software)
- Target: 5-20MB

---

## 🐛 Still Not Working?

### Check backend console:
```bash
# In backend terminal, you should see:
🚀 Backend server running on http://localhost:3001
📡 API endpoints available at http://localhost:3001/api
```

### Check file location:
```bash
# PowerShell - list video files
cd E:\tannu\backend\public\videos
ls
```

You should see:
```
special-message.mp4    ← This is what we need!
memories/              ← Folder for memory videos
```

### Check browser console (F12):
- Should have NO errors about video loading
- If you see 404 error → file missing or wrong name
- If you see CORS error → already fixed, shouldn't happen

---

## 💡 Pro Tip

Once you add the video file correctly:
- **No code changes needed**
- **Just refresh browser**
- Video will appear automatically!

The fallback "Video loading..." message is intentional - it shows gracefully when the video is missing, so users don't see ugly errors. Once you add the video file, it will play perfectly! 🎉

