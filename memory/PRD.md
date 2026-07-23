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

## Update (Dec 2025 — Multi-page + Blog + About)
- Added react-router routing: `/` (Landing), `/blogs` (BlogList), `/blogs/:slug` (BlogPost), `/about-us` (AboutUs). Lenis + ScrollToTop in App.js; shared Layout (Navbar + Footer).
- Blog: 5 dummy posts in src/data/blogs.js, blog preview section on landing (below Products), full list + article pages. Theme matches (black/grey/white/indigo). Docs link → external docs.acta.link.
- Navbar: Actalink logo image (transparent black), links Home/Products/Blog + Get in touch.
- Footer: white Actalink logo, tagline updated; columns = Products, Resources (Docs↗ external, About us), Social (X/LinkedIn/YouTube external). Removed old Company column.
- Logos: /public/logos/actalink-black.png (nav), actalink-white.png (footer), bexo.webp + actapay.webp (product cards).
- Verified: testing_agent iteration_2 = 100% (45/45), no console errors, mobile-390 no overflow.
