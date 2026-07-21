# Actalink — Landing Page PRD

## Original Problem
Static marketing landing page for Actalink ("The Payment Interface Layer for Programmable Money").
Exactly 4 sections: Hero, Manifesto, Products, Footer. Hero animates the 4-product flow
(Store→Bexo, Deposit→OpenDeposit, Accept→ActaPay, Spend→Straight).

## User Choices
- Light/airy look; static site (no backend/DB/API); distinctive bold type.
- Product animation cards: modern & light, monochrome (black/white/grey) + blue — NOT green.
- Awwwards-quality: kinetic hero, masked line reveals, numbered manifesto chapters,
  editorial marquee, framer-motion + Lenis smooth scroll.

## Architecture
- Frontend only: React + Tailwind + framer-motion + Lenis. No backend used.
- Fonts: Cabinet Grotesk (display) + Inter (body) + Space Mono (labels).
- Files: App.js (Lenis, exposes window.__lenis), pages/Landing.jsx,
  components/landing/{Navbar,Hero,ProductFlow,Manifesto,Products,Marquee,Footer,Reveal}.jsx

## Implemented (Dec 2025)
- Hero: line-by-line masked reveal, soft pastel mesh bg (beige/lavender/blue), stats row,
  animated ProductFlow (4 frosted light cards + drawing SVG connectors, monochrome+blue).
- Manifesto: 3 numbered chapters in a Swiss grid.
- Products: 4 charcoal (#0E0F12) cards with blue accents + hover spotlight.
- Marquee: editorial slow ribbon. Footer: oversized "Let's talk" CTA + link columns.
- Tested via testing_agent_v3: 100% frontend, all 27 data-testids present, no errors.

## Backlog / Next
- P1: Wire "Get in touch" to a real contact form + submission storage (needs backend).
- P2: Per-product detail pages/routes; case studies; blog.
- P2: Add OG/meta tags + favicon for social sharing.
