# Nitin Kumar — Computer Hardware, Networking & CCTV Solutions

A luxury, fully animated 3D portfolio/business website built for Nitin Kumar — a Computer Hardware & Network Engineer offering CCTV, networking, and IT support services in Gorakhpur, Uttar Pradesh.

Built with **Next.js 14, React, Three.js (react-three-fiber), GSAP + ScrollTrigger, Framer Motion, Lenis smooth-scroll**, and Tailwind CSS.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework, routing, API routes |
| React | UI components |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Three.js + @react-three/fiber | 3D hero animation (rotating lens) & ambient network background |
| GSAP + ScrollTrigger | Scroll-based reveal animations, skill bars |
| Framer Motion | Mobile menu animation, hover effects |
| Lenis | Smooth scrolling |
| Resend | Contact form email delivery |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — 3D hero, service pillars, Why Choose Us, stats, testimonials carousel, FAQ |
| `/services` | 5 service categories (Computer, Networking, CCTV, AMC, Data Recovery) + process timeline |
| `/portfolio` | Project showcase grid with real photos |
| `/about` | Bio, photo, skills, certifications, values |
| `/contact` | Contact form, WhatsApp button, Google Maps embed |

---

## Key Features

- **3D animated hero** — rotating wireframe lens/eye built with Three.js, reacts to mouse movement
- **Ambient network background** — connected particle nodes animate site-wide behind all content
- **3D tilt photo cards** — Nitin's photos tilt in 3D on mouse hover (`TiltPhoto.tsx`, `AboutPhotoTilt.tsx`)
- **WhatsApp integration** — floating button (all pages) + inline "Chat Now" buttons, opens direct chat via `wa.me` link
- **Contact form → Email** — form submissions are sent directly to Nitin's Gmail via the Resend API (see `src/app/api/contact/route.ts`)
- **Testimonial carousel** — auto-sliding, 6 testimonials, responsive (1/2/3 per view)
- **FAQ accordion**
- **Animated skill cards, certifications, stats counters**
- **Fully responsive** — mobile, tablet, desktop

---

## Environment Variables

This project requires one secret key to send contact form emails.

Create a file named **`.env.local`** in the project root (same level as `package.json`) with:



RESEND_API_KEY=your_resend_api_key_here

**Important:** `.env.local` is already excluded via `.gitignore` — it will **never** be uploaded to GitHub. This keeps the API key private and safe.

When deploying (e.g., to Vercel), this same variable must be added again in the hosting platform's dashboard under Environment Variables.

---

## Run Locally

Requires **Node.js 18.17+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:
```bash
npm run build
npm run start
```

---

## Project Structure


---

## Things to Keep Updated

- **Contact info** — phone, email, address are centralized in `src/lib/site-config.ts`
- **Portfolio projects** — edit the `PROJECTS` array in `src/app/portfolio/page.tsx`
- **Testimonials** — edit the `TESTIMONIALS` array in `src/components/TestimonialCarousel.tsx`
- **Services** — edit the `CATEGORIES` array in `src/app/services/page.tsx`

---

## Deployment (Vercel)

1. Push this project to GitHub (see steps below)
2. Go to [vercel.com](https://vercel.com), sign in, click "Add New Project"
3. Import the GitHub repository
4. Add the `RESEND_API_KEY` environment variable in the project settings
5. Deploy — Vercel handles everything automatically, including the `/api/contact` route