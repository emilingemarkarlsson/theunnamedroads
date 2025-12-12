# The Unnamed Road

AI-native venture studio proving that a single operator plus AI can ship at venture scale. This repo powers [theunnamedroads.com](https://theunnamedroads.com) and documents the operating system behind the live experiments.

![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-Edge-00AD9F?style=for-the-badge&logo=netlify&logoColor=white)
![Umami](https://img.shields.io/badge/Analytics-Umami-111111?style=for-the-badge)

## Highlights

- Active-project hero that renders live badges straight from the Astro content collection.
- MDX-based publishing stack for essays, experiments, and project dossiers with automatic RSS + sitemap.
- Consent-free, privacy-first analytics powered by self-hosted Umami.
- Netlify deployment with serverless contact form, redirects, and page indexing via Pagefind.
- Dark/light mode choreography handled at the layout level with `ModeManager`.

## Quick Start

```bash
git clone https://github.com/emilingemarkarlsson/theunnamedroads.git
cd theunnamedroads
pnpm install
pnpm dev
```

Visit http://localhost:4321 and watch the hero badges reflect whatever projects are marked `status: "active"`.

### Prerequisites

- Node.js 18+
- pnpm 9+

## Project Scripts

| Command          | Description                                         |
| ---------------- | --------------------------------------------------- |
| `pnpm dev`       | Start Astro dev server with hot reload              |
| `pnpm build`     | Production build (static output + image pipeline)   |
| `pnpm preview`   | Serve the production build locally                  |
| `pnpm check`     | Run ESLint, Stylelint, and `astro check`            |
| `pnpm postbuild` | Generate Pagefind search index after every deploy   |

## Project Structure

```text
./
├── public/                 # Static assets, redirects, manifest, logos
├── netlify/                # Functions (contact form) + serverless glue
├── src/
│   ├── components/         # Hero, project lists, layout primitives
│   ├── content/            # Astro collections (posts, projects)
│   ├── layouts/            # Base, Page, Post, Landing layouts
│   ├── pages/              # Astro routes (mdx + .astro)
│   ├── style/              # Tailwind entry + custom CSS
│   └── util/               # Helpers for content sorting and filtering
├── astro.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Key Features

- **Live Hero Control Room** – pulls project metadata (title, URL, badge color, hero blurb) directly from `src/content/projects`. Updating content automatically reshapes the homepage.
- **Content Engine** – MDX collections give you RSS, sitemap, pagination, and tag pages out of the box.
- **SEO + Schema** – Base layout emits canonical URLs, OG/Twitter metadata, organization JSON-LD, and handles font preloading.
- **Dark Mode** – `ModeManager` maintains theme preference, while `ModeToggle` exposes UI controls.
- **Contact Automation** – `netlify/functions/contact-form.cjs` handles submissions without exposing API keys to the client.
- **Search Ready** – Pagefind builds a static search index every deploy via `pnpm postbuild`.

## Analytics & Integrations

- **Umami** – `<script defer src="https://umami.theunnamedroads.com/script.js" data-website-id="fc8f279b-0da8-4013-b8df-be07dc12a8f1">` is injected in `BaseLayout.astro` for site-wide reporting.
- **Netlify Forms** – serverless handler stores contact requests securely.
- **Pagefind** – zero-config static search for the content library.

## Customization Guide

1. **Brand + Metadata** – Update `src/theme.config.ts` for title, description, author, and default Open Graph imagery.
2. **Hero Badges** – Add or edit project entries in `src/content/projects/*.md`. Use `status: active`, `badgeColor`, and `heroBlurb` to control the homepage chips.
3. **Posts & Experiments** – Drop MDX/Markdown into `src/content/posts/`. Frontmatter drives tags, ToC visibility, and OG assets.
4. **Palette & Typography** – Adjust Tailwind tokens in `tailwind.config.js` or extend the CSS files in `src/style/`.
5. **Analytics** – Swap Umami for another tracker by editing the script tag inside `src/layouts/BaseLayout.astro`.

## Deployment

| Platform         | Build Command     | Notes                                                |
| ---------------- | ----------------- | ---------------------------------------------------- |
| Netlify (default)| `pnpm run build`  | Publish `dist/`, Netlify functions live in `netlify/`|
| Vercel           | `pnpm run build`  | Add the Astro Vercel adapter if you need SSR         |
| Cloudflare Pages | `pnpm run build`  | Upload `dist/` and keep `_redirects` in `public/`    |

`pnpm postbuild` (Pagefind) runs automatically via the `package.json` script, so deploy targets just need Node 18 and pnpm.

## Tooling Snapshot

- **Editor**: VS Code + Copilot for rapid iteration.
- **Automation**: Netlify builds, Pagefind indexing, and AI-assisted content workflows.
- **Design System**: TailwindCSS + IBM Plex Sans.
- **Stack Visibility**: Toolstack page mirrors the actual workstation so visitors can inspect the exact hardware/software mix.

## License & Maintainer

Released under the [MIT License](./LICENSE.md).

Maintained by The Unnamed Road (Emil Ingemar Karlsson). Reach out via [theunnamedroads.com/contact](https://theunnamedroads.com/contact) for collaboration or partnerships.

---

_“Control the signal. Merge with the machine. Ship faster than the markets can react.”_
