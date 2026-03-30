---
title: "How I Run 7 Websites With One Person and AI Agents"
description: "A detailed breakdown of the automation stack behind The Unnamed Roads studio: self-hosted on Hetzner, n8n workflows, AI-generated content pipelines, and what actually went wrong building it."
publishedDate: 2026-03-30
dateModified: 2026-03-30
author: Emil Karlsson
tags: ['automation', 'n8n', 'selfhosted', 'ai', 'buildinpublic']
draft: false
---

I run seven websites. Combined they publish around 3 articles per day, handle newsletter signups, send Bluesky posts, ping search engines, and report traffic stats to Telegram every morning. I do none of this manually.

Here's the full stack, what it costs, and what broke badly along the way.

## The Setup

**The studio** is called [The Unnamed Roads](https://theunnamedroads.com) — a venture studio where the thesis is that one person with AI agents as co-workers can run what used to require a team.

The seven sites span different niches:
- **[The Hockey Analytics](https://thehockeyanalytics.com)** — NHL data and analytics
- **[The Hockey Brain](https://thehockeybrain.com)** — hockey insights
- **[Emil Karlsson](https://emilingemarkarlsson.com)** — personal blog (automation, building in public)
- **[The Agent Fabric](https://theagentfabric.com)** — AI agent infrastructure
- **[The Print Route](https://tur-theprintroute.vercel.app)** — print order routing SaaS
- **[The Atomic Network](https://tan-website.netlify.app)** — hyperlocal marketing platform
- **The Unnamed Roads** — the studio itself

## The Infrastructure

Everything runs on a single Hetzner VPS (CX32, €15/month). Self-hosted with [Coolify](https://coolify.io) as the deployment layer.

**Key services running:**
- **n8n** — workflow orchestration (the brain of the whole thing)
- **Umami** — privacy-friendly analytics across all 7 sites
- **Minio** — S3-compatible object storage (drafts, keyword files, assets)
- **Listmonk** — newsletter management
- **OpenClaw** — custom webhook server for publishing to GitHub repos

The sites themselves deploy on Netlify and Vercel (free tier). Every site is Astro or React/Vite — static output, fast, cheap to host.

## The Content Pipeline

Each site has its own research → generate → publish chain. Here's what runs for [The Hockey Analytics](https://thehockeyanalytics.com) as an example:

**09:45** — `tha-keyword-research` fires. It reads yesterday's performance insights from Minio, pulls current NHL standings from the NHL API, feeds both into Groq (LLaMA 3.3 70B), and gets back a scored list of content opportunities. Saves as `tha-approved-keywords.json` to Minio.

**10:00** — `tha-seogenerator` reads that file, generates a full article with Groq, runs a quality scoring pass (readability, E-A-T signals, uniqueness), and if it passes — commits the markdown directly to GitHub. Netlify deploys in ~30 seconds. IndexNow pings Bing and other engines. Telegram notification arrives.

**10:01** — The article is live.

The hockey brain site uses Gemini instead of Groq because the NHL API data is more structured and Gemini handles tabular context better. Small wins.

For my personal blog and the B2B sites (Agent Fabric, Print Route, Atomic Network), the pipeline is simpler: a topic seed → Groq → OpenClaw publish → GitHub commit → deploy.

## Newsletter and Social

Every article publish triggers a webhook that fans out to:
1. **Newsletter dispatch** via Listmonk (Resend for SMTP)
2. **Bluesky post** via the AT Protocol API, with per-site emoji and hashtags

The Bluesky integration was the most interesting to build. The AT Protocol requires byte-accurate facets for clickable URLs — you calculate byte offsets with TextEncoder, not character offsets. Took longer than expected.

## What Broke

Honest section. Things that cost me hours:

**Parallel fan-out in n8n is unreliable.** If you split one node into two parallel branches that both feed into a single downstream node, it randomly processes only one branch. The fix is to chain them sequentially. I lost two days to this before understanding the root cause.

**Template literals in n8n jsonBody expressions cause silent failures.** Backtick strings inside `={{ }}` throw "invalid syntax" with no helpful error message. Everything needs to be string concatenation.

**`$credentials` doesn't work in HTTP request body expressions.** n8n's credential injection works in the credential field, not inside JSON body expressions. You have to hardcode values (stored in environment, not in the workflow JSON).

**Umami's metrics API changed.** The `/metrics?type=url` endpoint returns 400 in the current version. Had to switch to `type=browser`, `type=referrer` etc. and reconstruct what I needed.

**SVG og:images don't render on Bluesky.** Had to regenerate all OG images as JPEGs. Simple fix once you know, painful to discover at 11pm.

## What It Actually Costs

| Service | Cost |
|---------|------|
| Hetzner CX32 | €15/mo |
| Groq API | ~€8/mo |
| Gemini API | ~€3/mo |
| Resend (email) | Free tier |
| Netlify/Vercel | Free tier |
| **Total** | **~€26/mo** |

That's it. 7 sites, ~90 articles/month, full automation stack, under €30/month.

## What It's Not

I want to be clear about what this is and isn't.

The content is **good enough for topical authority, not good enough to replace deep editorial work**. Search engines are indexing it. Traffic is building. But a staff writer with domain expertise produces better individual articles. The goal here isn't to compete with that — it's to cover ground at a scale one person can't do manually.

The sites are also **early-stage products**, not mature businesses. The analytics, print routing, and hyperlocal marketing concepts are real, but they're not generating revenue yet. This is build-in-public mode.

## What's Working

The feedback loop is the most underrated part. Every Monday morning, a `content-performance-feedback` workflow reads Umami data, identifies top-performing articles, and saves insights to Minio. Those insights feed into the next week's keyword research. The system learns what resonates, slowly.

The Telegram reporting is genuinely useful. Every morning I get a summary of what published, how yesterday's traffic looked across all sites, and what errors (if any) fired overnight. Running a company that publishes while you sleep is only comfortable if you have good observability.

## The Stack Summary

- **Orchestration:** n8n (self-hosted)
- **LLMs:** Groq (LLaMA 3.3 70B), Gemini 1.5 Flash
- **Hosting:** Hetzner + Coolify
- **Deploy:** Netlify, Vercel (static)
- **Storage:** Minio (S3-compatible)
- **Analytics:** Umami
- **Email:** Listmonk + Resend
- **Social:** Bluesky AT Protocol
- **Search indexing:** IndexNow

Everything is open-source software. No SaaS lock-in beyond the LLM APIs.

---

If you're building something similar or have questions about any part of the stack, I'm happy to go deeper. The n8n workflow patterns especially took a long time to get right — happy to share what I learned.
