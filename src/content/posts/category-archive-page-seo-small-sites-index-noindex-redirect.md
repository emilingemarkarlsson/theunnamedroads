---
title: "Category and archive page SEO for small sites: index, noindex, or redirect"
description: "When to index, noindex, or redirect category pages on small content sites — with practical thresholds."
publishedDate: 2026-05-27
dateModified: 2026-05-27
author: The Unnamed Road
draft: false
tags: ["SEO", "technical SEO", "small sites", "content strategy"]
---

Small sites get category page SEO wrong in two opposite directions. Some index everything and create thin-page cannibalization. Others noindex everything and cut off useful crawl paths. The right answer depends on one question: does this page help a real user understand what they are about to read?

## When to index a category page

Index it when the page earns its place. That means: it targets a query real users type, it has introductory copy that adds context the individual articles do not repeat, and it links to at least four to six articles that together cover the topic properly.

A category page for "n8n automation" on a site publishing n8n tutorials can rank for head terms the individual articles cannot touch. That is worth indexing. A category page for "posts from April" is not.

## When to noindex

Noindex when the page adds nothing beyond a list. Automatically generated category pages with no copy, date archives, and tag pages on sites with fewer than ten posts tagged with any given term are the main offenders. They consume crawl budget and fragment authority without ranking.

The signal that it is time to noindex: you see the category page appearing in Search Console impressions for queries your article already ranks for. It is competing with its own content.

## When to redirect

Redirect when a category has fewer than three articles or overlaps significantly with another category. Merge the category into the broader parent, redirect the old URL, and update internal links. A 301 to the stronger page concentrates authority rather than dividing it.

## Paginated archives

Noindex page 2 and beyond. Google does not rank `/category/seo/page/3` for anything useful, and crawling it draws budget away from your actual content. Use `rel=canonical` from paginated pages to page 1 or simply noindex them.

## The consolidation move

On sites with 50 to 100 articles, the biggest category page win is usually not fixing individual pages — it is noticing that you have three categories (`automation`, `workflows`, `process`) all targeting the same user intent. Pick one primary taxonomy, redirect the others, and write a single strong category page. That concentrates internal links and produces a page that actually ranks.

## Review quarterly

Category pages change value as the site grows. A category with two articles today should be indexed when it reaches eight. An over-broad tag with 40 articles targeting different intents should be split. Set a quarterly audit: check impression share, compare against individual article performance, and update.
