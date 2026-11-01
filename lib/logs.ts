export type Log = {
  projectSlug: string;
  title: string;
  date: string;
  entry: string;
}

export function getLogs(slug : string) : Log[] {
  return logs.filter(f => f.projectSlug === slug);
}

export type ListItem = { lead: string; body: string[] };
export type EntryBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: ListItem[] };

const NUMBERED = /^\d+\. /;

export function parseEntry(entry: string): EntryBlock[] {
  return entry.split('\n\n').map((block): EntryBlock => {
    if (!NUMBERED.test(block)) return { kind: 'paragraph', text: block };
    const items: ListItem[] = [];
    for (const line of block.split('\n')) {
      if (NUMBERED.test(line)) items.push({ lead: line.replace(NUMBERED, ''), body: [] });
      else items[items.length - 1].body.push(line);
    }
    return { kind: 'list', items };
  });
}


export function dayNumber(date: string, start: string): number {
  const utc = (s: string) => {
    const [y, m, d] = s.slice(0, 10).split('-').map(Number);
    return Date.UTC(y, m - 1, d);
  };
  return Math.round((utc(date) - utc(start)) / 86_400_000) + 1;
}

const shortDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });

export function formatLogDate(date: string): { iso: string; label: string; suffix?: string } {
  const iso = date.slice(0, 10);
  const [y, m, d] = iso.split('-').map(Number);
  const suffix = date.slice(10).trim().replace(/^\((.*)\)$/, '$1') || undefined;
  return { iso, label: shortDate.format(Date.UTC(y, m - 1, d)), suffix };
}

