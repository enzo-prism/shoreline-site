# Deployment

Last updated: June 5, 2026

## Source of truth

- Local project: `/Users/enzo/Projects/shoreline-site`
- GitHub repo: `https://github.com/enzo-prism/shoreline-site`
- Vercel project: `enzo-design-prisms-projects/shoreline-site`
- Production URL: `https://shoreline-site-lac.vercel.app`

## Stack

This is a static website:

- `index.html`
- `assets/styles.css`
- `assets/script.js`
- local images in `assets/images`

There is no build step yet. Vercel should serve the repository root as a static
site.

## Local preview

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://localhost:4173/index.html
```

## Vercel deploy

Production deploy command:

```bash
vercel deploy --prod --yes
```

The first production deployment connected the Vercel project to the GitHub
repository and created the stable production alias above.

The `.vercel` folder is intentionally ignored. Project linking can be recreated
locally with the Vercel CLI.

## Verification checklist

- Home page returns `200 OK`.
- Vercel deployment status is `Ready`.
- Desktop layout has no horizontal overflow.
- Mobile layout has no horizontal overflow.
- Search/filter interaction works.
- Public YouTube links open to the confirmed Shoreline channel/videos.
- Apple Podcasts, Spotify, and RSS cards remain marked as pending until those
  public links are confirmed.
