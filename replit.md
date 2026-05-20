# AutoSite AI Pro

An ultra-premium AI website generation platform that turns a text prompt into a complete, scored, auto-improved, deployable HTML/CSS/JS website — powered by Google Gemini with a built-in mock fallback.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — build + run API server (port 8080, proxied at `/api`)
- `pnpm --filter @workspace/autosite-frontend run dev` — run Vite frontend (port 23856, proxied at `/`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm install` — install all workspace dependencies

**Required env vars (optional — falls back to mock generator):**
- `GEMINI_API_KEY` — Google Gemini API key
- `GEMINI_MODEL` — model name, default `gemini-2.0-flash-lite`
- `GENERATED_DIR` — filesystem path for generated sites, default `../../generated-sites`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 18 + Vite + React Router v7 + Framer Motion + GSAP + Tailwind CSS
- Backend: Express 5
- AI: `@google/generative-ai` (Gemini), fallback mock generator
- ZIP export: JSZip + file-saver (frontend) and JSZip (backend)
- No database — sites stored as filesystem folders under `generated-sites/`

## Where things live

- `artifacts/autosite-frontend/src/pages/` — Dashboard, Generate, Templates, ImportSite, Agents, Exports, Settings, not-found
- `artifacts/autosite-frontend/src/components/` — Layout, Sidebar, MobileNav, PageHeader, PageTransition, StatCard, AgentPipeline, StyleSelector, PreviewFrame, **ScoreBadge**, **ScorePanel**
- `artifacts/autosite-frontend/src/services/api.ts` — Axios API client (includes `scoreSite`, `improveSite`, `sourceZipUrl`)
- `artifacts/autosite-frontend/src/utils/zipExport.ts` — client-side ZIP + preview srcdoc builder
- `artifacts/autosite-frontend/src/animations/gsapReveal.ts` — GSAP scroll reveal hook
- `artifacts/api-server/src/routes/` — generate, projects, templates, importSite, standalone, health, **score**, **sourceExport**
- `artifacts/api-server/src/services/gemini.ts` — Gemini integration + fallback
- `artifacts/api-server/src/services/mockGenerator.ts` — full local fallback (5 styles: Apple/Luxury/Minimal/Corporate/Cyber)
- `artifacts/api-server/src/services/scraper.ts` — URL text extractor for import feature
- `artifacts/api-server/src/services/scorer.ts` — 7-dimension quality scorer (0–100 per dimension, weighted global)
- `artifacts/api-server/src/services/improver.ts` — auto-improvement engine (patches HTML/CSS/JS for weak dimensions)

## Architecture decisions

- **Mock fallback first**: When `GEMINI_API_KEY` is absent or quota is exceeded, the mock generator produces real, deployable multi-section sites — not placeholders.
- **Score + improve pipeline**: Every generated site is automatically scored then auto-improved before saving. Scores persist in `meta.json` and are returned with every project list/detail response.
- **7 quality dimensions**: Accessibility (15%), SEO (15%), Visual Polish (20%), Mobile Responsiveness (15%), Conversion (15%), Performance (10%), Animation Quality (10%). Global = weighted average.
- **Filesystem storage**: Sites saved as `{timestamp}-{slug}/` folders with `index.html`, `style.css`, `script.js`, `README.md`, `meta.json`. No database needed.
- **Sandboxed preview**: Generated sites rendered in `<iframe srcdoc=...>` — secure and zero-config.
- **Contract-first API**: All routes registered under `/api` prefix. Frontend uses a single axios instance pointed at `/api`.
- **Source ZIP export**: `GET /api/export/source` streams a ZIP of the entire project source (excludes node_modules, dist, generated-sites, secrets).

## Product

- **Generate** — prompt + style → 6-agent pipeline → live preview + quality score panel + auto-improve + ZIP download
- **Dashboard** — stat cards including average quality score badge across all generated sites
- **Exports** — browse sites with score badges on cards, modal with collapsible score panel + auto-improve
- **Templates** — 6 hand-curated site briefs (Restaurant, Garage, Photographer, Real Estate, SaaS, E-commerce)
- **Import** — paste any URL, scrape its text, generate an inspired redesign
- **Agents** — explain the 6-step pipeline
- **Settings** — Gemini status, quality scorer info, full source ZIP download, standalone ZIP download

## Gotchas

- The API server builds with esbuild before starting — restart takes ~3s for the build step
- `generated-sites/` is created at runtime; relative to `artifacts/api-server` working dir unless `GENERATED_DIR` is set
- Score retroactively computed when `GET /projects/:id` is called and no score is stored in meta.json
- Add `GEMINI_API_KEY` as a Replit secret to enable live AI generation; without it the mock generator runs automatically
