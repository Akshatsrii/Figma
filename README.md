# Simplifying Compliance for Research Analysts

A pixel-accurate, fully responsive static website built from the official Figma design for **Infotech Wizard**. Written in plain HTML5, CSS3, and vanilla JavaScript, with no build step and no dependencies.

**Live demo:** [simplifying-compliance.vercel.app](https://simplifying-compliance.vercel.app/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design Specifications](#design-specifications)
- [Responsive Behavior](#responsive-behavior)
- [Verification](#verification)
- [Deployment](#deployment)

---

## Overview

This project is a frontend assessment: convert the Figma design into a production-ready static site that matches the spec at every target viewport (1440px down to 375px). The production-ready output lives in `dist/`.

## Features

- Pixel-accurate layout matched to the Figma spec (typography, spacing, colors)
- Fully responsive across desktop, tablet, and mobile
- Mobile slide-in navigation drawer with menu icons, chevron indicators, and a bottom CTA
- Tablet header that keeps the "Contact Us" button next to the hamburger trigger
- Card hover states with border and color transitions
- Semantic HTML5 markup
- Centralized design tokens via CSS custom properties
- Zero dependencies, so it deploys to any static host

## Tech Stack

| Layer | Choice |
| :--- | :--- |
| Markup | HTML5 (semantic) |
| Styling | CSS3 with custom properties, Flexbox / Grid, media queries |
| Behavior | Vanilla JavaScript (mobile drawer and navigation) |
| Fonts | Roboto, Inter, Figtree |

## Getting Started

No installation is needed. Clone the repo and open the site locally:

```bash
git clone <your-repo-url>
cd <your-repo-folder>

# Option 1: open directly
open index.html          # macOS (use `start` on Windows, `xdg-open` on Linux)

# Option 2: serve locally (recommended)
npx serve .
```

To preview the production build instead, serve the `dist/` folder:

```bash
npx serve dist
```

## Project Structure

```
├── dist/                    # Production build (deploy this folder)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/              # Optimized icons, illustrations, logos
├── assets/                  # Source assets
├── index.html               # Source HTML
├── style.css                # Source CSS
├── script.js                # Source JS
├── screen_1400.png          # Verification screenshots (see below)
├── screen_1280.png
├── screen_768.png
├── screen_375.png
├── screen_drawer_375.png
└── README.md
```

## Design Specifications

### Typography

| Element | Font | Weight | Desktop | Tablet (768px) | Mobile (375px) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Hero H1 | Roboto | Bold (700) | 64px / 85px | 54px / 75px | 38px / 48px |
| Section H2 | Roboto | SemiBold (600) | 48px / 70px | 46px / 60px | 34px / 48px |
| Card Title | Roboto | SemiBold (600) | 24px / 32px | 22px / 28px | 20px / 26px |
| Body Lead | Roboto | Regular (400) | 18px / 32px | 18px / 30px | 16px / 26px |
| Card Body | Inter | Medium (500) | 18px / 32px | 16px / 28px | 15px / 24px |
| Nav Links | Figtree | Medium (500) | 16px | n/a | 16px (drawer) |

*Sizes are shown as font-size / line-height.*

### Color Palette

| Token | Hex | Usage |
| :--- | :--- | :--- |
| Primary Blue | `#4356D6` | Buttons, accents |
| Primary Hover | `#051AA3` | Hover states, active card border |
| Card Background | `#FAFBFF` | Cards |
| Card Border | `#E2E7FF` | Cards (default) |
| Heading Text | `#000000` | Headings |
| Body Text | `#282828` | Primary body copy |
| Muted Text | `#555555` | Secondary copy |
| Header Divider | `#C5D7D4` | Header bottom line |

## Responsive Behavior

| Viewport | Layout |
| :--- | :--- |
| **1400-1440px** | Two-column layout inside a fixed 1240px max-width container |
| **1280px** | Fluid proportions with scaled container margins |
| **768px (tablet)** | Hero and Section 2 stack vertically at full width. Header keeps the "Contact Us" CTA beside a 34px hamburger |
| **375-480px (mobile)** | Compact branding, 24px hamburger, slide-in drawer with icons (Home, About Us, Our Services, Pricing, FAQ, Contact), chevrons, and a bottom CTA |

## Verification

Each breakpoint was compared against the Figma design using headless-browser screenshots captured at exact viewport widths.

| Viewport | Screenshot | Status |
| :--- | :--- | :--- |
| Desktop 1400px | `screen_1400.png` | ✅ |
| Desktop 1280px | `screen_1280.png` | ✅ |
| Tablet 768px | `screen_768.png` | ✅ |
| Mobile 375px | `screen_375.png` | ✅ |
| Mobile drawer 375px | `screen_drawer_375.png` | ✅ |

## Deployment

The `dist/` folder is a self-contained static site.

**Netlify Drop (no setup):** open [app.netlify.com/drop](https://app.netlify.com/drop) and drag the `dist/` folder into the drop zone.

**Netlify CLI:**

```bash
npx netlify deploy --prod --dir=dist
```

**Vercel CLI:**

```bash
npx vercel dist --prod
```
