# 💞 Tannu Birthday Surprise Website

A beautiful full-stack TypeScript birthday surprise website with a soft pink portfolio-style design.

## 🎨 Features

### Frontend
- ✨ Beautiful soft pink gradient design with card-based layout
- 💝 Interactive countdown overlay on first visit
- 🎊 Confetti animation for secret code unlock
- 💌 Hourly personalized messages that change every hour
- 📸 Auto-playing photo gallery/slideshow (20 photos)
- 🧸 Floating emoji animations in background
- 💕 Multiple sections: Hero, About, Memories, Letter, Promise
- 🔐 Secret code unlock feature (code: `10-12-2020`)
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Smooth scrolling navigation

### Backend
- 🚀 Express.js REST API
- 📡 Three main endpoints:
  - `/api/hourly-messages` - 24 romantic messages (one for each hour)
  - `/api/gallery` - Gallery photos with captions
  - `/api/config` - Site configuration
- 🔧 TypeScript for type safety
- 🌐 CORS enabled for frontend communication

## 📂 Project Structure

```
tannu/
├── backend/                 # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── types/          # TypeScript interfaces
│   │   ├── data/           # Hourly messages & gallery data
│   │   ├── routes/         # API routes
│   │   └── index.ts        # Server entry point
│   ├── public/images/      # Image storage
│   └── package.json
├── frontend/                # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom hooks for API calls
│   │   ├── types/          # TypeScript interfaces
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # Entry point
│   └── package.json
└── package.json            # Root workspace config
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm or pnpm

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd tannu
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   npm run install-all
   ```

### Development

**Run both frontend and backend together:**
```bash
npm run dev
```

This will start:
- Backend server at `http://localhost:3001`
- Frontend dev server at `http://localhost:5173`

**Run individually:**
```bash
# Backend only
npm run dev --workspace=backend

# Frontend only
npm run dev --workspace=frontend
```

### Building for Production

```bash
npm run build
```

This will:
1. Build the backend (TypeScript to JavaScript in `backend/dist/`)
2. Build the frontend (optimized static files in `frontend/dist/`)

### Running Production Build

```bash
npm start
```

This runs the backend server which can serve the built frontend.

## 🎨 Customization Guide

### Adding Photos

1. **Portrait Photo:** 
   - Add image to `frontend/public/` or `backend/public/images/`
   - Update `PortraitCard.tsx` to display the image

2. **Gallery Photos (20 photos):**
   - Add photos to `backend/public/images/gallery/`
   - Name them: `photo1.jpg` through `photo20.jpg`
   - Or update URLs in `backend/src/data/gallery.ts`

3. **Hourly Message Images:**
   - Add images to `backend/public/images/`
   - Name them: `msg0.jpg` through `msg23.jpg`

### Adding Video

Replace the placeholder in `UnlockSurprise.tsx`:
```tsx
<video controls className="w-full h-full">
  <source src="/videos/special-message.mp4" type="video/mp4" />
</video>
```

Or embed a YouTube video:
```tsx
<iframe 
  width="100%" 
  height="100%" 
  src="https://www.youtube.com/embed/VIDEO_ID"
  allowFullScreen
/>
```

### Changing Secret Code

Update in `frontend/src/components/UnlockSurprise.tsx`:
```tsx
const SECRET_CODE = '10-12-2020'; // Change this
```

### Customizing Messages

Edit `backend/src/data/hourlyMessages.ts` to change the 24 hourly messages.

### Updating Content

Main content sections are in these components:
- `HeroCard.tsx` - Main greeting
- `AboutCard.tsx` - About section
- `LetterSection.tsx` - Letter content
- `PromiseSection.tsx` - Promise message
- `MemoriesSection.tsx` - Memory timeline

## 🎯 API Endpoints

### GET `/api/hourly-messages`
Returns array of 24 messages (one for each hour)

**Response:**
```json
[
  {
    "hour": 0,
    "text": "Tannu, aadhi raat me bhi tumhari yaad aati hai 💞",
    "img": "/images/msg0.jpg"
  },
  ...
]
```

### GET `/api/gallery`
Returns photo gallery data

**Response:**
```json
[
  {
    "id": "1",
    "url": "/images/gallery/photo1.jpg",
    "caption": "Kota - Last Ride Winter 2023"
  },
  ...
]
```

### GET `/api/config`
Returns site configuration

**Response:**
```json
{
  "relationshipStartDate": "10-12-2020",
  "heroPrimaryText": "Happy Birthday, Tannu 💞",
  "heroSecondaryText": "Artist of my heart...",
  "specialMessage": "Tannu universe me sabse jada pyari hai."
}
```

## 🎨 Color Scheme

The website uses a soft pink palette:
- Primary: `#ec4899` (pink-500)
- Light: `#fce7f3` (pink-100)
- Gradient: `#fbcfe8` (pink-200)
- Dark: `#be185d` (pink-700)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌟 Special Features

### First-Visit Countdown
- Shows a 10-second countdown on first visit
- Stores flag in localStorage
- Can be replayed with button in bottom-right

### Hourly Messages
- Displays different message based on current hour (0-23)
- Updates automatically when hour changes
- Fallback messages if API fails

### Secret Code Unlock
- Code: `10-12-2020` (relationship start date)
- Triggers confetti animation
- Reveals hidden section with:
  - Video message placeholder
  - Photo gallery with auto-play
  - Additional message

### Floating Emojis
- Background animation with: 💞 🧸 🌸 🎀
- Multiple animation speeds for depth effect
- Low opacity to avoid distraction

## 🛠️ Tech Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Confetti

**Backend:**
- Node.js
- Express
- TypeScript
- CORS

## 📝 Notes

- Replace all placeholder images with actual photos
- Update the Spotify playlist link in `Header.tsx`
- The secret code can be changed in `UnlockSurprise.tsx`
- All content is customizable in respective component files

## 💝 Made with Love

This website was created with love for Tannu's birthday. Every detail, from the soft pink colors to the personalized messages, was crafted to make her day special.

---

**Happy Birthday, Tannu! 🎂💞**

