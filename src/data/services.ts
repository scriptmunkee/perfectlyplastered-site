// Launch services. `id` values are quote-picker values and future page slugs; keep them stable.
export const services = [
  {
    id: 'skim',
    pick: 'Skim a room',
    title: 'Plastering and skimming',
    text: 'Walls and ceilings skimmed smooth and ready to paint, from a single wall to a whole house. Coving put back where it belongs.',
  },
  {
    id: 'artex',
    pick: 'Artex ceiling',
    title: 'Artex removal and covering',
    text: 'Swirls and stipple boarded or skimmed over for a flat, modern ceiling. Nick checks what you have before he quotes.',
  },
  {
    id: 'ceiling-repair',
    pick: 'Ceiling repair',
    title: 'Ceiling repairs',
    text: 'Burst pipe, leak or a ceiling that has cracked and sagged. Damaged sections cut out, boarded and skimmed to match.',
  },
  {
    id: 'media-wall',
    pick: 'Media wall',
    title: 'Media walls',
    text: 'A built-in TV wall framed, boarded and finished smooth, sized to your room and your screen.',
  },
] as const;

export const areas = [
  { town: 'Harrogate', note: 'Home patch' },
  { town: 'Knaresborough', note: 'About 3 miles' },
  { town: 'Wetherby', note: 'About 8 miles' },
  { town: 'Ripon', note: 'About 11 miles' },
];

export const work = [
  { file: 'living-room-replaster', caption: 'Living room walls and ceiling, fresh skim' },
  { file: 'bedroom-walls-ceiling', caption: 'Bedroom replastered, walls and ceiling' },
  { file: 'chimney-breast-skim', caption: 'Chimney breast skimmed' },
  { file: 'curved-stairwell-ceiling', caption: 'Curved stairwell ceiling' },
  { file: 'landing-walls', caption: 'Landing walls replastered' },
  { file: 'kitchen-ceiling-skim', caption: 'Kitchen ceiling skimmed' },
  { file: 'hallway-wall-skim', caption: 'Hallway wall skimmed' },
  { file: 'ceiling-skim-over-old-plaster', caption: 'Ceiling skimmed, walls next' },
];
