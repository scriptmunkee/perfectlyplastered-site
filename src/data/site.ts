// Single source of truth for business facts. Anything marked [CONFIRM]
// must be checked with Nick before launch. Never invent reviews, numbers
// or accreditations.
export const site = {
  name: 'Perfectly Plastered',
  url: 'https://perfectlyplastered.uk',
  owner: 'Nick', // [CONFIRM] surname for About page and schema
  phone: '+44 7495 160499', // [CONFIRM] still the main number
  phoneDisplay: '07495 160499',
  email: '', // [CONFIRM]
  baseTown: 'Harrogate', // [CONFIRM]
  serviceAreas: ['Harrogate', 'Leeds', 'York'], // [CONFIRM] full list and radius
  hours: 'Mon to Fri 08:00 to 18:00, weekends by appointment', // [CONFIRM]
  facebookUrl: '', // [CONFIRM]
  googleBusinessProfileUrl: '', // [CONFIRM]
  analytics: {
    cloudflareToken: '', // set when the Web Analytics site is created
    posthogKey: '', // separate PostHog project per site
    posthogHost: 'https://eu.i.posthog.com',
  },
};
