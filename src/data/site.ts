// Single source of truth for business facts. Anything marked [CONFIRM]
// must be checked with Nick before launch. Never invent reviews, numbers
// or accreditations.
export const site = {
  name: 'Perfectly Plastered',
  url: 'https://perfectlyplastered.uk',
  owner: 'Nick',
  phone: '+447495160499',
  phoneDisplay: '07495 160499',
  whatsapp: '447495160499', // [CONFIRM] same number as the phone
  email: '', // [ASK NICK] where form enquiries go
  baseTown: 'Harrogate',
  serviceAreas: ['Harrogate', 'Knaresborough', 'Wetherby', 'Ripon'],
  hours: 'Monday to Friday, 8am to 6pm. Weekends by appointment.', // [CONFIRM]
  facebookUrl: 'https://www.facebook.com/perfectlyplasterednl',
  googleReviewsUrl: 'https://www.google.com/maps/search/Perfectly+Plastered+07495+160499',
  // 18 reviews on Nick's own profile plus 34 on his earlier profile, all five stars.
  reviewSummary: '5.0 · 50+ Google reviews',
  analytics: {
    cloudflareToken: '',
    posthogKey: '',
    posthogHost: 'https://eu.i.posthog.com',
  },
};

export const waLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
