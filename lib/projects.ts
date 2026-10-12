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

export function splitStackItem(item: string) {
  const i = item.indexOf(':');
  if (i === -1) return { key: null, value: item };
  return { key: item.slice(0, i).trim(), value: item.slice(i + 1).trim() };
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
    summary: 'A computer-vision bot that farms Clash of Clans loot with no game API: it captures the screen over ADB, reads menus and each base\'s loot with OpenCV template matching, and decides whether to attack. The secondary goal is to learn computer vision and system design by building in small, testable steps.',
    phases: [
      {
        comment: 'Plumbing',
        description: 'Capture the BlueStacks Air screen over ADB (~176 ms/frame) and build frame-recording and offline replay tools.'
      }, {
        comment: 'Navigate',
        description: 'Identify screens by template-matching their buttons, and drive the full attack loop with a state machine that only taps screens it recognizes.'
      }, {
        comment: 'Read Loot',
        description: 'Read gold, elixir, and dark elixir with per-digit template matching: 96/96 labelled digits correct, and unreadable panels are never guessed.'
      }, {
        comment: 'Deploy',
        description: 'Attack bases whose loot clears a threshold: drop troops along the deployable perimeter, wait out the battle, and return home.'
      }, {
        comment: 'Building Detection',
        description: 'Train a YOLO nano model to detect defenses, collectors, storages, and walls, bootstrapping labels from ~100 hand-labelled frames.'
      }, {
        comment: 'Decision Layer',
        description: 'Score each base by expected value from detections and loot to choose which bases to attack and which side to deploy from.'
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
