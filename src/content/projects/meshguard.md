---
title: MeshGuard
description: Governance prototype for tool permissions, approval levels, and policy-safe agent operations across the studio.
startDate: 2026-05-01
tags:
  - studio
  - security
  - governance
  - mcp
homepage:
  featured: true
  order: 4
  statusLabel: Monitor
  statusTone: building
  statusDotColor: bg-sky-500
  animateDot: false
  focus: >-
    Tool permissions & approval levels for agents
  summary: >-
    Governance layer so assistants and workflows cannot exceed policy — audit every consequential call.
  metricLabel: Mode
  metricValue: Monitor
  tag: Studio
---

# MeshGuard

**Status:** Monitor — governance prototype, not a shipped product surface.

MeshGuard is the studio's governance layer for agent and workflow tooling. It defines who can call which tools, when human approval is required, and how consequential runs are audited — so assistants cannot exceed policy even when models suggest otherwise.

## The problem

Agent stacks fail governance at scale when:

- Tool access is all-or-nothing per API key
- Approval levels live in chat prompts instead of enforceable policy
- Consequential calls (publish, deploy, external send) lack a durable audit trail
- MCP servers and automation runners share credentials without scoped allow-lists

MeshGuard targets the gap between **MethodPolicy roles** (Research, Draft, Execute, Publish) and the actual tools those roles may invoke.

## What it enforces

| Layer | Policy |
| --- | --- |
| **Tool allow-list** | Each workflow role gets an explicit set of permitted tools — no implicit access |
| **Approval levels** | Level 1–2 for internal/reversible work; Level 3+ requires human Approve before external or consequential action |
| **Audit trail** | Every gated call logs who/what/when — aligned with the studio's Approve · Defer · Reject gates on [Agents](/agents/) |

The prototype maps to the same approval sketch documented on the [Company OS explainer](/insights/ai-native-venture-studio-operating-system): drafts and research under spend caps; publish, outreach and production deploy stay human-gated.

## Current status (Monitor)

MeshGuard remains a **Monitor** bet — design and policy sketches are live in studio docs and the [Agents](/agents/) page, but there is no public product URL or customer-facing deployment. Enforcement today runs through MethodPolicy spend gates, GitHub approval queues and operator judgment rather than a standalone MeshGuard service.

Next proof step: allow-list tools per workflow on the Operator API and wire Level 3 gates to mobile Approve before any external send.
