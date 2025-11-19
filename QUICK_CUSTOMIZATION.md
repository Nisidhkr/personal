# ⚡ Quick Customization Reference

## 5-Minute Setup Guide

### 1️⃣ Customize 100 Reasons
**File:** `frontend/src/components/HundredReasonsSection.tsx`  
**Line:** ~8-108

```typescript
const LOVE_REASONS = [
  "Your smile makes every bad day better.",  // ← Edit these
  "You always listen to me, even when I ramble.",
  // ... add your own reasons
];
```

---

### 2️⃣ Customize Bucket List
**File:** `frontend/src/components/BucketListSection.tsx`  
**Line:** ~8-85

```typescript
const BUCKET_LIST_ITEMS = [
  {
    id: "sunrise-beach",        // ← Keep unique
    icon: "🌅",                  // ← Choose emoji
    title: "Watch the sunrise together",  // ← Edit
    description: "Just us, the waves...",  // ← Edit
  },
  // ... add your own items
];
```

---

### 3️⃣ Change Secret Code
**File:** `frontend/src/components/UnlockSurprise.tsx`  
**Line:** ~9-10

```typescript
const SECRET_CODE = '10-12-2020';  // ← Change this
const SECRET_HINT = "The date our forever started. (DD-MM-YYYY)";  // ← And this
```

---

### 4️⃣ Add Footer Image
**Location:** `frontend/src/assets/couple-footer.png`

Place your couple illustration image here with exactly this filename.

If you already have the image with a different name, update the import in:
**File:** `frontend/src/components/Footer.tsx`  
**Line:** 1

```typescript
import coupleFooter from "../assets/your-image-name.png";
```

---

## 🎯 Where to Find Everything

| Feature | File | What to Edit |
|---------|------|--------------|
| 100 Reasons | `HundredReasonsSection.tsx` | `LOVE_REASONS` array |
| Bucket List | `BucketListSection.tsx` | `BUCKET_LIST_ITEMS` array |
| Secret Code | `UnlockSurprise.tsx` | `SECRET_CODE` and `SECRET_HINT` |
| Footer Image | `assets/couple-footer.png` | Place image file |
| Surprise Content | `UnlockSurprise.tsx` | Search for "✏️ CUSTOMIZE YOUR SURPRISE" |

---

## 🔍 Finding Edit Points

Search for these markers in any file:
- `✏️ EDIT` - Customization point
- `🔧 BACKEND` - Backend integration code (optional)

---

## 🧪 Test Everything

```bash
cd frontend
npm run dev
```

Then:
1. ✅ Click through 5-10 reasons
2. ✅ Toggle 2-3 bucket list items
3. ✅ Enter wrong code (see error)
4. ✅ Enter correct code (see confetti!)
5. ✅ Refresh page (check if state saved)

---

## 🆘 Quick Fixes

### Reset Everything
```javascript
// In browser console:
localStorage.clear();
```

### Reset Just One Feature
```javascript
// In browser console:
localStorage.removeItem('loveReasonsProgress');
// or
localStorage.removeItem('bucketListStatus');
// or
localStorage.removeItem('secretSurpriseUnlocked');
```

---

## 📱 Mobile Testing

Open in phone browser or:
```
Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
```

---

## ✅ Pre-Launch Checklist

Before showing to Tannu:

- [ ] All 100 reasons personalized
- [ ] Bucket list items are your real plans
- [ ] Secret code is your actual date
- [ ] Footer image added
- [ ] Tested all interactions
- [ ] Checked on mobile
- [ ] Cleared localStorage (fresh experience)

---

## 🚀 Deploy

```bash
npm run build
# Upload 'dist' folder to your host
```

---

That's it! You're ready to go! 🎉

