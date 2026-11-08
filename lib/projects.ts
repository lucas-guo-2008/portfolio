export type Project = {
  title: string;
  summary: string;
  phases: Phase[];
  stack: string[];
  slug: string;
  status: 'live' | 'complete' | 'building' | 'planned';
  repo?: string;
  featured?: boolean;
  current?: number;
  event?: ProjectEvent;
  links?: ProjectLink[];
  role?: string;
}

export type Phase = {
  comment: string;
  description: string;
}

// Hackathons: shown as a caption on the tile ("Cal Hacks 13.0 · Oct 2026") and in the facts panel.
export type ProjectEvent = {
  name: string;
  date: string;
  award?: string;
}

export type ProjectLink = {
  label: string;
  href: string;
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
    title: 'KW Connect',
    summary: 'A Flutter app, built with KW Habilitation, that makes the real Facebook easier and safer for seniors and adults with intellectual or developmental disabilities. It loads facebook.com in a web view and simplifies it, adds read-aloud and speech-to-type, scales text and buttons up to 200%, and alerts a support person when a chat looks unsafe.',
    phases: [
      { comment: 'Facebook Wrapper', description: 'A Flutter web view loads the real facebook.com, and each area of the page gets its own CSS/JS file so three of us could work in parallel.' },
      { comment: 'Simplify',         description: 'Hide ads, Reels in the feed, the sidebars, Marketplace and Gaming, and trim the post composer, profiles, Messenger and comments.' },
      { comment: 'Read and Speak',   description: 'ElevenLabs reads posts and messages aloud and turns speech into text, and Cloudinary AI Vision describes photos before they are read.' },
      { comment: 'Safety',           description: 'Gemini checks Messenger chats and alerts support contacts by text or email, and an on-device check warns before sending a card number, SIN, password or PIN.' },
      { comment: 'Sizing and Mobile', description: 'Text, bold and button size (up to 200%) are set during onboarding, and phones get a bottom tab bar with full-screen chats.' },
    ],
    stack: [
      'Language: Dart, JavaScript, CSS',
      'App: Flutter (Mac, Android, iOS)',
      'AI: Gemini, ElevenLabs, Cloudinary AI Vision',
      'Messaging: Twilio, Resend',
    ],
    slug: 'kw-connect',
    status: 'complete',
    repo: 'https://github.com/collinykm/KW-Hab',
    featured: true,
    event: { name: 'CommuniHacks', date: 'Nov 2026' },
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/1533103' },
    ],
    role: 'I built many of the Facebook simplifications (the post composer, hiding ads and feed Reels, profiles, the share menu, the Saved tab and friend requests), the text and email alerts to support contacts (Twilio and Resend), and turned off speech-to-type on PIN fields.',
  },
  {
    title: 'Magnus Bot',
    summary: "A two-arm robot that plays chess against a human on a real board: it moves pieces with analytic inverse kinematics and passes them across a shared square when one arm can't reach. An RF-DETR model on a phone camera checks each robot move and reads the human's reply.",
    phases: [
      { comment: 'Reach Check',  description: 'A reachability map showed a straight-down grip reaches 48 of 64 squares at grasp height but none at the 14 cm carry height, which led to inverse kinematics with a tilted gripper.' },
      { comment: 'Motion',       description: "Min-jerk joint trajectories, timed by each segment's slowest joint, with every move planned and checked in simulation before the arms move." },
      { comment: 'Calibration',  description: 'The camera tracked a painted fingertip at two heights to measure where each arm really lands, and fitting the arm geometry cut placement error from 9.0 to 3.0 mm RMS.' },
      { comment: 'Grasp Tuning', description: 'Grasps were tuned per piece in a loop graded by the board camera: rook 9/10, bishop 12/12, pawn 5/5.' },
      { comment: 'Demo',         description: "The arms played all four White moves of Scholar's mate on the real board, passing pieces through the shared e3 square when one arm couldn't reach." },
    ],
    stack: [
      'Language: Python, TypeScript',
      'Robotics: LeRobot, SO-101 arms, NumPy',
      'Vision: RF-DETR, PyTorch, OpenCV',
      'Chess: python-chess, Stockfish',
      'Web: Next.js, Playwright, Steel',
    ],
    slug: 'magnus-bot',
    status: 'complete',
    repo: 'https://github.com/MightyTMZ/magnus_bot',
    featured: true,
    event: { name: 'Cal Hacks 13.0', date: 'Oct 2026' },
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/magnusbot' },
    ],
    role: 'I built the motion layer of the arm controller (min-jerk trajectories, the simulated executor, the IK-to-joint mapping, the reachability map and the servo-calibration tool), and helped collect, label and train the RF-DETR piece detector, measure the rig, and make the demo video.',
  },
  {
    title: 'Allos',
    summary: 'A browser app that flags when a peanut-allergy meal may have been exposed at a food-prep station, using one overhead webcam. It tracks hands with MediaPipe and tongs with ArUco markers, turns overlaps into contact events, and traces each alert back through every touch to the allergen source.',
    phases: [
      { comment: 'Shared Contract', description: 'We built vision, the exposure engine and the dashboard in parallel against one shared TypeScript event contract, with 18 scripted scenarios as tests.' },
      { comment: 'Tracking',        description: 'MediaPipe tracks fingertips in the browser at up to 20 fps, and an ArUco marker on each tong arm locates the tong tips against calibrated zones.' },
      { comment: 'Exposure Engine', description: 'An event log tracks potential exposure both ways on each contact and links every record to its parent, so each alert shows the chain back to the source.' },
      { comment: 'Hover vs Touch',  description: "Tongs carried over the plate raised false alerts, so we calculated depth using apparent ArUco marker size: only frames within 8% of its resting size count as touching." },
      { comment: 'Alerts',          description: "A React dashboard shows each surface's status and the alert chain, and an ESP32 over Web Bluetooth flashes red and beeps until the alert is acknowledged." },
    ],
    stack: [
      'Language: TypeScript, C++ (Arduino)',
      'Frontend: React 19, Vite',
      'Computer vision: MediaPipe Hand Landmarker, ArUco (js-aruco2)',
      'Hardware: ESP32, Web Bluetooth, Web Serial',
    ],
    slug: 'allos',
    status: 'complete',
    repo: 'https://github.com/shawn-xionggg/Hack-the-Valley',
    featured: true,
    event: { name: 'Hack the Valley 11', date: 'Oct 2026' },
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/update-later-ixuqpb' },
    ],
    role: "I built the computer-vision pipeline (hand and tong tracking, contact and wash detection, and a height check based on marker size), and helped with the shared event contracts and test scenarios, the engine's main reducer, and the React dashboard.",
  },
  {
    title: 'Portfolio',
    summary: 'A personal website that displays my project work and the build logs behind each project. The secondary goal is to learn web development by shipping a functional site with minimal prior experience.',
    phases: [
      {
        comment: 'Static Site',
        description: 'Begin strictly with a static Projects page to establish the base site.'
      }, {
        comment: 'Design System',
        description: 'Apply one shared set of colors, type and spacing from a design canvas, so this site and the dashboard match.'
      }, {
        comment: 'Project Pages',
        description: 'Give every project its own pre-built page with its summary and a build log that opens and closes.'
      }, {
        comment: 'Deploy',
        description: 'Ship to Vercel.'
      }, {
        comment: 'Maintenance',
        description: "I'm done working on the portfolio for now, but may add features in the future."
      }
    ],
    slug: 'portfolio',
    status: 'live',
    featured: true,
    current: 4,
    repo: 'https://github.com/lucas-guo-2008/portfolio',
    stack: [
      'Framework: Next.js, React, TypeScript, Tailwind CSS',
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
        description: 'Train a YOLO model to find the 8 loot-building classes, bootstrapping labels from 100 reviewed frames: 0.987 recall on frames it had never seen.'
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
      'Detection: YOLO26 via Ultralytics, about 18 ms per base'
    ],
    slug: 'coc-bot',
    status: 'building',
    featured: true,
    current: 5,
    repo: 'https://github.com/lucas-guo-2008/clash-of-clans-bot'
  },
  {
    title: 'Spotify Playlist Analysis',
    summary: 'A Python pipeline that groups my 700+ song Spotify playlist by genre and charts its contents: it pulls artist tags from the Last.fm API and maps them to hand-picked buckets with pandas. Matplotlib charts show release years, when songs were added, top artists, song length and popularity. The secondary goal is to learn how to call and cache a real API and clean messy data with pandas.',
    phases: [
      { comment: 'Data Pipeline',     description: 'Export the playlist with Exportify and fetch Last.fm tags for all 568 artists, with a local cache.' },
      { comment: 'Playlist Charts',   description: 'Chart 702 songs by release year, month and hour added, artist, length, popularity and explicit content.' },
      { comment: 'Genre Buckets',     description: 'Map Last.fm tags into five hand-defined buckets and fix tag quality so no single bucket holds most songs.' },
      { comment: 'Spotify Playlists', description: 'Rebuild each bucket as its own Spotify playlist through the Spotify Web API.' },
      { comment: 'Listening History', description: "Add Spotify's streaming history to find unplayed songs, the most-skipped tracks, and genre weighted by plays." },
    ],
    stack: [
      'Language: Python 3.12',
      'Data: pandas',
      'Charts: matplotlib',
      'APIs: Last.fm',
      'Input: Exportify CSV',
      'Planned: Spotify Web API, Spotify streaming history',
    ],
    slug: 'spotify-playlist-analysis',
    status: 'building',
    featured: true,
    current: 2,
    repo: 'https://github.com/lucas-guo-2008/spotify',
  },
  {
    title: 'Life Dashboard',
    summary: 'A public dashboard that tracks daily metrics (Gym, Running, Sleep) and GitHub activity. The secondary goal is to learn to fetch, analyze, and visualize real data, starting with gym logs and then personal fitness data from my Garmin watch.',
    phases: [
      {
        comment: 'Gym Data',
        description: 'Start with gym logging using manual entry in Google Sheets, since it has no external API dependencies.'
      }, {
        comment: 'GitHub Activity',
        description: 'Show commit activity and a contribution calendar from the GitHub API, with each repo linking to its write-up on my portfolio.'
      }, {
        comment: 'Garmin Data',
        description: 'Add Running and Sleep dashboards. Start with manual Garmin data exports, then explore automated options using unofficial APIs in future updates.'
      }, {
        comment: 'Defer Complex Features',
        description: 'Postpone database setup and user authentication until the initial read-only site is deployed and running smoothly.'
      }
    ],
    stack: [
      'Framework: Next.js, React, Tailwind CSS',
      'Hosting: Vercel',
      'Data Sources: Google Sheets for gym logs; CSV/JSON manual exports for Garmin data, imported with a Python script; the GitHub API for commit activity'
    ],
    slug: 'life-dashboard',
    status: 'planned',
    featured: false,
  }
];
