# Among The Branches — Website Template

A multi-page static HTML website template for a specialty cut flower farm.
Inspired by the aesthetic of June Farm (junefarmvt.com).

---

## File Structure

```
bloom-hollow-farm/
├── index.html          ← Home page
├── about.html          ← Our Story / About page
├── wholesale.html      ← Wholesale for florists & designers
├── csa.html            ← Flower CSA subscription page
├── weddings.html       ← Weddings & Events page
├── shop.html           ← Online shop / product listings
├── css/
│   ├── theme.css       ← ★ ALL colors, fonts, and design tokens (edit here first)
│   └── styles.css      ← Component styles (references theme.css variables)
├── js/
│   └── nav.js          ← Active nav link highlighting
└── README.md           ← This file
```

---

## How to Customize

### 1. Colors & Fonts — edit `css/theme.css`

All visual tokens are in one place. Change a value once and it updates everywhere.

| Variable                | What it controls                          |
|-------------------------|-------------------------------------------|
| `--color-primary`       | Clay/terracotta — CTAs, prices, links     |
| `--color-secondary`     | Sage green — ticker bar                   |
| `--color-bg`            | Main page background                      |
| `--color-bg-subtle`     | Section alternates / card backgrounds     |
| `--color-bg-dark`       | Footer, dark sections                     |
| `--font-display`        | Headline / logo font                      |
| `--font-body`           | Body / nav / button font                  |
| `--hero-home` etc.      | Hero background image URLs                |

### 2. Farm Name & Contact

Search-and-replace `Among The Branches` and `bloomhollowfarm.com` across all HTML files.

### 3. Hero Images

In `css/theme.css`, update the `--hero-*` variables with your own image URLs.
For best results: landscape photos, at least 1600px wide.

### 4. Photos in Content

Replace the `src="https://images.unsplash.com/..."` URLs in each HTML file
with your own hosted images. Recommended sizes:
- Offering cards: 600×750px (4:5 ratio)
- Product cards: 600×750px (4:5 ratio)
- About story photos: 700×auto
- Instagram grid: 400×400px (square)

### 5. Pricing & Copy

Edit the text content directly in each HTML file. All content is plain HTML —
no build tools or frameworks required.

---

## Fonts Used

- **Cormorant Garamond** — Display / headlines (loaded from Google Fonts)
- **Jost** — Body / UI (loaded from Google Fonts)

Both are free. Loaded via `<link>` tag in each HTML `<head>`.

---

## Deployment

This is a plain static site — no server-side code, no build step.

**Options:**
- **Drag & drop:** Upload the whole folder to Netlify Drop (netlify.com/drop)
- **GitHub Pages:** Push to a GitHub repo and enable Pages in Settings
- **Any web host:** Upload via FTP/SFTP to your hosting provider's public folder

---

## Notes

- Navigation active-state highlighting is handled by `js/nav.js` automatically.
- The site is responsive down to ~375px mobile width.
- All `href="mailto:..."` links can be replaced with a form service like
  Formspree, Netlify Forms, or a custom contact page.
