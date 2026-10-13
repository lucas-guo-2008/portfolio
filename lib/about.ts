export const name = 'Lucas Guo';

export const tagline = "CS major and Strava monkey";

export const bio = [
  "I'm a first-year CS major at the University of Waterloo! I'm interested in AI/ML, CV, Economics, and Philosophy. I'm currently working on a portfolio project in React and TypeScript and a Clash of Clans bot using Python and CV.",
  "In my free time, I like going to the gym, running, hiking, snowboarding, and hanging out with friends. I also like collecting Pokemon cards, as well as watching anime and YouTube.",
];

export const location = '43.47° N, 80.54° W · Waterloo, ON';

export const bib = {
  number: '3522419',
  event: 'UWaterloo · Fall 2026',
  category: 'Computer Science · First year',
};

// Add a real photo at public/<file> and fill this in; the bib shows alone until then.
export const photo: { src: string; alt: string } | undefined = undefined;

// One line in Lucas's words; hidden until set.
export const funFact: string | undefined = undefined;

export type ProfileRow =
  | { label: string; items: string[] }
  | { label: string; derived: 'building-projects' };   // filled in by the page

export const profile: ProfileRow[] = [
  { label: 'University',     items: ['University of Waterloo'] },
  { label: 'Major and year', items: ['Computer Science, first year'] },
  { label: 'Interests',      items: ['AI/ML', 'CV', 'Economics', 'Philosophy'] },
  { label: 'Working on',     derived: 'building-projects' },
  { label: 'Sports',         items: ['Running', 'Gym', 'Hiking', 'Snowboarding'] },
  { label: 'Also into',      items: ['Pokemon cards', 'Anime', 'YouTube', 'Hanging out with friends'] },
];
