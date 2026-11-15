---
name: Perfectly Plastered
description: A local plasterer's site where a real job photo, a navy band and a gold-accented quote picker do the persuading.
colors:
  navy: "#0a2740"
  navy-ink: "#10213f"
  navy-deep: "#071b2d"
  navy-soft: "#c3cad5"
  gold: "#b8985c"
  gold-bright: "#c6a97d"
  gold-deep: "#8f7139"
  gold-tint: "#f6efe2"
  paper: "#f7f7f7"
  white: "#ffffff"
  mist: "#eef0f3"
  hairline: "#e3e5e9"
  line: "#c9cbd1"
  rule: "#dde0e5"
  body: "#2b3442"
  muted: "#4c5566"
  error: "#a12a1e"
typography:
  display:
    fontFamily: "Secular One, Biryani, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1.7rem + 2.3vw, 3.625rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Zain, Biryani, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.6rem + 1.2vw, 2.625rem)"
    fontWeight: 700
    lineHeight: 1.08
  title-lg:
    fontFamily: "Zain, Biryani, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.35rem + 0.6vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: "Zain, Biryani, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.3rem + 0.35vw, 1.625rem)"
    fontWeight: 700
    lineHeight: 1.15
  lede:
    fontFamily: "Biryani, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.07rem + 0.25vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Biryani, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.02rem + 0.15vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
  body-strong:
    fontFamily: "Biryani, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.02rem + 0.15vw, 1.125rem)"
    fontWeight: 600
    lineHeight: 1
  label:
    fontFamily: "Biryani, system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem)"
    fontWeight: 600
    lineHeight: 1.3
  wordmark:
    fontFamily: "Biryani, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.8vw, 1.625rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
rounded:
  focus: "4px"
  control: "8px"
  card: "10px"
  pill: "99px"
spacing:
  gutter: "clamp(1.25rem, 0.9rem + 1.8vw, 3.5rem)"
  section: "clamp(3.5rem, 2.6rem + 3.5vw, 6rem)"
  stack: "clamp(1rem, 0.9rem + 0.5vw, 1.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.gold-bright}"
    textColor: "{colors.navy-ink}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  button-secondary-hover:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.navy-ink}"
  button-compact:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "44px"
  quote-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.card}"
    padding: "14px 14px 16px"
  quote-option:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.control}"
    padding: "0 14px 0 16px"
    height: "48px"
  quote-option-selected:
    backgroundColor: "{colors.gold-tint}"
    textColor: "{colors.navy-ink}"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
  review-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.body}"
    rounded: "{rounded.card}"
    padding: "18px 20px 20px"
  area-tile:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "16px 18px"
  site-header:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    height: "64px"
  action-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy-ink}"
    padding: "10px 12px"
---

# Design System: Perfectly Plastered

## Overview

**Creative North Star: "The Freshly Skimmed Wall"**

A well-built local trade site, made to the craft level of the best plastering and roofing sites rather than to the trade-site template. The surface is the product's promise: flat, even, cleanly edged, nothing proud of the wall. Light grey paper carries the page; a deep navy band is the one heavy surface, and warm gold is the trowel mark that says "act here" or "this is proven". Every persuasive job is done by Nick's real photos and real Google reviews, never by decoration.

The page is mobile first and quote led. On a phone the first screen is header, a real job photo, a navy band with the H1 and the five gold stars, and the white quote card already open at step one, with a fixed call and WhatsApp bar under the thumb. On desktop the same hero splits into two columns: photo left, navy band with the card right. Below the hero the rhythm is calm and regular: paper sections on a fluid section padding, one navy band for the service areas, a darker navy footer.

Density is moderate and legible. Type and spacing sit on a fluid scale (body 17px on a phone to 18px on desktop) at the user's instruction that the comp's sizes were too small on phones. The system rejects dark mode, the Fraunces font, AI imagery of any kind, and prices.

**Key Characteristics:**
- Light paper ground with one navy surface family (hero band, areas band, footer) used as bands, never as a page theme.
- Gold reserved for primary actions, stars, ticks, progress and selection.
- Real job photography as the only imagery.
- The three-step quote picker as the signature component, opened in the hero.
- Flat by default: one soft navy-tinted shadow, used only on the quote card and the open mobile menu.
- Fluid type and spacing tokens; no fixed breakpoint type jumps.

## Colors

A restrained navy and warm-gold palette on near-white paper, cool greys for structure.

### Primary
- **Harrogate Navy** (navy): the hero band, the service-areas band, header text and link colour, the browser theme colour. The brand's weight.
- **Ink Navy** (navy-ink): text on gold buttons, headings in paper sections, the quote card's text. Slightly bluer and deeper than Harrogate Navy so headings read as ink, not as a surface.
- **Night Navy** (navy-deep): the footer only, one step below the bands so the page ends heavier than it starts.
- **Slate Haze** (navy-soft): secondary text on navy (area notes, footer copy).

