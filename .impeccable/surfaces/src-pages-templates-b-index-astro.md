---
version: 1
slug: "src-pages-templates-b-index-astro"
primary_target: "src/pages/templates/b/index.astro"
related_targets: []
---

## Scope

Alternative homepage template B, preview only at /templates/b/ (noindex, not in the sitemap, not linked from the live homepage). Mode: Persuade. Mobile-first.

## Audience, job, action

Same as the homepage: Harrogate-area homeowners and landlords who need walls or ceilings made good. Is he any good, does he cover my town, how do I get a quote. Action: call, WhatsApp, or the quote picker.

## Proof and content

Real Google reviews only (src/data/reviews.ts). Real job photos only (public/images/work, provenance in docs/photo-sources.md). No prices, no invented claims, no AI imagery shipped.

## Direction contract

THESIS: A plastering site in the visual language of the Digital Scientists "websites for plasterers" page: a bright product-site hero with an ultra-heavy tight headline, pill buttons and chips, and soft floating proof cards over a real job photo. It refuses the dark-photo-with-overlay trade hero.
OWN-WORLD: Near-white ground fading to a faint lavender-blue (#fbfbfc to #f4f5fd), near-black ink (#12131a), indigo (#3340c4) as the one accent for the town word, buttons, chips and links, gold (#c2922f) for stars only. Gabarito 900 for the display, set tight (-0.04em); Figtree for body. Pill buttons (999px), pill chips with a plus mark, big rounded cards (24px) with a soft diffuse shadow. A full-width static strip naming the four services between bullet dots.
STORY: The visitor reads "Plasterer in Harrogate." with Harrogate in indigo, sees Nick's real finished room with a real review and the covered towns floating on it, taps Call or WhatsApp. Below: a three-step "how it works" row, a services row of photo cards, reviews, recent work, the quote picker in a big white card on a pale indigo band, areas, FAQs, contact.
FIRST VIEWPORT: Desktop (comp 1872x1248): wordmark left, nav and an indigo "Get a quote" pill right; headline over two lines left, line under it, solid indigo "Call 07495 160499" and outlined "WhatsApp a photo" pills, five chips; tall rounded photo right with a review card over its top-left edge and a towns card over its bottom-right edge; the service strip at the fold. Phone at 390x844: header, headline, line, both pills, chips, then the photo with its floating cards starting above the fold.
FORM: Pinned by the user, no roll. seed: none (pinned). The user said: "recreate two additional templates looking at the style of the websites above, 1 for each" with https://www.digital-scientists.co.uk/pixel-perfect/websites-for-plasterers/ as this template's reference, and "dont ask me anything just do it end to end". Approved comp: .impeccable/mocks/template-b/b1-split-photo.png (chosen by Claude of three, as delegated: closest to the reference's split hero with floating notification cards).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and every shipping raster carrying its provenance

## Stated decisions against the reference and comp

- No small caps label or line above headings: the reference uses kicker labels; the craft floor bans them.
- No gradient text: the reference fades its headline into blue; here the town word is solid indigo.
- No gradient icon tiles or same-size icon cards: the reference's three icon cards become photo cards of Nick's real jobs.
- No phone mockup: the reference sells websites; a plasterer's proof is the finished room, so the hero holds a real photo.
- Hero photo: the comp's AI room replaced with Nick's real photo (bright-room-skim.webp).
- The comp's "Patch repairs" and "Full room plastering" strip words replaced with the four launch services.
- The reference's strip scrolls; here it holds still. The detector flags an auto-scrolling marquee as slop (content half hidden at any moment), and four words fit on one line at desktop.
- Review counts: the copy says the newest reviews are on Nick's Google profile, because 34 of the 50+ sit on his earlier profile.
- The fixed call bar on phones hides while the hero's own Call and WhatsApp buttons are on screen, so one screen never shows four buttons for two actions.

## Change, 16 Nov 2026: review wall

The user chose B and asked: "Is there anything we can do to make the reviews pop more like this (as an example, obvs ours are google reviews)", pointing at a scattered wall of message screenshots. The reviews section is now a pile of all eight real Google reviews set as Google-review-style cards (initial avatar, name, "Google review", stars, text, job tag), each at its own slight tilt and offset, straightening and lifting on hover (static under reduced motion). Four columns on desktop, two on tablet, one alternating column on phone. No Google logo is drawn; the cards are the reviews' text, not screenshots.

## Unresolved

Same open items as the homepage: docs/questions-for-nick.md.
