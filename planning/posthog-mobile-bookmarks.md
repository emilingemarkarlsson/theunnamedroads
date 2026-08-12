# PostHog mobile bookmarks — W1 setup

> **TUR-128** · Pin these in the PostHog iOS app (or Safari) for Daily Command.

## 1. TUR Studio site

- **Project:** PostHog EU (theunnamedroads)
- **Insight:** Trends → Event `cta_click` · Breakdown `cta_id` · Last 7 days
- **Filter:** Property `site` = `theunnamedroads`
- **Also check:** `venture_card_click` by `venture_id`

## 2. Parental leave planner

- **Project:** Parental product PostHog project (or shared EU project if unified)
- **Funnel:** Pageview planner → plan started → plan completed → share (adjust to actual event names)
- **Goal:** identify largest drop-off for TUR-137 audit

## 3. The Hockey Analytics

- **Project:** THA PostHog (or site analytics if separate)
- **Insight:** Landing pageviews 7d; beta CTA clicks when TUR-144 ships
- **Goal:** baseline before Club Pack one-pager (TUR-143)

## Daily Command footer (paste into parent issue)

```markdown
### PostHog bookmarks
- TUR site cta_click: [paste insight URL]
- Parental funnel: [paste insight URL]
- THA landing: [paste insight URL]
```

Replace bracket URLs after creating insights in PostHog mobile.

## Operator API alternative

`GET /api/v1/operator/distribution` returns `posthogNote` + `nextReachAction` per Focus project when Git status file is updated.
