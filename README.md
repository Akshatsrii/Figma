# Simplifying Compliance for Research Analysts — Frontend Assessment

A pixel-perfect, fully responsive static web implementation converted from the official Figma design specification for **Infotech Wizard**.

---

## 🚀 Live Demo & Deployment
- **Deployment Platform:** Netlify / Vercel
- **Production Directory:** `dist/` (contains clean static assets: `index.html`, `style.css`, `script.js`, `assets/`)

### Quick Deployment via Netlify Drop (Instant, Zero Setup)
1. Open [Netlify Drop](https://app.netlify.com/drop) in your web browser.
2. Drag and drop the `dist/` folder into the drop zone.
3. Your live URL will be active immediately (e.g., `https://simplifying-compliance.netlify.app`).

### Alternative: Deploy via Vercel CLI
```bash
npx vercel dist --prod
```

### Alternative: Deploy via Netlify CLI
```bash
npx netlify deploy --prod --dir=dist
```

---

## 📐 Design Fidelity & Specifications (Extracted from Figma)

### 1. Typography
| Element | Font Family | Weight | Desktop Size | Tablet (768px) | Mobile (375px) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | Roboto | Bold (700) | 64px / 85px LH | 54px / 75px LH | 38px / 48px LH |
| **Section H2** | Roboto | SemiBold (600) | 48px / 70px LH | 46px / 60px LH | 34px / 48px LH |
| **Card Title** | Roboto | SemiBold (600) | 24px / 32px LH | 22px / 28px LH | 20px / 26px LH |
| **Body Lead** | Roboto | Regular (400) | 18px / 32px LH | 18px / 30px LH | 16px / 26px LH |
| **Card Body** | Inter | Medium (500) | 18px / 32px LH | 16px / 28px LH | 15px / 24px LH |
| **Nav Links** | Figtree | Medium (500) | 16px | - | Drawer: 16px |

### 2. Color Palette
- **Primary Blue:** `#4356D6` (`rgb(67, 86, 214)`)
- **Primary Hover Dark Blue:** `#051AA3` (`rgb(5, 26, 163)`)
- **Card Background:** `#FAFBFF`
- **Card Border:** `#E2E7FF` (Hover: `#051AA3`)
- **Text Headings:** `#000000`
- **Text Body / Muted:** `#282828` / `#555555`
- **Header Divider Line:** `#C5D7D4`

### 3. Responsive Breakpoints
- **Desktop (1400px - 1440px):** Standard full 2-column layout with fixed max-width container (1240px).
- **Desktop Small (1280px):** Fluid proportions, scaled container margins.
- **Tablet (768px):** Header retains "Contact Us" CTA button alongside a 34px hamburger trigger. Hero and Section 2 stack vertically with full width.
- **Mobile (375px - 480px):** Compact branding, 24px hamburger trigger, full-featured slide-in drawer with menu icons (`Home.png`, `AboutUs.png`, `Our Services.png`, `Pricing.png`, `FAQ.png`, `Contact.png`), chevron indicators, and bottom CTA button.

---

## 📂 Project Structure
```
├── dist/                          # Production distribution ready for deployment
│   ├── index.html                 # Semantic HTML5 markup
│   ├── style.css                  # Responsive CSS3 with custom variables
│   ├── script.js                  # Mobile drawer & navigation interactions
│   └── assets/                    # Optimized icons, illustrations, and logos
├── assets/                        # Source assets
├── index.html                     # Source HTML
├── style.css                      # Source CSS
├── script.js                      # Source JS
├── screen_1400.png                # Verification screenshot (Desktop 1400px)
├── screen_1280.png                # Verification screenshot (Desktop 1280px)
├── screen_768.png                 # Verification screenshot (Tablet 768px)
├── screen_375.png                 # Verification screenshot (Mobile 375px)
├── screen_drawer_375.png          # Verification screenshot (Mobile Drawer 375px)
└── README.md                      # Documentation & submission guide
```

---

## 🛠️ Verification & Testing
All breakpoints have been visually cross-checked against the raw Figma binary data and rendered using headless browser capture at exact viewport resolutions:
- [x] Desktop 1400px (`screen_1400.png`)
- [x] Desktop 1280px (`screen_1280.png`)
- [x] Tablet 768px (`screen_768.png`)
- [x] Mobile 375px (`screen_375.png`)
- [x] Mobile Navigation Drawer (`screen_drawer_375.png`)
