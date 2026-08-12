# TUR Site Tracking Event Taxonomy (PostHog)

All events include base properties from `src/util/analytics.ts`:

- `site`: `theunnamedroads`
- `page_path`, `page_url`
- UTM params when present

## Events

| Event | When | Key properties |
| --- | --- | --- |
| `cta_click` | Homepage, service and contact CTAs | `cta_id`, `section`, `label` |
| `venture_card_click` | Portfolio card link on homepage | `venture_id`, `section`, `href` |
| `primary_cta_clicked` | Newsletter subscribe submit | `cta_id`, `message_variant`, `section` |
| `signup_completed` | Newsletter subscribe submit | same as above |

## PostHog setup

- Project key in `BaseLayout.astro` (EU cloud, proxy `e.theunnamedroads.com`)
- Global property: `site: theunnamedroads`
- Pageviews: automatic via PostHog init

## Instrumented surfaces

- Homepage `#company-os`, `#ventures`, contact shell
- `/services/ai-native-venture-studio`
- Newsletter signup component

## Deprecated

Umami was removed August 2026. Do not add Umami references to new instrumentation.
The public `/outreach` kit page was removed August 2026 — outbound kits stay internal.
