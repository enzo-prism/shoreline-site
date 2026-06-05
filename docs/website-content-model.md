# Shoreline Website Content Model

Research date: June 5, 2026

## Product definition

The Shoreline website should be a companion library for the podcast.

It should help listeners answer:

- What did they talk about?
- Where is the resource/tool/article mentioned?
- What does this concept mean?
- Which episode should I listen to for this topic?
- What should I try next in my own workflow?

## Recommended first build

Start as a simple static site with structured markdown content.

The first version should include:

- Home page
- Episodes index
- Episode detail pages
- Topic pages
- Resource index
- About page

Do not begin with a generic marketing landing page. The useful content is the
product.

## Home page structure

1. Latest episode module
   - Episode title
   - YouTube embed or thumbnail
   - Short summary
   - Watch/listen links
   - Top resources

2. Topic index
   - Company brain
   - AI agents
   - Workflow automation
   - Token economics
   - Tool comparisons
   - Sales/prospecting systems

3. Recent notes
   - Episode notes
   - Resource updates
   - Tool mentions

4. About strip
   - Short explanation of Shoreline
   - Origin story: Enzo Sison and Will Meinhardt lived together in a small
     house off Shoreline Boulevard in Mountain View, near Google headquarters.
   - Hosts
   - Subscribe links

## Episode page structure

Each episode page should include:

- Title
- Episode number
- Publish date
- Duration
- YouTube embed
- Podcast platform links
- One-paragraph summary
- Three to five topic hooks
- Timestamped chapters
- Resources mentioned
- Tools mentioned
- Key concepts
- Transcript or transcript-derived notes
- Related episodes
- Share metadata

## Episode frontmatter draft

```yaml
id: shoreline-ep-001
episodeNumber: 1
season: 1
title: "AI Agents and Knowledge Management: Building a Company Brain"
displayTitle: "AI Agents and Knowledge Management: Building a Company Brain | Shoreline Ep. 1"
youtubeId: "VUoDvinLPl4"
duration: "1:25:51"
publishedDate: "2026-05-29"
status: "published"
summary: ""
themes:
  - company-brain
  - ai-agents
  - knowledge-management
  - human-in-the-loop-ai
tools: []
resources: []
chapters: []
```

## Resource model

Resources should be their own content type, not just links buried in episode
notes.

Resource fields:

```yaml
id: notion
name: "Notion"
type: "tool"
url: "https://www.notion.com/"
mentionedIn:
  - episode: "shoreline-ep-001"
    timestamp: ""
    context: ""
tags:
  - company-brain
  - knowledge-management
status: "active"
notes: ""
```

Resource types:

- Tool
- Company
- Article
- Book
- Person
- Framework
- Concept
- Quote
- Dataset
- Video
- Podcast

## Topic page model

Topic pages are the main SEO and listener-memory layer.

Each topic page should include:

- Plain definition.
- Why Shoreline cares about it.
- Episodes that mention it.
- Related tools.
- Best timestamps.
- Recommended resources.
- Open questions from the show.

Initial topic pages:

- `company-brain`
- `ai-agents`
- `workflow-automation`
- `knowledge-management`
- `token-economics`
- `tool-comparisons`
- `sales-prospecting`
- `human-ai-review`
- `end-of-apps`

## Content workflow per episode

1. Pull or create transcript.
2. Create timestamped chapters.
3. Extract tools, companies, people, books, articles, and links.
4. Write a one-paragraph summary.
5. Write three topic hooks.
6. Add related topic tags.
7. Check every resource link.
8. Add YouTube, Apple, and Spotify links.
9. Update the resource index.
10. Update topic pages with the best new references.

## SEO strategy

Shoreline should optimize for specific search phrases, not broad hype terms.

Good phrases:

- AI agents and knowledge management
- Building a company brain
- AI workflow automation for sales
- Token maxing
- Codex vs Claude Code vs Cursor
- AI prospecting workflows
- Human-in-the-loop AI review
- AI company brain tools

Weak phrases:

- Future of AI
- AI revolution
- Productivity unlocked
- Transform your business with AI

## Metadata templates

Episode title:

`[Specific topic phrase] | Shoreline Ep. [number]`

Episode meta description:

`Shoreline Ep. [number] covers [topic 1], [topic 2], and [topic 3], with notes, tools, resources, and timestamps from the conversation.`

Topic meta description:

`A Shoreline guide to [topic], collecting podcast episodes, tools, resources, and notes about [plain-language explanation].`

## First content backlog

High priority:

- Write the show description for YouTube and the site.
- Expand episode 2 and 3 starter pages with transcript-derived chapters and
  exact resource mentions.
- Build the first topic page: `company-brain`.
- Build the first resource index from the first three episodes.
- Confirm podcast platform links and states.
- Add transcripts or transcript-derived notes.

Medium priority:

- Add host bios.
- Add a submission path for listener resources.
- Add clip/short pages only after the full-episode structure is stable.
- Add a changelog for resource updates.

Low priority:

- Newsletter capture.
- Search.
- Full transcript semantic search.
- Embeddable quote cards.

## Future site architecture notes

If this becomes a Next.js or Astro site, keep the content collections simple:

- `content/episodes`
- `content/topics`
- `content/resources`
- `content/people`
- `content/tools`

The episode page should own the narrative. Topic and resource pages should be
generated from structured episode data wherever possible, so the site can grow
without duplicating the same notes by hand.
