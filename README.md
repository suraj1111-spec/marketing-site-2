# Crestline Developments — marketing site (Next.js + Node.js)

A Next.js 14 (App Router) marketing site for a real-estate developer, built
for SEO out of the box. Content is placeholder copy for a fictional developer
("Crestline Developments") with 5 example projects — swap it for the real
business before shipping.

## Pages

- `/` — Home, with a hero, quick stats, and a project index (the signature
  visual element)
- `/about`
- `/projects` — listing of all 5 projects
- `/projects/[slug]` — one statically generated page per project (5 total),
  each with its own SEO metadata and `ApartmentComplex` structured data
- `/services`
- `/contact` — form that posts to a real Node.js API route

Project content lives in one place: `src/lib/projects.ts`. Add, remove, or
edit a project there and the home page, `/projects` listing, sitemap, and
individual project pages all update automatically — no need to touch each
page by hand.

## Run it

This sandbox has no network access, so dependencies haven't been installed yet.
On your machine:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production build
```

## How rendering is split (static + dynamic)

- **Static (SSG):** every page, including all 5 project pages, is prerendered
  to plain HTML at build time via `generateStaticParams` — fastest possible
  load, ideal for SEO, and each project gets a real indexable URL.
- **Dynamic:** the contact form posts to `src/app/api/contact/route.ts`, a
  Next.js Route Handler — a real Node.js server function that runs fresh on
  every request. That's where you'd add validation, rate limiting, a CRM
  call, or an email provider (Resend, Postmark, etc.) — replace the
  `console.log` TODO there.

## SEO features included

- **Metadata API** — title templates, meta description, canonical URLs, Open
  Graph, and Twitter card tags on every page, including per-project metadata
  generated from `src/lib/projects.ts`.
- **`sitemap.ts` / `robots.ts`** — Next.js generates `/sitemap.xml` and
  `/robots.txt` automatically, including one entry per project.
- **JSON-LD structured data** — `Organization` schema site-wide, plus
  `ApartmentComplex` schema on each project page for richer search results.
- **Semantic HTML** — one `<h1>` per page, `<nav>`/`<header>`/`<footer>`
  landmarks, labelled form fields.
- **Performance defaults** — `next/font` (self-hosted, no render-blocking
  Google Fonts request), `next/image`-ready, compression and security headers
  in `next.config.mjs`.
- **Custom 404** so broken links don't return soft-404s.

## Before you ship

1. Replace `SITE_URL` in `layout.tsx`, `sitemap.ts`, and `robots.ts` with your
   real domain.
2. Add real project photography — `src/lib/projects.ts` currently has no
   images; add an `image` field per project and use `next/image` on the
   listing/detail pages.
3. Add a real Open Graph image at `public/og-default.png` (1200×630) and a
   favicon at `public/favicon.ico`.
4. Swap the Crestline copy, palette (`tailwind.config.ts`), and fonts for
   your actual brand.
5. Wire `/api/contact` to a real email/CRM provider, and consider adding a
   project-specific enquiry field so leads route to the right sales contact.
6. Run `npm run build` and fix any type/lint errors before deploying.
7. Verify rich results with Google's
   [Rich Results Test](https://search.google.com/test/rich-results) and
   check Core Web Vitals in [PageSpeed Insights](https://pagespeed.web.dev/).
