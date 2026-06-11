# Project Status

Last updated: June 11, 2026

## Current state

The static Shoreline website is built, pushed to GitHub, and deployed to
Vercel production at `https://shoreline-pod.com`. Four episodes have full
editorial show notes, and the first three topic guide pages are live.

## Completed

- Created brand documentation.
- Created YouTube channel research snapshot.
- Created website content model.
- Built first static site with the supplied `Shoreline.html` design direction.
- Added local Shoreline artwork and episode thumbnails.
- Added search/filter interaction.
- Replaced the homepage hero thumbnail with an animated terminal-style ASCII
  waveform.
- Simplified homepage copy into a shorter, more minimal reading experience.
- Added the Shoreline origin story: Enzo Sison and Will Meinhardt lived
  together in a small house off Shoreline Boulevard in Mountain View, near
  Google headquarters.
- Improved mobile usability with a compact jump nav, tighter hero/search
  layout, better touch targets, reduced card height, and mobile breakpoint QA.
- Added a local SVG icon system, richer hover states, keyboard focus rings,
  reduced-motion-aware animation polish, and premium card/video interactions.
- Added official SVGL logo assets for supported platform and tool references.
- Added individual show notes pages for episodes 1, 2, 3, and 4 with
  transcript-derived tactical guides, chapters, and resource links in the
  editorial notes layout (dark terminal hero, facts panel, chapter rows,
  resource stack, reference rows, quotes, related listening).
- Replaced the notes-page hero player UI with embedded YouTube videos and clean
  Apple Podcasts / Spotify Podcasts cards.
- Added dedicated favicon assets and a minimal Open Graph image.
- Added GA4 analytics tag to all pages.
- Added `sitemap.xml`, `robots.txt`, and `llms.txt`.
- Verified desktop and mobile layout with browser screenshots.
- Added Vercel static deployment config.
- Created GitHub repo: `https://github.com/enzo-prism/shoreline-site`
- Deployed production site: `https://shoreline-pod.com`
- Preserved Vercel alias: `https://shoreline-site-lac.vercel.app`
- Updated canonical and Open Graph metadata to the custom domain.

### June 11, 2026 — SEO, structured data, and topic pages pass

- Replaced thin `Shoreline Ep. N` title tags and one-line descriptions with
  full keyword titles and content-model description templates on every page.
- Added JSON-LD structured data: `PodcastSeries` + `WebSite` on the homepage;
  `PodcastEpisode` + `VideoObject` + `BreadcrumbList` on each episode page;
  `CollectionPage` + `BreadcrumbList` on topic pages.
- Made all 78 chapter rows real links that open YouTube at the exact
  timestamp.
- Built the first three topic guide pages: `topics/company-brain.html`,
  `topics/token-economics.html`, and `topics/tool-comparisons.html`
  (definition, episodes, best timestamps, tools, open questions). Linked them
  from the homepage topic cards.
- Generated per-episode 1200×630 Open Graph images
  (`assets/images/og-episode-N.jpg`) from YouTube maxres thumbnails.
- Converted the 3.6 MB about-section banner PNG to a 60 KB WebP
  (`shoreline-banner-1600.webp`) with lazy loading and intrinsic dimensions.
- Fixed stale homepage Listen cards (both pointed at Episode 1 audio); they
  now open the Apple/Spotify show pages.
- Added Episode 3's per-episode Spotify link
  (`open.spotify.com/episode/1ZPFTCt3T7Op8M2L70vkex`).
- Added publish-date pills to episode 2–4 heroes (exact YouTube upload dates:
  Ep. 1 and Ep. 2 on May 29, Ep. 3 on May 31, Ep. 4 on June 7, 2026).
- Added a custom `404.html`.
- Updated `sitemap.xml` (topic pages added) and `llms.txt` (real episode
  titles, topics section).
- Created `docs/add-episode-checklist.md` covering every file a new episode
  must touch.

## Current content

- Latest episode feature: `The Expert's Moat and the Beginner's Mind | Shoreline Ep. 4`
- Episode archive: four public YouTube episodes, all with full
  transcript-derived notes.
- Topic guides: company brain, token economics, tool comparisons. Remaining
  homepage topic cards (AI agents, workflow automation, human review) are
  filter-only until their guides are built.
- Resource index: Codex, Claude Code, Cursor, Notion, model routing, AI
  prospecting systems, with official logo badges where SVGL matches exist.
- Listen cards: YouTube, Apple Podcasts, and Spotify open the show pages;
  RSS pending public-link verification.

## Known platform gaps (upstream, not site bugs)

- The audio feed lags YouTube: as of June 11, Spotify's latest episode is
  Ep. 3 and the Apple Podcasts show page surfaces only Ep. 1. Episode 4 audio
  is not yet on either platform.
- Per-episode Apple links exist only for Ep. 1; episodes 2–4 link to the show
  feed until the feed catches up.
- The YouTube channel description is still empty (flagged in the research
  snapshot as a discoverability gap).

## Next content tasks

- Publish Episode 4 (and catch up Episodes 2–3 where missing) on the podcast
  audio platforms, then swap show-feed links for per-episode links.
- Confirm the public RSS feed URL and wire up the pending RSS listen card.
- Write the YouTube channel/show description.
- Build the remaining topic guides: `ai-agents`, `workflow-automation`,
  `human-review`.
- Keep episode notes current as new transcripts, links, and platform URLs
  become available (see `docs/add-episode-checklist.md`).
- Convert topics and resources into structured content collections if the site
  moves to Astro, Next.js, or another framework.
