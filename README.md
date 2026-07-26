# Zipa Landing Page

The marketing landing page for **Zipa** — the username-first crypto bank for Nigeria.

Zipa lets you send, receive and grow — SOL, ETH, USDT and more — with just your @username. No wallet addresses. No gas jargon.

## Tech Stack

- **Next.js 16** — React framework for production
- **React 19** — UI library
- **TailwindCSS 4** — Utility-first CSS
- **Shadcn UI** — Reusable components built on Radix UI
- **Motion / GSAP** — Production-ready animation
- **TypeScript** — Type-safe code

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

```env
NEXT_PUBLIC_APP_URL="https://kivo-three-eta.vercel.app"
```

`NEXT_PUBLIC_APP_URL` points to the main Zipa app. CTAs and pay-link redirects use this.

## Binary Asset Pipeline

Binary files (fonts, images) are base64-encoded into `assets-b64/` so the deploy path handles text-only files. The `predev` and `prebuild` scripts run `node scripts/decode-assets.mjs` to restore them into `public/` before build.

To encode new binaries after adding them to `public/`:

```bash
node scripts/encode-assets.mjs
```

## Deploy on Vercel

```bash
npm run build
```

The `prebuild` script decodes assets automatically.

---

Based on the [Avento template](https://github.com/Shreyas-29/avento). Template credit: Shreyas-29.
