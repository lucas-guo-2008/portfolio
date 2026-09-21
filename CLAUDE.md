# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Lucas Guo's public portfolio: who he is, what he's built, and the build logs behind each project.
Visitors are recruiters and peers who skim. They should know who Lucas is and see his work within
a few seconds.

This site is one half of a split. The other half is the **Life Dashboard**
(`TBD: dashboard URL`, repo `lucas-guo-2008/life-dashboard`), which owns everything measured: gym, running,
sleep, GitHub activity. Both came out of `lucas-guo-2008/personal-website`, which is now private.
Use it as a reference for ported code, never as a dependency. There's a local copy at
`~/Developer/project-website`.

Owner: Lucas Guo — starting CS at the University of Waterloo in Fall 2026, learning web dev in
public.

## How to work with Lucas

**Lucas writes the code in this repo; Claude guides.** He's learning. In Log 5 he wrote that he
wants "deeper skills that can't be so easily replaced by AI."

**Default: guide, don't write.**
- Don't create or edit files in this repo.
- Don't run commands that change it: installs, scaffolding, commits.
- Don't offer to "just do it."

What guiding looks like:
- **Explain the idea before the syntax**: what the concept is and why it applies here. Keep it
  short.
- **Point to the source.** For framework APIs, name the exact file under
  `node_modules/next/dist/docs/`, so he learns where answers live.
- **Break work into small steps** he can do one at a time, and say what "done" looks like for
  each.
- **Short, generic examples are fine** when they illustrate an API or pattern. Don't write the
  finished code for this repo's files.
- **When he's stuck, give the smallest hint that unblocks him**: which file, which line, which
  concept. Get more direct if he's still stuck, or if he asks for the answer.
- **Review what he writes.** Read the actual files and cite `file:line`. Explain what's wrong and
  why, then let him fix it. Check his work against the conventions and scope in this file.
- **Read-only diagnosis is fine**: reading files, `npm run lint`, `npm run build`, dev-server
  output.

**He can override this.** If he explicitly asks Claude to write or change something, do it
without pushback. The default is his, and so is the exception.

The rest of this file describes what the code should become. Use it to plan steps with him and to
review his work, not as a spec for Claude to implement.

## Scope

**In:** the about page, project summaries, per-project build logs, and outbound links (socials,
the dashboard, GitHub repos).

**Out — belongs to the dashboard.** Metrics, charts, live data, and anything fetched from Google
Sheets, Garmin, or GitHub's API. If it comes up, point out that it belongs on the dashboard.

**Out — deferred on purpose:** auth, a database, a journal-entry submitter or any form that
writes data, and a navbar hover dropdown. The site is static and read-only; changing content
means changing code.

The combined site this came from grew too broad, which is why this repo exists. If a request
expands scope, flag it before building.

## Routes

| Route | Content |
|---|---|
| `/` | intro + featured projects |
| `/projects` | one card per project |
| `/projects/[slug]` | project summary + its build logs (accordion with open/close all) |
| `/about` | bio + social links |

**Projects:**

| Slug | Project | Status | Logs |
|---|---|---|---|
| `portfolio` | this site | `building` → `live` once deployed | logs 1–5 from the combined site |
| `life-dashboard` | the sibling dashboard | `building` | none yet |
| `quotes` | Quotes Website (Next.js + FastAPI + SQLite) | `planned` | none |

`quotes` keeps the old URL `/projects/quotes`. A `planned` project renders a coming-soon state on
its page instead of an empty log list.

## Content model

Content is code: typed arrays in `lib/`, imported and rendered by pages. There's no CMS and no
markdown pipeline. MDX is a possible later upgrade; see
`node_modules/next/dist/docs/01-app/02-guides/mdx.md`.

```ts
// lib/projects.ts
type Project = {
  slug: string;                                         // URL segment in /projects/[slug]
  title: string;
  summary: string;                                      // one paragraph
  phases: { comment: string; description: string }[];   // MAY BE EMPTY — hide the section
  stack: string[];
  status: 'live' | 'building' | 'planned';
  repo?: string;                                        // GitHub URL
};

// lib/logs.ts
type Log = {
  projectSlug: string;   // must match a Project.slug
  title: string;
  date: string;          // YYYY-MM-DD, sometimes with a suffix: "2026-08-03 (night)"
  entry: string;         // paragraphs separated by \n\n; render with whitespace-pre-line
};
```

Phases render as `Phase 1 (Static Site): <description>`. `comment` is the short label in
parentheses.

`/projects/[slug]` is statically generated. `generateStaticParams` returns every slug; an unknown
slug calls `notFound()` from `next/navigation`. **In this Next version `params` is a `Promise`**
(`const { slug } = await params`). See
`node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`.

## Porting from the old repo

| Old (`~/Developer/project-website`) | New |
|---|---|
| `app/me/page.tsx` | `/about` |
| `app/projects/page.tsx` — `ProjectSummary` | `/projects` card |
| `app/projects/this/page.tsx` — `JournalEntry` accordion, open/close all | the log list on `/projects/[slug]` |
| `app/projects/quotes/page.tsx` | not a page anymore — the `planned` state on `/projects/quotes` |
| `components/SocialLink.tsx`, `components/Navbar.tsx` | keep as-is, then restyle |
| `app/layout.tsx` — Plus Jakarta Sans + JetBrains Mono via `next/font/google` | keep as-is until the design system says otherwise |
| `lib/projectSummaries.ts` | → `lib/projects.ts`. Its single "Personal Life Dashboard" entry splits into `portfolio` + `life-dashboard`. |
| `lib/journalEntries.ts` | → `lib/logs.ts`. All 5 entries get `projectSlug: 'portfolio'`. |

Not ported: the old `/` (Hello World), `/gym`, `/form`, `lib/googleSheets.ts`.

Two things **not** to carry over:
- The old `/projects` page is marked `'use client'` but holds no state. It should be a server
  component.
- The old `/projects/this` makes the whole page a client component to power the accordion. Keep
  the page on the server and make only the accordion a client component, receiving the logs as
  props.

## Stack & commands

Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4. Deploys to Vercel.

```bash
npm run dev     # http://localhost:3000
npm run build
npm start
npm run lint
```

There is no test setup.

## Conventions

- **Server components by default.** Put `'use client'` only on the component that holds state,
  not on the page around it.
- **Tailwind v4 has no `tailwind.config.js`.** Tokens live in the `@theme` block in
  `app/globals.css`. Use tokens, not arbitrary values like `bg-[rgb(240,246,250)]` — that was the
  old repo's habit and the reason nothing matched.
- **`@/*`** resolves to the repo root.
- **Dates are `YYYY-MM-DD`.** Any date display must survive a suffix like `(night)`.
- **No new dependencies** without a stated reason.
- **Don't rewrite Lucas's copy** — bio, summaries, logs. Formatting is fine; wording isn't.

## Design

This site shares one design system with the dashboard: `TBD: Claude Design System link`.

Until that exists, keep styling minimal and token-based so applying the real design is mostly a
token swap. It must be responsive down to 390px — the old site had zero breakpoints.

## Status

- [ ] Scaffolded with `create-next-app`
- [ ] Pages, components, and data ported
- [ ] `/projects/[slug]` with per-project logs
- [ ] Design system applied; checked at 390px
- [ ] Deployed — `TBD: portfolio URL`
- [ ] Cross-linked with the dashboard
