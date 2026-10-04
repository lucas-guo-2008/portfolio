export type Project = {
  title: string;
  summary: string;
  phases: Phase[];
  stack: string[];
  slug: string;
  status: 'live' | 'building' | 'planned';
  repo?: string;
}

export type Phase = {
  comment: string;
  description: string;
}

export function getProject(slug : string): Project | undefined {
  const project = projects.find(f => f.slug === slug);
  return project;
}

export const projects : Project[] = [
  {
    title: 'Portfolio',
    summary: 'Build a personal website to display my project work and the build logs behind each project. The secondary goal is to learn web development by shipping a functional site with minimal prior experience.',
    phases: [
      {
        comment: 'Static Site',
        description: 'Begin strictly with a static Projects page to establish the base site.'
      }, {
        comment: 'Defer Complex Features',
        description: 'Postpone live interactive forms until the initial read-only site is deployed and running smoothly.'
      }
    ],
    slug: 'portfolio',
    status: 'building',
    repo: 'https://github.com/lucas-guo-2008/portfolio',
    stack: [
      'Framework: Next.js, React, Tailwind CSS',
      'Hosting: Vercel',
      'Content: Static TypeScript files for project summaries and build logs'
    ],
  },
  {
    title: 'Clash of Clans Attack Bot',
    summary: 'A computer-vision bot that farms loot in Clash of Clans without any game API. It captures the screen over ADB, identifies menus and reads each base\'s loot with OpenCV template matching, and decides whether to attack. The secondary goal is to learn computer vision and system design by building in small, testable steps, with pure vision modules developed against saved frames instead of the live game.',
    phases: [
      {
        comment: 'Plumbing',
        description: 'Connect to BlueStacks Air over ADB, benchmark raw screencap capture (~176 ms/frame), and build the frame recorder and offline replay tools.'
      }, {
        comment: 'Navigate',
        description: 'Identify screens from button template matches and drive the full loop (home → army → attack menu → scout → Next → home) with a pure state machine that never taps a screen it has not identified.'
      }, {
        comment: 'Read Loot',
        description: 'Read gold, elixir, and dark elixir with per-digit template matching on a binarized crop. 96/96 labelled digits are read correctly, and any unreadable panel is skipped rather than guessed.'
      }, {
        comment: 'Deploy',
        description: 'Skip bases until the loot clears a threshold, then drop troops along the deployable perimeter, wait out the battle, and return home. This is where it becomes a complete farming bot.'
      }, {
        comment: 'Building Detection',
        description: 'Train a YOLO nano model on frames collected in earlier phases to detect defenses, collectors, storages, and walls. Labelling starts with ~100 hand-labelled frames, then a weak model pre-labels the rest.'
      }, {
        comment: 'Decision Layer',
        description: 'Combine building detections and loot into an expected-value score that picks which bases to attack and which side to deploy from, replacing the fixed thresholds.'
      }
    ],
    stack: [
      'Language: Python',
      'Emulator: BlueStacks Air (macOS)',
      'Capture & Input: ADB via adbutils (raw screencap over a persistent connection)',
      'Vision: OpenCV template matching, NumPy',
      'Planned: YOLO (nano) for building detection'
    ],
    slug: 'coc-bot',
    status: 'building',
    repo: 'https://github.com/lucas-guo-2008/clash-of-clans-bot'
  },
  {
    title: 'Life Dashboard',
    summary: 'Build a public dashboard to track daily metrics (Gym, Running, Sleep) and GitHub activity. The secondary goal is to learn to fetch, analyze, and visualize real data, starting with personal fitness data from my Garmin watch.',
    phases: [
      {
        comment: 'Gym Data',
        description: 'Start with gym logging using manual entry in Google Sheets, since it has no external API dependencies.'
      }, {
        comment: 'GitHub Activity',
        description: 'Show commit activity and a contribution calendar from the GitHub API, with each repo linking to its write-up on my portfolio.'
      }, {
        comment: 'Garmin Data',
        description: 'Add Running and Sleep dashboards later. Start with manual Garmin data exports, then explore automated options using unofficial APIs in future updates.'
      }, {
        comment: 'Defer Complex Features',
        description: 'Postpone database setup and user authentication until the initial read-only site is deployed and running smoothly.'
      }
    ],
    stack: [
      'Framework: Next.js, React, Tailwind CSS',
      'Hosting: Vercel',
      'Data Sources: Google Sheets for gym logs; CSV/JSON manual exports for Garmin data, imported with a Python script; the GitHub API for commit activity.'
    ],
    slug: 'life-dashboard',
    status: 'planned',
  },
  {
    title: 'Test title',
    summary: 'Test summary',
    phases: [],
    stack: [],
    slug: 'test',
    status: 'planned',
  }
];