export const logs: Log[] = [
  {
    projectSlug: 'portfolio',
    title: 'Log 1 - The Beginning',
    date: '2026-07-24',
    entry: 'This is the start of me building my website in an effort to prepare for uni! I\'ve went through a 6h HTML and CSS tutorial so now I understand some of how to convert my website designs into an actual page, even if I still need to rely heavily on searching things up to remind myself of the syntax and differences between all the different displays and positions and of course syntax needed. \n\nI think my main goal for now is to rapidly learn the basics of everything needed to code a website, then slowly build one myself.\n\nNext up: Javascript.'
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
    entry: 'Big refactor today with shifting the whole repo onto Next.js framework. Still not finished with everything, but a more clear roadmap is ahead. To be honest, there\'s a lot of changes that need to be made to my code still. This might also become more like a journal with more frequent entries and goals for the near-future.\n\nHere\'s some goals for tomorrow and maybe the day after:\n\n1. Convert projects page css to tailwind css\n2. Change projects page to have project summaries with project logs in subpages (and format both pages)\n3. Create containers for project summaries\n4. Create a navbar connecting pages that sits at the top of all pages on the website\n5. Start learning how to import data from excel or google sheets (for gym data) as well as displaying it and choosing what to display\n6. See if I can turn these journal entries into JSON or if there are any better methods of storing it (hopefully a r/w solution so I can create a journal entry submitter too)\n7. See if I can connect github to project logs page to display commits (and look at how I may present this data)'
  },
  {
    projectSlug: 'portfolio',
    title: 'Log 5 - A Thorough Reflection on What to Do',
    date: '2026-08-08',
    entry: 'I\'ve been thinking about where I am and where I should focus the rest of the month until classes start.\n\nSo far, I\'ve worked through courses on HTML, CSS, JavaScript, React, and Next.js, and built a portfolio site. This includes a personal bio, project summary page, and logs for my one project so far (this one!). Unfinished work includes having a backend for my journal entries as well as analyzing and displaying gym data (but fetching and processing data is complete). Yesterday, I also created a custom macOS shortcut using Python to streamline my morning routine. However, while frontend has been a good place to start, I need to start building deeper skills that can\'t be so easily replaced by AI.\n\n1. Finish and Deploy the Personal Website\nFeatures that I can finish are mostly done (remaining: dropdown menu from navbar on hover), so just deploy this to Vercel and get it done. Deployed and done is better than infinitely polishing this.\n2. Build a Dedicated Quote Backend\nUse FastAPI (Python) and SQLite, deployed on Railway or Render, connected to Next.js which manages and displays quotes.\nScope: Fetch all quotes, get a random daily quote, and submit a new quote.\nWhy: This provides a complete full-stack mental model, connecting a Next.js site to actual database operations. I\'ll use this to go to creating a backend for my journal entries.\n3. Dive into Garmin Data Analysis with Python\nGoal: Use Python libraries to fetch and analyze personal fitness data directly from my Garmin watch, generating custom visualizations. I\'ll use this to go to displaying data on my personal website.\n\nI\'m going to watch 3Blue1Brown\'s Neural Networks video series to introduce myself to AI and ML and I\'ll see where to go from there.\n\nI\'ll also start looking into low-level C concepts (pointers, memory allocation, stack vs. heap) to prepare for CS 136 down the line.\n\nFinally, I\'ll spend some time learning Racket and functional programming fundamentals (recursion over loops, no variable mutation, functions as first-class values).'
  },
  {
    projectSlug: 'portfolio',
    title: 'Log 6 - Divide and Conquer',
    date: '2026-09-21',
    entry: 'Remember when I said "deployed and done is better than infinitely polishing this" in my last log? Yeah, that was actually Claude 🙄. I took a break in uni, and now I\'m back, and I took a look with fresh eyes, and I realized my scope for this project has been way too much. The site was trying to be two things at once: a portfolio for other people to read, and a dashboard for tracking my own numbers, and how can it be both???\n\nSo I\'m splitting it in two, basically story vs. numbers:\n\n1. Portfolio\nMy bio, project summaries, and build logs like this one. It\'s the part people actually see, and the content already exists, so it ships first (hopefully soon).\n2. Life Dashboard\nGym, running, sleep, and GitHub activity. It\'ll be public but read-only. Gym data stays in Google Sheets, running and sleep come later from manual Garmin exports and a Python script. Unsure whether this actually gets built, because I don\'t actually particularly like doing this website stuff.\n\nThe two sites only link to each other, with no shared data, but they\'ll share one design system so they still look like two parts of the same whole.'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 1 - A New Beginning (?)',
    date: '2026-09-12',
    entry: 'New project might be starting…here’s the context: I’ve been playing Clash of Clans since I was a little kid, and it’s probably my favourite mobile game of all time. But farming is super time consuming and repetitive, and I think I can automate it. The idea is search for a base -> look at how much loot it has -> attack if it’s worth it, and repeat. This is just the initial idea, though, and I’m sure it’ll all be much more complex than how I’m making it sound. I’ll start doing some research and scoping the project out. Super excited!'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 2 - Scoping It Out',
    date: '2026-09-13',
    entry: 'Okay, I’ve done some research and a little initial testing. There’s no API to interact with the game (Clash of Clans actually prohibits automation, as it should lol), so everything needs to go through my computer (computer vision then sending taps through an emulator). I’ve used BlueStacks Air to play CoC on my laptop before, so I’m familiar with how the system works. Since it’s computer vision, I plan to start with template matching buttons to identify which screen the bot is on, and have it act accordingly. I definitely have to take my time mapping out the logic for this bot, as it’ll be complicated. Also, since buildings at different levels have different looks, I’ll probably have to train a model if I want to be able to recognize buildings, so that’s super far down the line. Currently, my phases/planning for this project has been tentatively set, and I want to figure out the plumbing soon so I can develop the plan’s details more.'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 3 - A Star is Born (kinda)',
    date: '2026-09-18',
    entry: 'Alright, this first plumbing phase is all done. I ran the game in BlueStacks Air on my Mac and I’ve figure how to send taps to it over ADB. My original plan was to screenshot the BlueStacks window with mss, but capturing straight over ADB turned out to be much better. A raw screencap takes about 176 ms per frame, and because everything comes from the device, there\'s only one coordinate system (1920×1080 device pixels) instead of dealing with Retina scaling and window offsets which absolutely destroyed my brainpower when I was trying to deal with it.\n\nI also built some tools: a frame recorder and an offline replay that runs on saved screenshots. The rule I\'m setting for myself (suggested by Claude to keep the code clean) is that all the vision code has to be pure functions (image in, results out). That way I can build and test it on saved frames without the game running.\n\nNext up: reading the loot numbers (I lowkey have NO CLUE how to do this 😬).'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 4 - And the gift of sight was given',
    date: '2026-09-18 (night)',
    entry: 'Okay, the loot reader is done! Come to think of it, I think I did things out of order, because the bot can’t even get to a base yet LMAO. But anyways, it’s done - I used template matching (comparing each digit against saved images of 0-9) instead of an OCR library like Tesseract, because if the simple solution works, just use it. Most of the work was figuring out why it kept failing, and I came up with these solutions with Claude:\n\n1. Binarize first\nThe loot numbers are drawn on top of the map, so matching raw colours let the grass and buildings mess up the comparison. Converting to black and white first means only the shape of the digit is compared.\n2. The digits are tinted\nGold digits are cream and dark elixir digits are almost white, so a "is this pixel white?" test dropped whole rows at first.\n3. Pixel-perfect doesn’t exist???\nBinarizing sometimes shaves a row off a digit, so the matcher checks a couple of pixels around each spot.\n\nThe result: 96 out of 96 labelled digits read correctly, with zero misreads and the worst correct match was 0.949.\n\nBeen feeling super motivated to work on this because it actually interests me 😛. Next up: getting the bot to actually reach a base (praying this works otherwise this has all been for nothing).'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 5 - Holy smokes we have motion',
    date: '2026-09-19',
    entry: 'We have motion, I repeat, we have motion 🤑. The bot goes home → army → attack menu → scouting a base → Next → Next → End Battle → home. It doesn\'t make any decisions yet, mostly because I’m scared to mess something up right now, but it reads the loot on every base and prints it for now.\n\nThe bot works out which screen it\'s on by looking for buttons. I cropped five button images, and whichever ones it finds tell it which screen it\'s on. The order of the rules actually ended up mattering a lot, because some buttons appear on more than one screen and the home village stays visible behind the menus.\n\nThe most important rule is that the bot never taps a screen it doesn\'t recognize. Taps only accept a button the bot actually found, not coordinates I typed in (because who wants to hardcode that stuff, so inelegant), so if it\'s confused it does nothing. However, there are some like “unknown” screens, like the clouds between bases which have no buttons, as well as some surprise shop popups, so the bot tells them apart by waiting and then attempting a back press after a while if needed.\n\nFollowing Claude’s recommendation, I tested everything on saved frames and a fake device before touching the game. That proved the bot doesn\'t see buttons that aren\'t there, since each button was cropped from those same frames. The live run proved the other half: every screen was named correctly on frames it had never seen before.\n\nBut this thing is soooo slow. Capturing a frame takes 176 ms, but searching the whole screen for five buttons takes about 458 ms, so one full step runs at about 1.5 fps. THAT’s SO SLOW HOLY MY GRANDMOTHER WOULD BE BETTER AT PLAYING THIS GAME\n\nNext up: actually attacking (so tempted to raise efficiency first, but having a mvp is more important I guess).'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 6 - Cutting off the day 1s',
    date: '2026-10-01',
    entry: 'Before adding attacks, I spent some time removing things because this codebase has gotten pretty darn big. I went through the code and deleted useless things - functions that were never used, parameters that were always passed the same value, and logic branches that could never run.\n\nI also removed the back button. The plan for confusing screens was: wait, press back, then give up. But there’s almost never popups, and a random template matching and button being pressed would’ve worked anyways.\n\nI also added templates and matching for the two screens the bot needs for attacking: the battle and the results, using the Surrender, End Battle, and Return Home buttons.\n\nNext up: figuring out where troops can go.'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 7 - And the gift of sight was actually a metaphor for being blind',
    date: '2026-10-03',
    entry: 'Before the bot can attack, it has to know where it\'s allowed to drop troops, and that’s where the light red no-deploy zone comes in. The worst thing is that if you try to place a troop inside, there\'s no error and no feedback, and the troop just doesn\'t get placed, so the bot needs to know where it can place troops.\n\nThis took more attempts than anything else so far:\n\n1. Hardcode the points\nThe easiest idea was to pick points around the edge once and reuse them. That doesn\'t work because different bases have different outlines. It has to be detected every time.\n2. Find the grass\nNext I tried thresholding the grass colour to find where the map is. But even the grass tint changes from base to base, so no single colour range worked.\n3. Straight lines\nThe red outline looked like long straight lines, and Claude recommended trying a Hough line detector and keeping all the straight segments >= 250 px long. It worked on the three frames I tuned it on, which all happened to have clean, straight outlines, but it fell apart so quickly on the first live run, when offset buildings resulted in diagonal zigzag steps.\n\nI’m too tired to deal with this anymore, gotta give this a break and look at this with fresh eyes. All I know is that this is wayyy harder than I expected.'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 8 - We\'re So Back - Sight restored',
    date: '2026-10-05',
    entry: 'Ok, we are so back. Here’s what finally ended up working: looking for the line\'s shape instead of a perfect line. The bot measures how red each pixel is, and then removes anything thicker than 9×9 pixels so only thin red lines remain. Pieces spanning less than 150 px, like decorations and specks on the shore, get thrown out. Then rays go out every 2° from the centre of the screen. Every wall is inside the outline, so the outermost red hit on each ray is the outline, and the bot steps 45 px past it into the deploy zone. BANG!\n\nOnto the deployment now!'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 9 - Back in the Dark',
    date: '2026-10-05 (night)',
    entry: 'I forgot that I still have to figure out how to actually tap the troops before I can go ham all over the screen. For those who haven’t played, there’s a row of your troops at the bottom of the screen, and the bot has to tap a card before dropping that troop, so it needs to know where each card is.\n\nI first tried telling cards apart by how they look, but hero cards have dark art and spell cards are mostly white, so splitting by brightness or saturation cut cards in half. The art is different on every card, but the outline is the same.\n\nSo, the bot looks for vertical edges that run the full height of a card, pairs edges that are 125-140 px apart (one card width), and chains them from the left side of the deck. The first card starts between x=120 and x=170, and the gap between cards is at most 45 px.\n\nThe bot can now see where to drop and what to drop. Next up: actually dropping it (will I finally be able to do this or will I find another obstacle I haven’t considered?)'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 10 - I\'m Wide Awake / I Feel so Close',
    date: '2026-10-09',
    entry: 'It’s like life getting created. It farms now. On the 7th it dropped its first troops (one of the big firsts of my life), using only the first card. Today the whole loop went live: scout bases until the loot clears the threshold, deploy the whole army, wait out the battle, read how much loot it earned, and return home.\n\nToday was a long one, holy:\n\n1. Real tests\nI moved all my saved-screenshot checks into a pytest suite: screen names, exact loot readings, deploy points, card slots, and the whole loop against a fake device and a fake clock.\n2. Reading "You got"\nThe result screen shows how much loot the battle earned, in yet ANOTHER digit size. So guess what - I had to do it all again (except this time I had experience and I just generalized the first one). I held some screenshots back (training data) when cutting the new templates so I could test them, and it all works kapeesh.\n3. Whole army\nThe army is written out in the code, slot by slot. Troops get spread across the 24 deploy points, heroes get one drop and use their ability 10 seconds later, and I haven’t had it do spells yet because I’m not even sure where they should go - maybe implement this down-the-line when I have building detection.'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 11 - Too Fast for Its Own Good',
    date: '2026-10-09 (night)',
    entry: 'Okay, two things I improved on recently.\n\n1. Speed\nSearching the whole screen for every button took 458 ms per frame. Buttons never move, so each one is now only searched near where it always appears. Seven buttons now take about 12 ms which is soooo much faster, but the actual image recording is somehow slower (still, net ~5fps now which is awesome).\n2. A broken button\nRight after that, the home screen Attack button stopped being found, like wtf. The template included a little map icon, but I think they changed it to a different pose, which tanked the score to ~0.76. I re-cut it to just the "Attack!" lettering and it scores 1.000 again.\n3. Reading too early\nBecause I’m now TOO EFFICIENT (??), the loop was still running on every frame, but at ~5fps instead of ~1.5fps, so it’s too fast (the game needs to load). It revealed two bugs - the loot summary counts up from 0 (think of like a slot machine almost), so sometimes it would catch the 0/0/0 frame and say I got no loot; and secondly, the loot panel fades in with the clouds, so sometimes it would think the base has no loot, but there were just the loading-in-clouds in the way. So now, after a tap, it waits for a new screen to hold for two frames before acting again.\n\nHoly smokes those were unexpected bugs. Things really can break in the funniest ways. It wasn’t funny when she broke my heart though. (relax, it’s a joke).'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 12 - Another Day in Paradise',
    date: '2026-10-13',
    entry: 'Phase 3 is done, and I’m super proud of it, but there’s also a long way to go. Man, I am so much smarter than this bot. Here\'s what\'s coming:\n\n1. Building detection (Phase 4)\nRight now the bot only looks at loot, so it has no idea whether a base is actually easy to attack. I want to train a small YOLO model to find defenses, collectors, storages, and walls. First I need to collect screenshots. Then the plan is to label some, train a weak model, let it pre-label the next batch, fix its mistakes, and retrain. This is the first time machine learning enters the project, and I am simultaneously scared and excited.\n2. Decision layer (Phase 5)\nThis is the real goal of the project: combine buildings and loot into a score that decides which bases are worth attacking and which side to attack from, instead of using a fixed loot threshold.\n3. Smarter deploys\nRight now every card is spread around the whole base, the army is hardcoded slot by slot, spells are never cast, and hero abilities fire on a timer. Eventually the bot should read troop counts and card types off the cards themselves, aim spells at buildings, and pick a side to attack from.\n\nAlright, as you can tell, big things are coming. The training wheels are going to be coming off. Phase 4 is where the project goes from following rules I wrote to learning from data, so it\'s going to be a big jump, but, uh, I’m not afraid of falling, because to fall means to have once soared 🔥. But as a final note, sadly, this project is gonna have to go on break while I actually learn how to do all this stuff lmao so bye for now.'
  },
  {
    projectSlug: 'coc-bot',
    title: 'Log 13 - Spam vs Skill',
    date: '2026-10-31',
    entry: 'I\'m back from Hack The Valley and CalHacks, and Phase 4 is done! The bot can now see buildings: I collected scout frames, labelled them, trained a YOLO model, and plugged it into the bot. It finds all 8 loot-building classes with 0.987 recall on frames it had never seen, and it only takes about 18 ms per base.\n\nBut first, the game changed its UI on me (of course). The “Attack!” button became "Battle" and the loot panel moved up 14 px, so I had to cut a new template and shift the loot reader before anything else worked.\n\nHere\'s how the detector came together:\n\n1. Data\nThe bot saved a frame for every base it judged, and I ran it for 276 unique bases.\n2. Labelling the lazy way\nI tested out auto-labelling the first batch with various models, and surprisingly GPT-6.1 Terra outperformed 6.1 Astra, 6.1 Sol, Opus 5.5, and Gemini Argon. So, I had GPT-6.1 Terra auto-label 100 frames, which I reviewed (it still kinda sucked). I then trained v1, let v1 pre-label the other 176, fixed its mistakes, and trained v2. Way faster than reviewing all 276 by hand, but make no mistake - the manual reviewing was still slow.\n3. One of each\nYOLO26 sometimes doubled the Town Hall, Clan Castle and Dark Elixir Storage (there\'s only one of each, buddy), so the bot keeps only the most confident box.\n\nAnd of course, things went wrong:\n\n1. The scary confusion matrix\nIt had a massive "background" column and I almost thought it was all over, but that\'s because validation runs at a confidence of 0.001. At the bot\'s real threshold (0.25) it was fine.\n2. Fake drills\nThe auto-labeler kept calling cannons, bomb towers, and laboratories "drills". Manual review added 19 real drills, and v2\'s drill recall is now 0.958.\n\nBiggest lesson: transfer learning is kind of magic. Starting from pretrained weights, 100 labelled frames got to mAP50 0.99.\n\nNext up: Phase 5, the decision layer. About 80-90 s of every battle is dead time after the loot stops coming in, so first I\'m ending battles early, then turning the base log (which I\'ll collect) into an actual score for which bases are worth attacking.'
  },
  {
    projectSlug: 'magnus-bot',
    title: 'Log 1 - Two Arms and a Chessboard',
    date: '2026-11-01',
    entry: 'For Cal Hacks 13.0, Alex Meng, Tom Zhang, Aurick Anwar and I built Magnus Bot: two robot arms that play chess against you on a real board, passing pieces to each other through a shared square when one arm can\'t reach. The pitch and demo video are on the Devpost, so this is more about what happened behind the scenes.\n\nMy part was the motion side of the arm controller, plus helping with the vision model:\n\n1. Reach map\nA straight-down grip could reach 48 of 64 squares at grasp height, but zero at the 14 cm carry height (you have to lift pieces over the king somehow). That report is why Alex built the tilted-gripper IK.\n2. Motion\nMin-jerk trajectories and a simulated executor that plans the whole move first, then runs one arm at a time.\n3. Calibration tools\nOne arm\'s servo IDs were absolutely scrambled, so opening the jaws reported as moving the elbow 💀.\n4. Vision\nCollecting, labelling and training the RF-DETR model that reads the board.\n\nThe hardest part was getting the gripper to land where the math said it would. Alex ended up using a green-painted fingertip and hooking it up to Claude, to show that the motors were within 0.5° of what we told them, so the problem was our geometry model, not the hardware. Fitting the arm geometry cut placement error from 9.0 to 3.0 mm.\n\nIn the end, it played all four White moves of Scholar\'s mate on a real board. Huge shoutout to Alex, who built most of the core. Improvements: better hardware (better repeatability, longer arms), more robust controller, faster piece movement.'
  },
  {
    projectSlug: 'allos',
    title: 'Log 1 - Washing Your Hands Didn\'t Clean the Tongs',
    date: '2026-11-01',
    entry: 'At Hack the Valley 11, Shawn Xiong, David Liu and I built Allos: a browser app that watches a food-prep station with one overhead webcam and flags when a peanut-allergy meal might\'ve been exposed. The pitch was in the title: if your hands touch peanuts and then the tongs, washing your hands doesn\'t help the next meal those tongs touch.\n\nI built the computer vision (hand and tong tracking, plus detecting contacts and hand washes) and helped with the engine and the dashboard. Shawn did the ESP32 buzzer and its Bluetooth link, and David built the engine core that tracks how exposure spreads as well as the physical side (scaffolding and wiring the ESP32).\n\nThe hardest problem was hover vs. touch. With one camera looking straight down, tongs hovering over a plate look exactly like tongs touching it, which triggered false alerts. The fix: calculate depth with the apparent ArUco marker size.\n\nWe never got to washing-motion detection (a stretch goal), and there are no real accuracy numbers yet. If we kept going: measure accuracy on actual kitchen footage, and use a second camera or depth sensor instead of guessing height from marker size.'
  },
  {
    projectSlug: 'spotify-playlist-analysis',
    title: 'Log 1 - Picking It Back Up',
    date: '2026-11-01',
    entry: 'This project technically started in August, when I spent four days (Aug 28-31) writing a Python pipeline to figure out what\'s actually in my 700-song playlist, and then never touched it again lol. So this is Log 1, but really it\'s a restart.\n\nThe idea: group my playlist by genre and chart what\'s in it. Spotify\'s genre data is badly maintained, and the Exportify export doesn\'t even have a genre column, so I pull artist tags from Last.fm instead and map them into buckets with pandas. (Spotify also stopped giving new apps audio features like energy and tempo in 2024, so yay even less data to work with)\n\nWhere it stands: 702 songs (although my playlist export hasn’t been updated), 568 artists and 476 distinct tags. The charts work (release year, when songs were added, top artists, length, popularity), but the buckets are useless right now. Mainstream holds 508 of 693 tagged songs (73%), and 87 songs don\'t land in any bucket at all 😭.\n\nHere\'s what\'s next:\n\n1. Stop caching failed lookups\n30 artists got cached with no tags and never retried, including RÜFÜS DU SOL, which is criminal (this is Claude’s suggestion, it really likes consistency and edge cases).\n2. Fix the buckets\nPlay around with the tag buckets and see how far 508 / 87 moves, as well as how “good” the song buckets are.\n3. Grab my streaming history for more data\nYes Claude, I’ll request it from Spotify soon.'
  },
]
