# Conejo Valley Counseling Clone & Dr. Maya Reynolds Redesign

A dual-mode Next.js + Tailwind CSS application implementing:
1. **1:1 UI Clone**: Pixel-accurate clone of [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home), including authentic `PrintedMoments` handwritten typography, `#86B3B3` seafoam accent, 3-column asymmetric editorial hero, and rounded-full oval button styling.
2. **Creative Redesign**: Re-skinned for **Dr. Maya Reynolds, PsyD** (Santa Monica, CA) using approved coastal clay palette (`#1A352F`, `#BA6A4B`, `#FBF9F5`), single-source-of-truth copy from her profile, and Santa Monica lifestyle imagery.
3. **Custom "Our Office" Section**: Dedicated section featuring her real office photos and practice details.
4. **Live Mode Toggle**: Toggle between Clone (📋) and Redesign (✨) at the top of the viewport.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

---

## Architecture

- **Framework**: Next.js 16 (App Router + Turbopack)
- **Styling**: Tailwind CSS with CSS Custom Properties for theme tokens
- **Typography**: 
  - Display: `Cormorant Garamond` / `Cormorant Infant`
  - Body: `Mulish`
  - Accents: `PrintedMoments` (exact script font from original site)
- **State**: Lightweight `ThemeContext` providing instantaneous theme switching without page reload.

---

## Key Features & Polish

- **Original Accent & Script**: Downloaded and embedded the exact `PrintedMoments` font and sampled `#86B3B3` blue accent for heading emphasis words (`thrive`, `help`, `expertise`, `&`, `specialties`, `you`).
- **Button Geometry**: Oval/pill outline (`rounded-full`) in header matching the original `CONTACT` pill button and editorial underlined CTA in the hero.
- **Contrast & Accessibility**: 12.5:1+ contrast on all text against warm linen (`#F6F4EE`) and alabaster (`#FBF9F5`) backgrounds.
- **Context-Aware Footer**: Switches location, team members, contact links, and serving communities cleanly between Newbury Park (clone) and Santa Monica (redesign).
