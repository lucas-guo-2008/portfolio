export type Log = {
  projectSlug: string;
  title: string;
  date: string;
  entry: string;
}

export function getLogs(slug : string) : Log[] {
  return logs.filter(f => f.projectSlug === slug);
}

export const logs: Log[] = [
  {
    projectSlug: 'portfolio',
    title: 'Log 1 - The Beginning',
    date: '2026-07-24',
    entry: 'This is the start of me building my website in an effort to prepare for uni! I\'ve went through a 6h HTML and CSS tutorial so now I understand some of how  to convert my website designs into an actual page, even if I still need to rely heavily on searching things up to remind myself of the syntax and differences between all the different displays and positions and of course syntax needed. \n\nI think my main goal for now is to rapidly learn the basics of everything needed to code a website, then slowly build one myself.\n\nNext up: Javascript.'
  }, 
  {
    projectSlug: 'portfolio',
    title: 'Log 2 - After a Week',
    date: '2026-08-01',
    entry: 'I\'ve now finished a long Javascript course as well as some React content to be able to be on my way to making my website. I\'ve finished making my project page for this project (which is where these logs go), as well as a personal bio page. I\'ve also created a project summary which I\'ll add to the top of this page. \n\nThe next steps are to finish designing these pages before learning Next.js to connect my pages together and enable page routing. Also, maybe I should hurry up learning stuff because uni is starting in like 5 weeks 😨.'
  }, 
  {
    projectSlug: 'portfolio',
    title: 'Log 3 - It\'s time to accelerate (?)',
    date: '2026-08-03',
    entry: 'The personal bio and projects webpages are about completed (Phase 1). Now, it\'s time to learn how to route pages with Next.js and make the necessary changes to my project. After that, I\'ll learn about retrieving, reading, and displaying data to work on Phase 2.\n\nOne thing I\'ve thought about is starting to learn faster. There\'s not a lot of time left before uni so I should really just focus on breadth over depth. I also want to learn more about AI and the tools I can use. I hope I can use them effectively to boost my learning productivity. However, I also want to spend lots of time with family and friends this summer before the great separation, so let\'s see what I can do with a few hours a day.\n\nI guess hopefully the timeline right now is complete Next.js + Phase 2 in 3 days. I\'ll be back on the 6th.'
  },
  {
    projectSlug: 'portfolio',
    title: 'Log 4 - An Impending Sense of Doom',
    date: '2026-08-03 (night)',
    entry: 'Big refactor today with shifting the whole repo onto Next.js framework. Still not finished with everything, but a more clear roadmap is ahead. To be honest, there\'s a lot of changes that need to be made to my code still. This might also become more like a journal with more frequent entries and goals for the near-future.\n\nHere\'s some goals for tomorrow and maybe the day after:\n1. Convert projects page css to tailwind css\n2. Change projects page to have project summaries with project logs in subpages (and format both pages)\n3. Create containers for project summaries\n4. Create a navbar connecting pages that sits at the top of all pages on the website\n5. Start learning how to import data from excel or google sheets (for gym data) as well as displaying it and choosing what to display\n6. See if I can turn these journal entries into JSON or if there are any better methods of storing it (hopefully a r/w solution so I can create a journal entry submitter too)\n7. See if I can connect github to project logs page to display commits (and look at how I may present this data)'
  },
  {
    projectSlug: 'portfolio',
    title: 'Log 5 - A Thorough Reflection on What to Do',
    date: '2026-08-08',
    entry: 'I\'ve been thinking about where I am and where I should focus the rest of the month until classes start.\n\nSo far, I\’ve worked through courses on HTML, CSS, JavaScript, React, and Next.js, and built a portfolio site. This includes a personal bio, project summary page, and logs for my one project so far (this one!). Unfinished work includes having a backend for my journal entries as well as analyzing and displaying gym data (but fetching and processing data is complete).\nYesterday, I also created a custom macOS shortcut using Python to streamline my morning routine. \nHowever, while frontend has been a good place to start, I need to start building deeper skills that can’t be so easily replaced by AI. \n\n1. Finish and Deploy the Personal Website\nFeatures that I can finish are mostly done (remaining: dropdown menu from navbar on hover), so just deploy this to Vercel and get it done. Deployed and done is better than infinitely polishing this.\n\n2. Build a Dedicated Quote Backend\nUse FastAPI (Python) and SQLite, deployed on Railway or Render, connected to Next.js which manages and displays quotes. \nScope: Fetch all quotes, get a random daily quote, and submit a new quote.\nWhy: This provides a complete full-stack mental model, connecting a Next.js site to actual database operations. I\’ll use this to go to creating a backend for my journal entries.\n\n3. Dive into Garmin Data Analysis with Python\nGoal: Use Python libraries to fetch and analyze personal fitness data directly from my Garmin watch, generating custom visualizations. I\’ll use this to go to displaying data on my personal website.\n\n\nI\’m going to watch 3Blue1Brown’s Neural Networks video series to introduce myself to AI and ML and I\’ll see where to go from there.\n\nI\’ll also start looking into low-level C concepts (pointers, memory allocation, stack vs. heap) to prepare for CS 136 down the line.\n\nFinally, I\’ll spend some time learning Racket and functional programming fundamentals (recursion over loops, no variable mutation, functions as first-class values).'
  }
]
