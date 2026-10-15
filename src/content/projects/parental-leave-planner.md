---
title: "Föräldraledighetsplanen"
description: "Föräldraledighetsplanen is a free Swedish parental-leave planner that follows Försäkringskassan's rules, with an MCP server so AI assistants like ChatGPT and Claude can calculate parental benefit. Live. Built with AI by The Unnamed Roads."
url: https://tur-parentalleave.vercel.app
startDate: 2025-06-01
tags:
  - family
  - sweden
  - parental-leave
  - consumer
  - seo
  - ai-assistants
homepage:
  featured: true
  order: 3
  statusLabel: Live
  statusTone: active
  summary: "Free Swedish parental-leave planner, usable on the web and from your AI assistant."
  tag: "Family"
  href: https://tur-parentalleave.vercel.app
  ctaLabel: "Open the planner"
faq:
  - question: "What is Föräldraledighetsplanen?"
    answer: "A free web tool (formerly Parental Leave Planner) that turns Försäkringskassan's parental-leave rules into a concrete plan: days, parental benefit per day and month, and how to split leave between parents."
  - question: "Can I use Föräldraledighetsplanen from ChatGPT or Claude?"
    answer: "Yes. It exposes an MCP server at https://tur-parentalleave.vercel.app/api/mcp and an OpenAPI spec at /openapi.json, so AI assistants can calculate benefits, plan leave and explain the rules."
  - question: "What is the status of Föräldraledighetsplanen?"
    answer: "Live. The planner is free to use and actively improved."
---

**Free Swedish parental-leave planner, usable on the web and from your AI assistant.**

## What it is

Föräldraledighetsplanen (formerly Parental Leave Planner) turns Försäkringskassan's parental-leave rules into a simple plan. Parents enter salary and situation and see days, parental benefit and trade-offs for different choices, plus guides on common questions.

## Who it is for

Families in Sweden who are expecting a child or planning how to split leave.

## Use it from your AI assistant

The calculation engine is available to AI assistants through an MCP server (`/api/mcp`) with tools to calculate benefit, plan leave and explain rules, and through an OpenAPI spec for custom GPTs. Add the MCP URL as a custom connector in Claude or ChatGPT.

## How AI does the work

The rules research, calculations, interface, AI-assistant integration and copy were built with AI coding assistants and checked by a human against Försäkringskassan's official rules.

## Status: Live

Live. Free to use and actively improved.

Part of [The Unnamed Roads](/), an AI-native venture studio. See [how the studio starts and tests ideas with AI](/how-it-works/) or [all projects](/projects/).
