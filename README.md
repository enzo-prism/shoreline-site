# Shoreline Site

This folder is the starting point for a future Shoreline website.

It now includes a static first version of the website plus the brand and
content documentation that should guide future builds.

## Site

- [index.html](index.html) - first static website pass.
- [episodes](episodes) - individual show notes pages for the first four
  episodes, using the editorial notes layout, with JSON-LD structured data and
  timestamp-linked chapters.
- [topics](topics) - topic guide pages (company brain, token economics, tool
  comparisons): definition, episodes, best timestamps, tools, open questions.
- [404.html](404.html) - custom not-found page served by Vercel.
- [assets/styles.css](assets/styles.css) - visual system and responsive layout.
- [assets/script.js](assets/script.js) - search/filter interactions and the hero
  waveform animation used across the homepage and episode notes.
- [assets/images](assets/images) - local Shoreline artwork, episode thumbnails,
  and per-episode 1200×630 social cards (`og-episode-N.jpg`).
- [assets/images/og-image.png](assets/images/og-image.png) - minimal social
  preview image for non-episode pages.
- [vercel.json](vercel.json) - static Vercel deployment config.

## Current docs

- [BRAND.md](BRAND.md) - core brand strategy, voice, visual direction, and naming rules.
- [docs/research/youtube-channel-snapshot-2026-06-05.md](docs/research/youtube-channel-snapshot-2026-06-05.md) - public channel research and source notes.
- [docs/website-content-model.md](docs/website-content-model.md) - recommended site structure for episodes, resources, and topic pages.
- [docs/deployment.md](docs/deployment.md) - local preview and Vercel deployment notes.
- [docs/project-status.md](docs/project-status.md) - current build status and next tasks.
- [docs/add-episode-checklist.md](docs/add-episode-checklist.md) - every file a
  new episode must touch, in order.

## Current source of truth

- Public channel: https://www.youtube.com/@ShorelinePod
- Handle: `@ShorelinePod`
- Channel ID: `UColW0u1IGPY7s9wWDkFejMw`
- GitHub repo: https://github.com/enzo-prism/shoreline-site
- Production URL: https://shoreline-pod.com
- Vercel alias: https://shoreline-site-lac.vercel.app

## Local preview

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://localhost:4173/index.html
```

The current build runs by opening `index.html` directly in a browser. The next
step should be turning episode notes, topics, and resources into real content
collections if the site moves into Astro, Next.js, or another framework.

Episodes 1, 2, 3, and 4 have transcript-derived tactical notes in the editorial
show notes layout.
