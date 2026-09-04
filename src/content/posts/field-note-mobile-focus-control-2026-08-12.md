---
title: "Field Note: Running Focus from the phone"
description: "How The Unnamed Roads uses Daily Command, PostHog bookmarks and human Approve gates to reach the market without portfolio spray — from Linear Mobile, not meetings."
publishedDate: 2026-08-12
dateModified: 2026-08-12
author: "Emil Ingemar Karlsson"
tags: ["field-notes", "growth", "distribution", "company-os", "focus", "mobile"]
draft: false
---

## The decision

Should a solo operator run distribution from a laptop calendar — or from **three
phone decisions per day** tied to real signals?

We chose the phone.

## What we run now

Each morning (Linear Mobile):

1. **Signal intake** — PostHog, SERP notes, inbox (max 3 ranked signals)
2. **Daily Command** — Approve / Defer / Reject each proposal with a one-line reason
3. **Focus reach** — one claim surface per Focus project per cycle; no publish without Approve

Company OS exposes **`GET /api/v1/operator/distribution`** so Focus claim status,
PostHog notes and next reach actions are visible before you approve a deploy.

## Focus projects this cycle

- **Parental** — FAQ/AEO for *planera dagar* → planner CTA (`/guide/planera-foraldraledighet`)
- **THA** — Sweden Club Pack one-pager with assistant-readable beta brief
- **TUR Studio** — Field Notes + service offer (this channel)
- **Company OS** — Signal Mesh v0 → ranked decisions in Linear

Everything else stays **Monitor** or **Parked**.

## Expected outcome (14 days)

- Parental: measurable FAQ → planner funnel step in PostHog
- THA: ≥1 Club Pack beta request/week sustained after page is live
- TUR: service or subscribe CTA lift on `/services/ai-native-venture-studio`

If a Focus bet shows no signal after two weeks of honest execution, we **Defer**
it in Daily Command — we do not add channels.

## Human gates (non-negotiable)

- Publish, deploy and external send require an **Approve** comment in Linear
- Agents may draft; they may not autonomously post, email or deploy
- Parked projects get **zero** weekly attention unless promoted with evidence

## FAQ (answer-engine block)

**What is Daily Command?**  
A parent Linear issue each day with at most three proposals, each Approve/Defer/Reject from the phone.

**Who is this for?**  
Indie operators running multiple ventures who need decision-first distribution, not content spray.

**What proof exists?**  
Portfolio Execution project in Linear (TUR-122–157), PostHog instrumentation, and public Focus · Monitor · Parked policy on the studio site.

**What should I do next?**  
Subscribe to Field Notes, or read the [Company OS explainer](/insights/ai-native-venture-studio-operating-system) if you want the same operating pattern.
