---
version: 1
slug: "src-pages-templates-c-index-astro"
primary_target: "src/pages/templates/c/index.astro"
related_targets: []
---

## Scope

Alternative homepage template C, preview only at /templates/c/ (noindex, not in the sitemap, not linked from the live homepage). Mode: Persuade. Mobile-first.

## Audience, job, action

Same as the homepage: Harrogate-area homeowners and landlords who need walls or ceilings made good. Is he any good, does he cover my town, how do I get a quote. Action: call, WhatsApp, or the quote picker.

## Proof and content

Real Google reviews only (src/data/reviews.ts). Real job photos only (public/images/work, provenance in docs/photo-sources.md). No prices, no invented claims, no AI imagery shipped.

## Direction contract

THESIS: A plastering site in the visual language of restoradampproofing.com: the page ground is a plastered wall, the headline is a heavy charcoal grotesk ending in a coloured full stop, and the hero's proof is a curved wall of real finished rooms. It refuses the full-bleed photo hero with text over it.
OWN-WORLD: Grey textured plaster ground (#d8d4ce with procedural SVG noise and trowel-direction streaks, no image file), white header, charcoal ink (#26272b), a bright blue full stop (#2f6fd6) on display headings over light grounds and a warm gold stop (#e0b25a) on headings over the deep blue (#24508a) panels, peach (#f2a66b) pill buttons with charcoal text, outlined white pills on blue. Schibsted Grotesk 800 for display, set tight (-0.035em), display capped at 6rem; Schibsted Grotesk 400/500 for body. Split sections: a real photo filling one half, the deep blue panel holding the copy on the other.
STORY: The visitor reads "Plasterer in Harrogate." on the plaster wall, sees five of Nick's finished rooms on a gently curved band, reads 5.0 from 50+ Google reviews and taps Get a quote. Below: services on the blue split panel with a real job photo, reviews on the plaster ground, recent work, the quote picker, areas, about Nick, FAQs, contact.
FIRST VIEWPORT: Desktop (comp 1872x1248): white header, wordmark left, centred links, bold phone and a peach pill right; centred headline with the blue full stop; the curved five-photo band; stars, rating line and the peach "Get a quote" pill; the top of the blue split section at the fold. Phone at 390x844: header, headline over two lines, the line under it, the curved band (three photos visible, sideways scroll), stars, rating and the peach pill.
FORM: Pinned by the user, no roll. seed: none (pinned). The user said: "recreate two additional templates looking at the style of the websites above, 1 for each" with https://www.restoradampproofing.com/ as this template's reference, and "dont ask me anything just do it end to end". Approved comp: .impeccable/mocks/template-c/c3-gallery-wall.png (chosen by Claude of three, as delegated: the closest to the reference's curved photo strip), with the services split panel from c2-arch.png.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and every shipping raster carrying its provenance

## Stated decisions against the reference and comp

- The comp's AI rooms replaced with Nick's real photos; his rooms are mid-skim pink-brown, so the band reads warmer than the comp.
- The comp's phone number "01423 561 842" was invented by the image model; the real number is used.
- The reference's damp-proofing services are not Nick's launch services; the four launch services are used.
- The reference's "30 years of experience" style claims are not copied; Nick's years are unconfirmed.
- Plaster texture is drawn in CSS/SVG, not a photo or generated image.
- Band curvature follows the reference, not the comp: on restoradampproofing.com the strip is concave (outer photos taller, as if standing inside a curved wall); the comp drew it convex. The pinned reference wins.
- Services panel carries one outlined "Get a quote" pill under the list, as in c2, rather than a pill per service.
- Review counts: the copy says the newest reviews are on Nick's Google profile, because 34 of the 50+ sit on his earlier profile.
- The fixed call bar on phones hides while the hero's Get a quote button is on screen.

## Unresolved

Same open items as the homepage: docs/questions-for-nick.md.
