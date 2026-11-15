# perfectlyplastered.uk

Website for Perfectly Plastered, a plastering business owned by Nick. Built and maintained by Chris (Ascend Digital Marketing) through Claude. Same infrastructure as christopher-kelly.co.uk: static Astro site in GitHub, served by a Cloudflare Worker with static assets, built by Workers Builds on every push to `main`.

## Status
Order of work:
1. Brief: done, see PRODUCT.md (open items in docs/questions-for-nick.md)
2. Design direction: done (standard trade site, quote-led comp). Contract in .impeccable/surfaces/
3. Homepage: built. Next: service pages, town pages, contact
4. Cloudflare Worker, analytics, Search Console, domain cutover

## Design skills in this repo
- `.claude/skills/impeccable/` (pbakaus/impeccable v4.9.1, Apache 2.0). Lead design skill. Landing and service pages are its "Persuade" mode.
- `.claude/skills/frontend-design/` (anthropics/skills, Anthropic). Kept alongside as the baseline. Where the two disagree, Impeccable and the signed-off brief win.

## Rules
- Light mode only. Never use the Fraunces font.
- Plain British English. Never use double dashes; avoid em dashes in copy.
- No hype words: unlock, elevate, revolutionise, hidden gem, nestled, oasis.
- Never invent reviews, testimonials, project counts, years, accreditations or insurance claims. Use [PLACEHOLDER] or [CONFIRM].
- Photos of finished work must be Nick's real jobs. AI imagery only for non-work decoration, never presented as his work.
- No prices on the site.
- Pages target "plasterer [location]" searches. One H1 per page; title before `|` matches the H1.
- Internal links are natural anchor text inside the sentence. No bolt-on "Read more", "See more", "Explore" or "Contact us" lines.
- Nick is not technical: anything for him to read or do must be dead simple.

## Change, deploy, verify
`npm ci`, edit, `npm run build` (must pass), commit, push to `main`. Pushing to `main` is a live release once the Worker is connected.

Node 22.12 or newer.

## Photos
All work photos are Nick's own: from his current GoDaddy site gallery and the Perfectly Plastered Facebook page (Nov 2026). They live in public/images/work/ and assets/plates/. Never use AI-generated images on the site (Chris, 15 Nov 2026).

## Quote form
Three steps (job, town and details, name and phone). Until Nick says where enquiries should go, submitting opens WhatsApp with the request filled in.
