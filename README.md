# Lucas Guo — portfolio

My public portfolio: who I am, what I've built, and the build logs behind each project.
Live at `TBD: portfolio URL`.

## Pages

| Route | What's there |
|---|---|
| `/` | intro, plus featured projects grouped into Built and Now and next |
| `/projects` | every project, grouped into Built and Now and next like the home page |
| `/projects/[slug]` | one project's summary, its roadmap, and its build log |
| `/about` | photo, bio, profile, and links to find me |

## Stack

Next.js (App Router), React, TypeScript, and Tailwind CSS v4, deployed on Vercel. Every page is
static and generated at build time.

## Content

There's no CMS or database. Content is typed data in `lib/`:

- `lib/projects.ts`: projects (summary, phases, stack, status, repo, `featured`, and `current`, the
  phase in progress)
- `lib/logs.ts`: build logs, oldest first. Each entry is paragraphs and numbered lists separated by
  blank lines.
- `lib/about.ts`: my name, tagline, and bio (shared by `/` and `/about`), plus the `/about` data:
  photo, bib, profile, and fun fact
- `lib/socials.ts`: social and contact links, used by the footer, the home intro, and `/about`,
  plus the résumé and dashboard links

To add a log or project, edit the file and redeploy.

Design tokens (colors, type, spacing) live in the `@theme` block in `app/globals.css`. The link-preview image is drawn by
`app/opengraph-image.tsx`.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```
