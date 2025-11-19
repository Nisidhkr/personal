# Videos Directory

## Special Birthday Message Video

The unlock surprise section expects a video named: **`special-message.mp4`**

**Location:** `backend/public/videos/special-message.mp4`

**URL:** `http://localhost:3001/videos/special-message.mp4`

---

## How to Add Your Special Message Video

1. **Prepare your video:**
   - Format: MP4 (H.264 codec recommended)
   - Resolution: 720p or 1080p
   - Keep file size reasonable (<50MB)
   
2. **Rename and place the video:**
   ```bash
   # Copy your video to this location:
   backend/public/videos/special-message.mp4
   ```

3. **Test it:**
   - Start backend: `cd backend && npm run dev`
   - Open browser: `http://localhost:3001/videos/special-message.mp4`
   - Video should play directly

4. **View in website:**
   - Unlock the surprise section with password: `10-12-2020`
   - Scroll to "Special Video Message 🎬"
   - Your video will play!

---

## Current Videos Structure

```
backend/public/videos/
├── special-message.mp4          ← Add this for unlock surprise
└── memories/                     ← Memory videos (already configured)
    ├── near-hostel.mp4
    ├── big-bazaar.mp4
    ├── sitting-talking.mp4
    ├── maggi-point.mp4
    ├── paratha-spot.mp4
    └── chandigarh.mp4
```

---

## If You Already Have a Video

If you have a video file like `original-*.mp4` or another name:

**Option 1: Rename it**
```bash
# Windows (PowerShell)
Rename-Item "original-*.mp4" "special-message.mp4"

# Mac/Linux
mv original-*.mp4 special-message.mp4
```

**Option 2: Update the code**
Edit `frontend/src/components/UnlockSurprise.tsx` line 242:
```typescript
// Change from:
src={`${API_BASE_URL}/videos/special-message.mp4`}

// To your filename:
src={`${API_BASE_URL}/videos/your-filename.mp4`}
```

---

## Fallback Behavior

If the video file is missing, the component will show:
- 🎥 Icon
- "Special Birthday Message" text
- "Video loading..." message

This is intentional - no errors will show to the user!

---

## Video Requirements

**Best format for web:**
- Container: MP4
- Video codec: H.264 (most compatible)
- Audio codec: AAC
- Bitrate: 2-5 Mbps (balanced quality/size)

**Compress large videos:**
- Use HandBrake, FFmpeg, or online tools
- Target: 5-20MB for smooth loading
- Resolution: 1280x720 (720p) is usually enough

---

## Testing Checklist

- [ ] Video file exists: `backend/public/videos/special-message.mp4`
- [ ] Backend running on port 3001
- [ ] Direct URL works: `http://localhost:3001/videos/special-message.mp4`
- [ ] Video plays in unlock surprise section
- [ ] Video controls work (play, pause, volume, fullscreen)

