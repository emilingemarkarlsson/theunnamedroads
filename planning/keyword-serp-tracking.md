# Keyword + SERP Tracking (PostHog)

**Issue:** TUR-100  
**Owner:** Emil  
**Cadence:** weekly (Monday review)

Umami is deprecated. Measurement lives in **PostHog EU** (`site = theunnamedroads`).

## Target keywords (priority)

### High intent
1. `ai-native venture studio`
2. `ai native venture studio operating system`
3. `venture studio vs incubator`
4. `venture studio vs agency`
5. `solo venture studio`
6. `company os for startups` / `company operating system ai`

### Supporting
7. `focus monitor parked portfolio`
8. `ai venture studio operations`
9. `self-hosted ai content stack`
10. `post-human entrepreneurship`

## Landing URL map

| Keyword cluster | Primary URL |
| --- | --- |
| Company OS / AI-native OS | `/insights/ai-native-venture-studio-operating-system` |
| Status taxonomy | `/insights/focus-monitor-parked` |
| Model comparison | `/insights/agency-vs-venture-studio-vs-incubator` |
| Studio ops | `/insights/venture-studio-operations` |
| Services CTA | `/services/ai-native-venture-studio` |
| Distribution playbook | `/resources/ai-native-distribution-playbook` |
| Homepage | `/` |

## PostHog weekly checklist

1. Filter events where `site = theunnamedroads`.
2. Insights → Trends: `cta_click` by `cta_id` (7d / 30d).
3. Trends: `venture_card_click` by `venture_id`.
4. Paths / pageviews for the URLs in the map above.
5. Note organic referrers (Google / Bing / LLM citations if visible).
6. Log one line under **Weekly log** below — no vanity screenshots required.

## SERP check (manual, 10 min)

Once per week, private window:

- Search each High intent keyword (Sweden + US if relevant).
- Record: rank band (1–10 / 11–30 / not found) for theunnamedroads.com.
- If a competitor owns the SERP, note one content gap for next Field Note.

Optional later: add GSC property + export; PostHog remains product funnel SoR.

## Weekly log

| Week | Notes |
| --- | --- |
| 2026-08-12 | Tracking doc created; pages live for all primary URLs. First SERP baseline pending Emil. |
| 2026-08-12 W1 | Baseline keywords for Focus reach (log rank band 1–10 / 11–30 / not found): `föräldraledighet planera` → Parental; `hockeyanalytics klubb` → THA; `ai-native venture studio` → TUR; `company operating system ai` → Company OS; `föräldraledighet kalkylator` → Parental. |