### Secondary
- **Trowel Gold** (gold): primary buttons, star ratings, promise ticks, progress segments, the selected option border, focus rings, text selection.
- **Bright Gold** (gold-bright): primary button hover, the review card border.
- **Burnished Gold** (gold-deep): the filled centre of a selected radio, FAQ plus icons on paper. Use where gold must read against light surfaces.
- **Gold Wash** (gold-tint): the background of a selected quote option.

### Neutral
- **Paper** (paper): page ground and the action bar.
- **White** (white): the quote card, review cards, header, secondary buttons, form fields.
- **Mist** (mist): hover fill on icon and secondary buttons, light text on navy, nav dividers.
- **Hairline** (hairline): header, mobile nav and action bar borders.
- **Line** (line): borders of quote options and form fields.
- **Rule** (rule): section dividers in the services list and FAQ.
- **Body Slate** (body): running text.
- **Muted Slate** (muted): step labels, hints, photo captions.
- **Brick** (error): form validation messages only.

### Named Rules
**The Gold Means Go Rule.** Gold marks an action, a rating or a selection. It is never used for body text, section backgrounds or decoration. If it is gold, it can be tapped, or it is a star or a tick.

**The Navy Band Rule.** Navy appears as full-width bands (hero band, areas band, footer), never as cards floating on paper and never as a page-wide dark theme. Light mode only.

## Typography

**Display Font:** Secular One (with Biryani, system-ui)
**Heading Font:** Zain 700 (with Biryani, system-ui)
**Body Font:** Biryani 400, 600, 700 (with system-ui)

**Character:** Secular One gives the H1 a sturdy, slightly rounded sign-writer's voice; Zain's compact bold carries section and card headings without shouting; Biryani is open and friendly at body size. Self-hosted woff2, Latin subset, `font-display: swap`; Secular One and Biryani 400 are preloaded.

### Hierarchy
- **Display** (Secular One 400, 34px to 58px fluid, line-height 1.04, -0.01em): the H1 only, set on navy in near-white, balanced wrapping. One per page.
- **Headline** (Zain 700, 30px to 42px, 1.08): section H2s, balanced wrapping.
- **Title large** (Zain 700, 24px to 30px, 1.1): the quote card's step question ("What needs doing?").
- **Title** (Zain 700, 22px to 26px, 1.15): service names, area town names.
- **Lede** (Biryani 400, 18px to 20px, 1.6): the sentence under a section heading, max 60ch.
- **Body** (Biryani 400, 17px to 18px, 1.6): running text and review quotes, max 60 to 65ch. Form inputs never drop below 16px so iOS does not zoom.
- **Body strong** (Biryani 600, body size): buttons, option rows, FAQ questions, nav links.
- **Label** (Biryani 600 or 400, 14px to 15px): field labels, step label, hints, captions, review attribution.
- **Wordmark** (Biryani 700, 20px to 26px, -0.01em): "Perfectly" in navy, "Plastered" in gold.

### Named Rules
**The Fluid Scale Rule.** Every text size comes from the `--fs-*` clamp tokens. Phone sizes are the floor (body 17px); do not set fixed pixel sizes on text, and do not add breakpoint-specific type sizes.

**The Three Voices Rule.** Secular One speaks once per page (the H1), Zain for headings, Biryani for everything else. No fourth family.

## Layout

Mobile first, single column below 600px. Horizontal padding is the fluid gutter (20px to 56px); sections stack on the fluid section padding (56px to 96px) with the stack token (16px to 24px) between a heading block and its content. Content sits in a centred 1120px container.

- **Hero (phone):** full-width photo at a 768:310 crop, then the navy band holding H1, stars, rating, the quote card and three ticked promises. Sized so the card's Next button sits above the fixed action bar on a 390x844 phone.
- **Hero (960px and up):** two columns, photo 1.1fr and navy band 1fr on a navy background; the photo fills the column height (min 620px); the band content is capped at 620px and vertically centred.
- **600px and up:** reviews two across, work grid three across, area tiles four across, contact buttons side by side.
- **960px and up:** header grows to 76px with inline nav and a gold phone button; services two across with a 56px column gap; work grid four across; About becomes image and text side by side; the fixed action bar is removed.
- **Fixed action bar (below 960px):** Call (gold, 1.55fr) and WhatsApp (outlined, 1fr) pinned to the bottom with safe-area padding; the body reserves its height.
- **Sticky header:** 64px on phones, with scroll padding of 80px for anchor jumps.

## Elevation & Depth

