# दीमक पत्रिका — Website Project

A responsive, multi-page Hindi literary magazine website.

## Folder structure

```text
deemak-magazine/
├── index.html
├── pages/
│   ├── hamari-aur-se.html
│   ├── kahani-pratiyogita.html
│   ├── sahitya.html
│   ├── vijeta-kahani.html
│   └── pratikriya.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
│       ├── logo.png
│       └── *.svg
└── README.md
```

## Run locally

Open `index.html` in a browser. For a local development server, run from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Editing guide

- **Colours, fonts, spacing, responsive breakpoints:** `assets/css/style.css`
- **Shared navigation and footer:** `assets/js/main.js`
- **Homepage content:** `index.html`
- **Individual menu pages:** `pages/`
- **Logo and illustrations:** `assets/images/`

The shared menu links are defined once in `assets/js/main.js` in the `SITE_LINKS` array. If a page is added or renamed, update that array and the relevant links in page content.

## Before publishing

1. Replace editorial placeholders with approved articles and author details.
2. Verify competition statistics, judging details and results.
3. Confirm publication permissions for the eminent writer's selected works and images.
4. Replace `editor@example.com` in `pages/pratikriya.html` with the official editorial email.
5. Connect the feedback form to a real form endpoint or backend.
6. Test all pages on target devices and browsers.

## Design identity

- Warm ivory paper background
- Deep charcoal text
- Earthy maroon accent
- Noto Serif Devanagari headlines
- Mukta interface/body typography
- Responsive layouts for desktop, laptop, tablet and mobile
