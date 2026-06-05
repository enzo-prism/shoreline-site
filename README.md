# Shoreline Site

This folder is the starting point for a future Shoreline website.

It now includes a static first version of the website plus the brand and
content documentation that should guide future builds.

## Site

- [index.html](index.html) - first static website pass.
- [episodes](episodes) - individual show notes pages for the first three
  episodes, using the editorial notes layout.
- [assets/styles.css](assets/styles.css) - visual system and responsive layout.
- [assets/script.js](assets/script.js) - search/filter interactions and the hero
  waveform animation used across the homepage and episode notes.
- [assets/images](assets/images) - local Shoreline artwork and episode thumbnails.
- [assets/images/og-image.png](assets/images/og-image.png) - minimal social
  preview image.
- [vercel.json](vercel.json) - static Vercel deployment config.

## Current docs

- [BRAND.md](BRAND.md) - core brand strategy, voice, visual direction, and naming rules.
- [docs/research/youtube-channel-snapshot-2026-06-05.md](docs/research/youtube-channel-snapshot-2026-06-05.md) - public channel research and source notes.
- [docs/website-content-model.md](docs/website-content-model.md) - recommended site structure for episodes, resources, and topic pages.
- [docs/deployment.md](docs/deployment.md) - local preview and Vercel deployment notes.
- [docs/project-status.md](docs/project-status.md) - current build status and next tasks.

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

Episode 1 has transcript-derived tactical notes. Episodes 2 and 3 have starter
notes pages that should be expanded when transcripts are available.
