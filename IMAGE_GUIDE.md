# 📸 Image Setup Guide

## Required Images

This guide shows you exactly where to place all images for the website.

## Image Directory Structure

```
backend/public/images/
├── msg0.jpg through msg23.jpg    (24 hourly message images - optional)
├── kota-ride.jpg                  (Main memory photo)
└── gallery/
    ├── photo1.jpg
    ├── photo2.jpg
    ├── photo3.jpg
    ├── ...
    └── photo20.jpg               (Up to 20 gallery photos)

frontend/public/
├── images/
│   └── tannu-portrait.jpg        (Portrait for main card)
└── videos/
    └── message.mp4               (Optional video message)
```

## Image Specifications

### 1. Portrait Photo (`tannu-portrait.jpg`)
- **Location:** `frontend/public/images/tannu-portrait.jpg`
- **Aspect Ratio:** 3:4 (portrait orientation)
- **Recommended Size:** 600x800px or higher
- **Used In:** Main portrait card on homepage

### 2. Memory Photos (`photo1.jpg` - `photo20.jpg`)
- **Location:** `backend/public/images/gallery/`
- **Aspect Ratio:** Any (will be cropped to 16:9 in slideshow)
- **Recommended Size:** 1920x1080px or higher
- **Captions:** Edit in `backend/src/data/gallery.ts`
- **Used In:** Gallery slideshow after unlock

### 3. Kota Last Ride Photo
- **Location:** `backend/public/images/kota-ride.jpg`
- **Aspect Ratio:** 16:9 (landscape)
- **Recommended Size:** 1920x1080px
- **Used In:** Main memory card in Memories section

### 4. Hourly Message Images (Optional)
- **Location:** `backend/public/images/msg0.jpg` through `msg23.jpg`
- **Count:** 24 images (one for each hour)
- **Aspect Ratio:** 16:9
- **Recommended Size:** 800x450px
- **Used In:** Hourly message card (rotates based on hour)

### 5. Video Message (Optional)
- **Location:** `frontend/public/videos/message.mp4`
- **Format:** MP4 (H.264 codec recommended)
- **Recommended Size:** 1920x1080px
- **Used In:** Surprise unlock section

## Quick Setup Commands

### Create all directories:

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Force -Path backend\public\images\gallery
New-Item -ItemType Directory -Force -Path frontend\public\images
New-Item -ItemType Directory -Force -Path frontend\public\videos
```

**Mac/Linux:**
```bash
mkdir -p backend/public/images/gallery
mkdir -p frontend/public/images
mkdir -p frontend/public/videos
```

## Adding Images After Setup

1. **Copy your photos** to the appropriate directories
2. **Rename them** to match the expected names
3. **Restart the backend server** if it's running (Ctrl+C, then `npm run dev`)
4. **Refresh the browser** to see the images

## Image Optimization Tips

### Before Adding Images:
1. **Resize** images to recommended dimensions
2. **Compress** to reduce file size (use tools like TinyPNG, ImageOptim)
3. **Convert** to JPG format (smaller file size than PNG for photos)
4. **Rename** files to match expected names

### Recommended Tools:
- **Online:** TinyPNG, Squoosh
- **Mac:** ImageOptim, Preview
- **Windows:** Paint, IrfanView
- **Cross-platform:** GIMP, Photoshop

## Default Placeholder Behavior

If images are not added, the website will show:
- 📸 Photo placeholder icons
- Helpful text indicating where to add images
- The website will still function, just without actual photos

## Example: Adding Your First Photo

1. **Choose your favorite photo of Tannu**
2. **Open it in an image editor**
3. **Resize to 600x800px (portrait)**
4. **Save as:** `tannu-portrait.jpg`
5. **Copy to:** `frontend/public/images/tannu-portrait.jpg`
6. **Update PortraitCard.tsx** (see SETUP_GUIDE.md)
7. **Refresh browser!**

## Gallery Photo Captions

Edit captions in `backend/src/data/gallery.ts`:

```typescript
{
  id: '1',
  url: '/images/gallery/photo1.jpg',
  caption: 'Your custom caption here'
}
```

## Checklist

- [ ] Portrait photo added
- [ ] At least 5-10 gallery photos added
- [ ] Kota ride photo added
- [ ] Gallery captions updated
- [ ] (Optional) Hourly message images added
- [ ] (Optional) Video message added
- [ ] All images optimized and compressed
- [ ] Backend server restarted
- [ ] Browser refreshed and tested

---

**Tip:** You don't need all 24 hourly message images or all 20 gallery photos. Even with 5-10 photos, the website will look beautiful! The gallery will loop through whatever photos you provide.