Flat by default. Depth comes from tonal contrast (white cards on paper, a white card on a navy band) and hairline borders. One shadow exists, a soft navy-tinted lift, and it marks the two surfaces that sit above the page: the quote card and the open mobile menu.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 8px 28px rgb(10 39 64 / 0.16)`): the quote card on the navy band; the open mobile nav panel.

### Named Rules
**The One Lift Rule.** Only surfaces that float over other content (the quote card, menus) get the shadow. Review cards, service rows, area tiles and photos stay flat and use borders or tone instead.

## Shapes

Gently rounded, never pill-shaped controls. Controls (buttons, option rows, fields, work photos) use an 8px radius; containers (quote card, review cards, area tiles, the About photo) use 10px. The progress segments are the only fully rounded shape. Borders are 1px greys for structure, 1.5px for button outlines and radio circles. Radio selection is drawn as a thick gold-deep ring (6px border) rather than a filled dot. Work photos crop to 4:5 portrait tiles; the About photo to 3:2.

## Components

### Buttons
Solid, square-shouldered, generous touch targets.
- **Shape:** gently rounded (8px), minimum height 52px (54px in the action bar, 44px for the compact service "Quote" button).
- **Primary (gold):** Trowel Gold fill, Ink Navy text, Biryani 600, 22px side padding; icons at 1.2em with a 10px gap. Used for Call, Next and Send to Nick, and the desktop header phone.
- **Hover / Active:** hover lightens to Bright Gold over 0.2s; press nudges down 1px over 0.15s.
- **Secondary (outlined):** White fill, Ink Navy text, 1.5px Harrogate Navy border; hover fills Mist. Used for WhatsApp and the service Quote buttons.
- **Ghost:** no fill, 12px padding; the quote card's Back arrow only.

### Inputs / Fields
- **Style:** white field, 1px Line border, 8px radius, 12px by 14px padding, label above in Label weight 600.
- **Focus:** 3px Trowel Gold outline at 1px offset, border turns gold.
- **Error:** one Brick message under the form, announced with `role="alert"`; fields themselves do not change colour.

### Cards / Containers
- **Review card:** white, 1px Bright Gold border, 10px radius, 18px by 20px padding; five small gold stars, quote in body size, attribution as Label ("Name · Google review"). Real Google reviews only.
- **Area tile:** on the navy band, 1px translucent white border (20% white), 10px radius; town in Title, distance note in Slate Haze.
- **Service row:** not a card. A two-column row (title and compact Quote button, then description) between Rule hairlines.

### Navigation
- **Header:** white, sticky, hairline bottom border. Wordmark left. On phones: phone and menu icon buttons (48px square, Mist hover); the menu opens a full-width white panel with the card lift and Biryani 600 links divided by Mist rules. From 960px: inline links with a 28px gap and a gold phone button.
- **Footer:** Night Navy, Label size text in Slate Haze, white links.

### FAQ
Native `details` rows between Rule hairlines; question in Biryani 600 Ink Navy; a Burnished Gold plus icon rotates 45 degrees when open (0.3s, expo out).

### Quote Picker (signature component)
The page's one move and the site's primary conversion path; it replaces the usual headline-and-two-buttons hero.
- **Container:** white card, 10px radius, card lift, sitting on the navy band.
- **Progress:** three equal 5px pill segments, grey (#d6d8de) until reached, then Trowel Gold; colour eases over 0.4s.
- **Step label:** "Step 1 of 3" in Muted Slate Label, announced politely.
- **Step heading:** the fieldset legend in Title large.
- **Option rows:** 48px tall, 1px Line border, 8px radius, label left and a 20px radio circle right. Hover darkens the border to navy; selected turns the border gold, the fill Gold Wash and the radio into a thick Burnished Gold ring.
- **Behaviour:** tapping an option advances to step 2 after 180ms, so Next is not needed to start; arrow keys browse without advancing. Each step slides in from 14px right over 0.45s. Steps: job, then town and details, then name and phone. The final button reads "Send to Nick" and opens WhatsApp prefilled until a delivery route is chosen.
- **Pairing:** service "Quote" buttons elsewhere preselect their job in the picker.

### Promise list
Three short lines under the quote card on navy, each led by a 22px gold circle tick with a navy check. Only promises the reviews support.

## Do's and Don'ts

### Do:
- **Do** use only Nick's real job photos for imagery, cropped with `object-fit: cover` (4:5 work tiles, 3:2 About, 768:310 phone hero).
- **Do** keep gold for actions, stars, ticks, progress and selection (The Gold Means Go Rule).
- **Do** take every size from the fluid tokens: `--fs-*` for type, `--gutter`, `--section` and `--stack` for space.
- **Do** keep touch targets at 48px or more, and the fixed Call and WhatsApp bar on every page below 960px.
- **Do** open the quote picker in the first viewport of any page that asks for an enquiry.
- **Do** use navy only as full-width bands and the footer (The Navy Band Rule).
- **Do** keep motion short and eased out (`cubic-bezier(0.16, 1, 0.3, 1)`), and turn it off under `prefers-reduced-motion`.

### Don't:
- **Don't** use AI-generated imagery anywhere on the site, decorative or otherwise; every photo is Nick's own work.
- **Don't** build a dark mode or a dark page theme. Light mode only.
- **Don't** use the Fraunces font, or add a fourth typeface.
- **Don't** show prices anywhere.
- **Don't** put shadows on review cards, service rows, tiles or photos (The One Lift Rule).
- **Don't** replace the quote picker with a headline and two buttons over a photo.
- **Don't** show reviews, ratings or claims that are not on Nick's Google profiles.
