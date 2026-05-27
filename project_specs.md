# Lezzet-i Mangal — Project Specification

## What the app does
Production-quality restaurant website for **Lezzet-i Mangal**, an authentic Turkish charcoal grill restaurant at Bahnhofstraße 22, 35037 Marburg, Germany. The site is fully in German and showcases the restaurant's food, story, menu, and allows table reservations.

## Who uses it
Restaurant guests and prospective customers who want to learn about the restaurant, browse the menu, and make a reservation.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS custom properties (design system tokens) + React inline styles
- **Fonts**: Bodoni Moda (display serif) + Manrope (body sans) via Google Fonts
- **Images**: Unsplash photography (Holzkohlegrill, Frühstück, Atmosphäre)
- **Hosting**: Vercel (recommended)

## Pages
- `/` — Single-page with all sections

## Sections (top → bottom)
1. **Nav** — Sticky, transparent-to-dark on scroll, mobile-responsive hamburger
2. **Hero** — Full-viewport fire/grill photo, parallax scroll, headline + CTA
3. **Social Proof Strip** — Google 4.6★ · 187 reviews + 4 pulled quotes
4. **Story** — Restaurant history (Mangal tradition) — cream background
5. **Image Strip** — Horizontal photo grid (tea, interior, embers, grill, mezze, bread)
6. **Signature Dishes** — 4-card grid (Kuzu Şiş, Adana Kebap, Tavuk Şiş, Künefe)
7. **Breakfast Section** — Serpme Kahvaltı feature + 3 supporting items
8. **On The Go** — 3 takeaway dishes (Dürüm, Döner Sandwich, Pide)
9. **Value & Hospitality** — 3 trust pillars (price, free tea, location)
10. **Reviews Wall** — CSS-columns masonry of 7 verified Google reviews
11. **Visit Us** — Live Google Map embed + reservation form
12. **Table Awaits** — Closing editorial CTA with circular hero photo
13. **Footer** — Wordmark, address, menu links, social links, copyright
14. **Floating Call Button** — Fixed brass FAB, always visible

## Design System
- Background: `#0E0B0A` (charcoal-900)
- Accent: `#C9A961` (brass-500)
- Flame: `#E25822` (ember-500)
- Text: `#F5EDE0` (cream-100)
- Fonts: Bodoni Moda (serif display), Manrope (sans body)

## Done criteria
- All 14 sections render matching the Claude Design prototype
- German throughout
- All photos load from Unsplash
- Nav scrolls to sections
- Reservation form submits with success confirmation
- Dev server starts without errors
