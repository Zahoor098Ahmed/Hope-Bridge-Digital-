# Hope Bridge Digital

Promotion website for Hope Bridge Digital's apps for autistic children and their families:

- **Angel Talk**: AAC talk board in English, Arabic, Urdu, Hindi, Spanish and French
- **BloomLearn**: turns spoken or typed sentences into pictures
- **Bloom Focus**: therapist-guided, adaptive attention games

Each app page includes a live, interactive demo.

## Tech

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · lucide-react

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
cd frontend
npm run build
npm start
```

## Project structure

```
frontend/
├── app/            Pages (home, /apps/[slug], 404) and globals.css (Tailwind theme)
├── components/     Header, Footer, UI kit, phone mockups, live demos
└── lib/            App content (apps.ts), site settings (site.ts)
```

App content lives in `frontend/lib/apps.ts`. Contact email lives in `frontend/lib/site.ts`.

## Accessibility

- **Calm mode** (header toggle) switches off all motion and softens colours. The site also respects the system "reduce motion" setting.
- Layouts are responsive from 320px phones to large monitors.
- Light and dark themes.
