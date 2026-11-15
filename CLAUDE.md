# perfectlyplastered.uk

Website for Perfectly Plastered, a plastering business owned by Nick. Built and maintained by Chris (Ascend Digital Marketing) through Claude. Same infrastructure as christopher-kelly.co.uk: static Astro site in GitHub, served by a Cloudflare Worker with static assets, built by Workers Builds on every push to `main`.

## Status
Scaffold only. Nothing is designed yet. Order of work:
1. Brief (business facts, audience, offer, proof, pages, keywords) signed off by Chris
2. Design direction via the `impeccable` skill (`/impeccable init` writes PRODUCT.md and DESIGN.md)
3. Homepage, then the remaining launch pages (about 10)
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
