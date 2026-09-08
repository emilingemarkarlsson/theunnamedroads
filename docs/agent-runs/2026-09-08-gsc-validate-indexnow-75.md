# GSC Validate + Request indexing + IndexNow (#75)

**Property:** `sc-domain:theunnamedroads.com` only — not EIK, THA, or Brain.

**Date:** 2026-09-08

## GSC Validate fix (#53 / #54 samples)

Coverage Overview had no obvious “Validate fix” control for recent 404/redirect issues on this pass — **N/A** (logged on issue #75).

Live redirect samples from #53 (Astro meta-refresh pages, HTTP 200 → client redirect):

| URL | Live |
|-----|------|
| `/tags/experimental-methodology/` | 200 meta-refresh → `/insights/experimentation-frameworks/` |
| `/tags/strategy/` | 200 meta-refresh → `/posts/` |
| `/tags/building/` | 200 meta-refresh → `/posts/` |
| `/tags/funding/` | 200 meta-refresh → `/posts/` |
| `/tags/setup/` | 200 meta-refresh → `/posts/coolify-hetzner-automated-infrastructure/` |
| `/tags/public/` | 200 meta-refresh → `/posts/why-anonymity-accelerates-innovation/` |
| `/tags/nhl-analytics/` | 200 meta-refresh → `/projects/the-hockey-analytics/` |
| `/posts/solo-founder-mental-health-practices-2026-03-25/` | 200 meta-refresh → `/posts/solo-founder-mental-health-practices-2026-04-08/` |
| `/posts/digital-nomad-infrastructure-setup-2026-04-30/` | 200 meta-refresh → `/posts/` |

## GSC Request indexing

| URL | Result |
|-----|--------|
| `https://www.theunnamedroads.com/` | Already indexed; indexing request accepted |
| `https://www.theunnamedroads.com/posts/12-week-experiment-framework/` | Already indexed; indexing request accepted |

Performed manually in GSC URL Inspection (Emil, 2026-09-08).

## IndexNow

Key file live: `https://www.theunnamedroads.com/741e73bc05ca4ca8b93944e7e9231f99.txt` (200, body matches key).

POST to `api.indexnow.org` for home + experiment FN → **403** `UserForbiddedToAccessSite`.

Honest gap — fix tracked in #79. GSC Request indexing was the primary path for this issue.
