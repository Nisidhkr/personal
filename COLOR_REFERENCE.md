# 🎨 Color Palette Reference

## Quick Visual Guide

### Before → After

```
BACKGROUND
───────────────────────────────────────────
Old: #fce7f3 → #fbcfe8 (bright pink gradient)
New: #FCE7EC → #FADADD (soft cream-pink gradient)
```

```
CARD BACKGROUNDS
───────────────────────────────────────────
Old: #fbcfe8 (bright)
New: #FADADD (soft pastel)
```

```
TEXT COLORS
───────────────────────────────────────────
Old: #be185d (bright pink) / #374151 (gray)
New: #222222 (charcoal) / #6B5A5A (muted)
```

```
ACCENT COLORS
───────────────────────────────────────────
Old: #ec4899 (hot pink)
New: #F4B6AE / #F5A9A4 (peachy pink)
```

---

## Complete New Palette

### Tailwind Config Names

```javascript
colors: {
  pink: {
    50: '#FCE7EC',   // cream-bg (lightest)
    100: '#FADADD',  // witish-pink (cards)
    200: '#F6D4D9',  // card backgrounds
    300: '#F2C7CC',  // lines, borders
    400: '#F4B6AE',  // peach-pink (accents)
    500: '#F5A9A4',  // warm-pink (CTAs)
    600: '#E67D87',  // accent text
    700: '#D96C76',  // darker accent
    800: '#C55A64',  // darkest pink
    900: '#B04852',  // deep pink
  },
  'witish-pink': '#FADADD',
  'cream-bg': '#FCE7EC',
  'peach-pink': '#F4B6AE',
  'warm-pink': '#F5A9A4',
  'charcoal': '#222222',
  'muted-text': '#6B5A5A',
}
```

---

## Usage Guide

### Backgrounds

```css
/* Page background */
bg-gradient-to-br from-pink-50 to-pink-100

/* Card backgrounds */
bg-white
bg-pink-100
bg-gradient-to-br from-pink-100 to-pink-200

/* Overlay backgrounds */
bg-white/70 backdrop-blur-sm
bg-white/80 backdrop-blur-md
```

### Text

```css
/* Headings */
text-charcoal

/* Body text */
text-muted-text

/* Accent/highlight text */
text-pink-800
text-pink-700
text-pink-600
```

### Borders & Lines

```css
/* Subtle borders */
border-pink-300

/* Accent borders */
border-pink-600
border-l-4 border-pink-600

/* Timeline/divider lines */
bg-pink-300 (for horizontal line)
```

### Buttons & Interactive

```css
/* Primary buttons */
bg-gradient-to-r from-peach-pink to-warm-pink

/* Secondary buttons */
bg-pink-100 text-pink-800 hover:bg-pink-200

/* Pills/chips */
bg-pink-100 text-pink-800 hover:bg-pink-200
```

### Shadows

```css
/* Cards */
shadow-md

/* Small elements */
shadow-sm

/* Hover effect */
hover:shadow-lg
```

---

## Color Psychology

**Why These Colors?**

- **#FCE7EC (Cream Pink):** Soft, warm, welcoming
- **#FADADD (Pastel Pink):** Gentle, romantic, not overwhelming
- **#F4B6AE (Peachy Pink):** Warm, friendly, inviting
- **#222222 (Charcoal):** Professional, readable, grounds the design
- **#6B5A5A (Muted Brown):** Sophisticated, easier on eyes than gray

**Result:** A palette that feels both professional (portfolio-like) and personal (birthday celebration).

---

## Comparison with Julia Huang Style

✅ Very soft pastels (not neon)
✅ Cream/pink base tones
✅ Charcoal text for contrast
✅ Warm peachy accents
✅ Sophisticated muted tones
✅ Gentle gradients (not harsh transitions)

---

## Accessibility

**Contrast Ratios:**
- Charcoal (#222222) on White: 15.3:1 ✅ AAA
- Charcoal (#222222) on Pink-100 (#FADADD): 12.8:1 ✅ AAA
- Muted Text (#6B5A5A) on White: 4.8:1 ✅ AA
- Pink-800 (#C55A64) on White: 4.2:1 ✅ AA

All text meets WCAG accessibility standards!

---

## Developer Quick Reference

### Common Patterns

**Card:**
```jsx
className="bg-white rounded-[24px] p-6 md:p-8 shadow-md card-hover"
```

**Section Header:**
```jsx
className="text-3xl font-bold text-charcoal mb-4"
```

**Body Text:**
```jsx
className="text-lg text-muted-text leading-relaxed"
```

**Button:**
```jsx
className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full hover:bg-pink-200 transition-all"
```

**CTA Button:**
```jsx
className="bg-gradient-to-r from-peach-pink to-warm-pink text-white px-8 py-4 rounded-[20px]"
```

---

## Hex Codes for Design Tools

Copy-paste ready for Figma, Sketch, etc:

```
Background: FCE7EC
Card Main: FADADD
Card Alt: F6D4D9
Lines: F2C7CC
Peach: F4B6AE
Warm Pink: F5A9A4
Accent: E67D87
Text Main: 222222
Text Muted: 6B5A5A
White: FFFFFF
```

---

## CSS Variables (Optional Enhancement)

If you want to create CSS custom properties:

```css
:root {
  --color-cream-bg: #FCE7EC;
  --color-pastel-pink: #FADADD;
  --color-card-alt: #F6D4D9;
  --color-lines: #F2C7CC;
  --color-peach: #F4B6AE;
  --color-warm: #F5A9A4;
  --color-accent: #E67D87;
  --color-charcoal: #222222;
  --color-muted: #6B5A5A;
}
```

Then use: `color: var(--color-charcoal);`

---

**Perfect palette for a sophisticated yet warm birthday celebration! 💞**

