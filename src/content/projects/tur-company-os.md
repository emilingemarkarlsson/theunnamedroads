---
title: TUR Company OS
description: Mobile-first control plane for The Unnamed Roads. Decisions, approvals, learning loops and agent policy in one governed operating system.
startDate: 2026-07-13
endDate: 2026-09-04
tags:
  - studio
  - operations
  - governance
  - ai-native
homepage:
  featured: false
  order: 3
  statusLabel: Wound down
  statusTone: exploring
  statusDotColor: bg-slate-500
  animateDot: false
  focus: >-
    Former control plane — wound down
  summary: >-
    Portfolio control plane discontinued. The explainer and Field Notes remain as archive; no active platform development.
  metricLabel: Mode
  metricValue: Wound down
  tag: Studio
---

# TUR Company OS

**Status:** Wound down (September 2026) — archive reference only, no active platform development.

TUR Company OS was the mobile-first control plane behind [The Unnamed Roads](/): a decision-first operating system where portfolio state, approval policy and organizational memory stayed canonical instead of scattering across SaaS dashboards.

## What it was

Traditional studio ops optimize for visibility — boards, backlogs, status colors. Company OS optimized for **decisions that compound**:

1. **Signal** — growth evidence, inbox, market change
2. **Decision** — what we will try, and why now
3. **Expected outcome** — falsifiable before work starts
4. **Work unit** — bounded execution with traceability
5. **Actual outcome** — measured against expectation
6. **Human correction** — what we got wrong
7. **Reviewed lesson** — durable memory, not chat noise

Three planes held the architecture: **Control** (governance, approvals, portfolio hierarchy), **Execution** (humans, agents and workflows behind adapters), and **Knowledge** (events, decisions and lessons in Postgres — not duplicated in SaaS).

Focus · Monitor · Parked status kept attention bounded: at most three Focus bets with active validation contracts; everything else visible but not competing for daily growth ranking.

## Why it wound down

The product surface shipped fast in summer 2026 but did not justify ongoing platform maintenance against a bounded Focus set. The studio now runs three Focus bets — [The Hockey Analytics](https://thehockeyanalytics.com/), Field Notes distribution here, and [Föräldraledighetsplaneraren](https://tur-parentalleave.vercel.app/) — without a separate Company OS deployment.

Governance patterns (MethodPolicy roles, human Approve gates, agent spend caps) continue in tooling and process; only the dedicated control-plane product is discontinued.

## What remains published

These pages stay live as honest reference — not as a sales funnel for live software:

- [AI-native venture studio operating system](/insights/ai-native-venture-studio-operating-system) — pillar explainer with FAQ schema
- [Agent roles & approval policy](/agents/) — MethodPolicy roles and Approve · Defer · Reject gates
- [For AI assistants](/for-assistants/) — crawl policy; explicitly marks Company OS as Avvecklat
- Field Notes and portfolio pages that reference the operating model

Do not position Company OS as available software. The studio narrative — decision-first, human-gated, agents inside policy — remains accurate; the platform itself does not.
