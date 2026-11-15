// Real Google reviews from Nick's profile (read 15 Nov 2026), quoted as written.
// Do not add reviews from Tom Leggett or Trent: conflict of interest.
export interface Review { name: string; text: string; job?: string }

export const reviews: Review[] = [
  {
    name: 'Emma H.',
    job: 'Three bedrooms',
    text: 'Nick plastered three bedrooms at my house, fantastic work, clean, no mess.',
  },
  {
    name: 'Robert J.',
    job: 'Full bedroom, walls and ceilings',
    text: 'Nick did a great job. Plastered a full bedroom, walls and ceilings. Arrived on time did a very professional job, tidied up and didn\'t leave any mess. Would definitely recommend.',
  },
  {
    name: 'Luke A.',
    text: 'Nick at Perfectly Plastered has done a couple of jobs for me over the past few years, fantastic work and brilliant person, makes even the roughest of walls look brand new.',
  },
  {
    name: 'Laura D.',
    job: 'Rising damp and replastering, 1900 terrace',
    text: 'Nick and the team went above and beyond when plastering and treating rising damp in our 1900 terraced house. The quality of their work is fantastic, they were meticulous throughout and made sure every detail was perfect before finishing.',
  },
  {
    name: 'Dan H.',
    job: 'Ceiling repair, then artex removal',
    text: 'Nick repaired my ceiling after a burst pipe. We were so happy with not just the quality of his work but his general demeanour and how well spoken he was, that we had him back to remove an artex ceiling.',
  },
  {
    name: 'Vicky H.',
    text: 'Arrived onsite everyday on time, even worked Saturday to get it finished for us. The quality of the work is amazing, seriously! What he managed to achieve surpasses all of my expectations.',
  },
  {
    name: 'Carla T.',
    job: 'Hallway wall repair',
    text: 'Nick helped us fix our hallway wall, which was literally about to crumble! He did an amazing job, with excellent communication and a really quick response.',
  },
  {
    name: 'Lauren K.',
    job: 'Media wall and living room',
    text: 'He built me a media wall and plastered my full living room looks amazing. Would definitely use his services again.',
  },
];
