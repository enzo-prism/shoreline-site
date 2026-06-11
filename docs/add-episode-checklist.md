# Add-Episode Checklist

Last updated: June 11, 2026

Publishing a new episode currently touches several files by hand. Work through
this list top to bottom so nothing drifts (stale "latest" links and outdated
docs have happened before). If the site later moves to Astro or another
framework with content collections, this checklist becomes frontmatter.

## 1. Gather episode data

- [ ] YouTube video ID, full title, and duration.
- [ ] Exact upload date: `curl -s "https://www.youtube.com/watch?v=<ID>" | grep -o '"uploadDate":"[^"]*"'`
- [ ] Transcript for notes, chapters, and resource extraction.
- [ ] Per-episode Apple Podcasts / Spotify links if the audio feed has them
      (check `https://open.spotify.com/oembed?url=...` for the show's latest).

## 2. Generate assets

- [ ] `assets/images/episode-N.jpg` — episode thumbnail for lists.
- [ ] `assets/images/og-episode-N.jpg` — 1200×630 social card. Source
      `https://i.ytimg.com/vi/<ID>/maxresdefault.jpg` (1280×720), resize to
      1200×675, center-crop to 1200×630 (PIL is available locally).

## 3. Create `episodes/episode-N.html`

Copy the previous episode page and update:

- [ ] `<title>` using the template `[Specific topic phrase] | Shoreline Ep. N`
      (full episode title, not just "Shoreline Ep. N").
- [ ] `<meta name="description">` using the template
      `Shoreline Ep. N covers [topic 1], [topic 2], and [topic 3], with ... timestamps.`
- [ ] `og:title`, `og:description`, `og:url`, `og:image` (per-episode card),
      `og:image:alt`, `twitter:*`, and `<link rel="canonical">`.
- [ ] JSON-LD block: `PodcastEpisode` (episodeNumber, datePublished,
      timeRequired as ISO-8601 duration), `VideoObject` (uploadDate, embedUrl,
      contentUrl, thumbnailUrl), `BreadcrumbList`.
- [ ] Hero: episode number pills, h1, summary, date pill, duration pill.
- [ ] YouTube embed URL (`youtube-nocookie.com/embed/<ID>`).
- [ ] Platform links: per-episode Apple/Spotify URLs with "Episode audio"
      labels when available, otherwise show-feed URLs with "Show feed" labels.
- [ ] Chapters: every chapter row is a link —
      `<a class="chapter-row" href="https://www.youtube.com/watch?v=<ID>&amp;t=<seconds>s" target="_blank" rel="noreferrer">`.
- [ ] Takeaways, tactical guides, resource stack, references, quote,
      listener checklist, related episodes.

## 4. Update the homepage (`index.html`)

- [ ] Topbar: `Latest: <b>Ep. N</b>`.
- [ ] Hero terminal path: `shoreline://waveform.live - ep_00N`.
- [ ] Latest section: heading, duration pill, feature block (`id="episode-N"`,
      thumbnail, title, summary, ideas/tools lists, notes + YouTube links).
- [ ] Episode archive: add the new row at the top, bump the
      `N full episodes` meta pill, fill in `data-index` search keywords.

## 5. Update adjacent pages

- [ ] Previous episode's "Keep listening" cards, if the new episode should
      appear there.
- [ ] Topic pages (`topics/*.html`): add the episode row and any new best
      timestamps for topics the episode covers.

## 6. Update site metadata files

- [ ] `sitemap.xml`: add the new episode URL, bump `lastmod` on the homepage
      and any touched pages.
- [ ] `llms.txt`: add the episode line under `## Episodes` (use the real
      episode title).

## 7. Update docs

- [ ] `docs/project-status.md`: latest-episode line and completed work.

## 8. Verify and ship

- [ ] `python3 -m http.server 4173 --bind 127.0.0.1` and click through:
      homepage latest module, new episode page, chapter links, platform links.
- [ ] Validate the JSON-LD parses (paste into validator.schema.org or
      `python3 -c "import json; ..."` on the extracted block).
- [ ] Commit, push, deploy (`vercel deploy --prod --yes` or git-connected
      auto-deploy), then spot-check `https://shoreline-pod.com`.
