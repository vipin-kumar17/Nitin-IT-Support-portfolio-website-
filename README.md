# Nitin Kumar — CCTV & Network Solutions

Luxury 3D portfolio website built with **Next.js 14, React, Three.js (react-three-fiber), GSAP + ScrollTrigger, Framer Motion, Lenis smooth-scroll**, and Tailwind CSS.

## Run it locally

You need **Node.js 18.17+** installed. Then:

```bash
cd nitin-security
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

To build for production:

```bash
npm run build
npm run start
```

## Pages

| Route | Page |
|---|---|
| `/` | Home — full-screen 3D hero, pillars, stats, CTA |
| `/services` | All 6 services + process timeline |
| `/portfolio` | Project showcase grid |
| `/about` | Bio, credentials, values |
| `/contact` | Contact form + details |

## ⚠️ Things you MUST update before going live

1. **Phone number & email** — currently placeholders (`+91 00000 00000`, `contact@nitinkumar.in`). Update in:
   - `src/components/Footer.tsx`
   - `src/app/contact/page.tsx`
   - `src/components/ContactForm.tsx`

2. **Nitin's real photo** — replace the placeholder icon block in `src/app/about/page.tsx` with an actual `<Image>` (put the photo in `/public` and use `next/image`).

3. **Real project photos** — `/portfolio` currently uses stylized placeholder graphics instead of real site photos. Swap `ProjectVisual.tsx` for real images once you have them.

4. **Contact form backend** — the form currently opens the visitor's email app with a pre-filled message (`mailto:`). To receive submissions directly, connect it to a service like [Formspree](https://formspree.io), [Resend](https://resend.com), or a custom API route (`src/app/api/contact/route.ts`).

5. **Domain & deployment** — easiest option is [Vercel](https://vercel.com) (made by the Next.js team, free tier available): push this folder to GitHub, import it in Vercel, done.

## Design system

- **Colors**: near-black base (`#05070A`), electric cyan accent (`#22D3EE`), signal green for status (`#34D399`)
- **Fonts**: Space Grotesk (headings), Inter (body), JetBrains Mono (labels/data)
- **Signature element**: rotating wireframe "lens" in the hero + an ambient connected-node network that follows the cursor across the whole site — ties together the CCTV (lens) and networking (nodes) sides of the business.

## Project structure

```
src/
  app/
    layout.tsx          Root layout, fonts, navbar/footer
    page.tsx             Home
    services/page.tsx
    portfolio/page.tsx
    about/page.tsx
    contact/page.tsx
    globals.css
  components/
    Navbar.tsx
    Footer.tsx
    HeroScene.tsx         3D lens (react-three-fiber)
    NetworkField.tsx       Ambient 3D node network (site-wide background)
    SmoothScroll.tsx       Lenis smooth scroll setup
    Reveal.tsx              GSAP ScrollTrigger fade-up wrapper
    StatCounter.tsx         Animated number counter
    ContactForm.tsx
    ProjectVisual.tsx
```
