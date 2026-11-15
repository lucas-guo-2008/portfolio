export const name = 'Lucas Guo';

export const tagline = "CS major and Strava monkey";

export const intro = "First-year CS at Waterloo. I build ML projects, from computer vision to robot arms, and I'm learning neural networks from the ground up.";

export const bio = [
  "I'm a first-year CS major at the University of Waterloo! I'm interested in ML, CV, Economics, and Philosophy. I'm currently working on a Clash of Clans bot using Python, OpenCV, and YOLO, as well as learning about neural networks.",
  "In my free time, I like going to the gym, running, hiking, snowboarding, and hanging out with friends. I also like collecting Pokemon cards, as well as watching anime, movies, and YouTube.",
];

export const lookingFor: string | undefined = "I'm also looking for a Summer 2027 co-op in ML or software!";

export const location ='Waterloo, ON';

export const bib = {
  number: '3522419',
  event: 'UWaterloo · Fall 2026',
  category: 'Computer Science · First year',
};

export const photo: { src: string; alt: string } = { src: '/lucas.jpg', alt: 'Lucas hiking at Whistler!'};

export const funFact: string = "I got my black belt in Taekwondo at 9 years old! Sadly, I\'ve been retired for ages.";

export type ProfileRow =
  | { label: string; items: string[] }
  | { label: string; derived: 'building-projects' };

export const profile: ProfileRow[] = [
  { label: 'University',     items: ['University of Waterloo'] },
  { label: 'Major and year', items: ['Computer Science, first year'] },
  { label: 'Interests',      items: ['ML', 'CV', 'Neural Networks', 'Robotics', 'Economics', 'Philosophy'] },
  { label: 'Working on',     derived: 'building-projects' },
  { label: 'Sports',         items: ['Running', 'Gym', 'Hiking', 'Snowboarding'] },
  { label: 'Also into',      items: ['Pokemon cards', 'Anime', 'Movies', 'YouTube', 'Hanging out with friends'] },
  { label: 'Favourite shows', items: ['The Office', 'Suits', 'Modern Family'] },
];
