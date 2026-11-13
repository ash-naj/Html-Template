# Landing Page Template

A clean, zero-dependency landing page template built from scratch with semantic HTML5, vanilla CSS3, and vanilla JavaScript. Designed as a reusable, responsive starting skeleton for static websites and GitHub Pages deployments.

Desktop View :
<div align="center">
  <img src="./images/preview.png" width="700" alt="template Preview" />
</div>

Mobile Phone View :
<div align="center">
  <img src="./images/phone-preview.jpg" width="700" alt="template Phone Preview" />
</div>

🔗 **Live Preview:** [https://ash-naj.github.io/Html-Template/](https://ash-naj.github.io/Html-Template/)

---

## Features

- **Zero Dependencies:** Pure HTML5, CSS3, and Vanilla JavaScript—no build tools, frameworks, or external libraries required.

- **Two-Box Layout Architecture:** Full-width background color bands paired with centered `1000px` max-width content containers.

- **100% Flexbox & Responsive Design:** Adaptive layouts across desktop and mobile viewports (`@media (max-width: 768px)`) covering the navigation bar, split hero section, showcase carousel, quote block, CTA banner, and sticky footer.

- **Interactive Sign-Up Counter:** Vanilla JS event listener that updates remaining seats live on click and automatically locks the CTA button once spots hit zero.

- **Horizontal Showcase Carousel:** Smooth-scrolling card strip (`scroll-behavior: smooth`) supporting both JavaScript-controlled navigation buttons and native touch or trackpad swiping.

- **One-Click Theming:** Global CSS custom properties (`:root`) for instant color scheme swaps.

- **Sticky Footer:** Uses `min-height: 100vh` and `margin-top: auto` so the footer stays pinned to the bottom edge on tall viewports.

---

## Project Structure

```text
├── index.html
├── README.md
├── scripts/
│   └── index-script.js   # Interactive seat counter & carousel controls
├── styles/
│   └── index_style.css   # Layout, theming, and mobile responsive rules
└── images/
    ├── altcard.jpg       # Info section card thumbnails
    ├── logo.png          # Header brand logo
    ├── phone-preview.jpg # Mobile README preview screenshot
    ├── preview.png       # Desktop README preview screenshot
    └── uni.jpg           # Hero showcase image
```
