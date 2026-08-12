# Monthly Proof Refresh Protocol

## Purpose
Keep public proof blocks (homepage metrics, service proof, Field Notes claims) aligned with Company OS evidence — without inventing vanity numbers.

## Cadence
- **Day:** last Thursday of each month (or first working day after)
- **Owner:** Emil (operator)
- **Input sources:** PostHog (filter `site`), Focus validation contracts, Linear Done issues, deploy logs
- **Output:** updated homepage/service copy only when evidence changed

## Checklist

1. Pull PostHog last-30-day: pageviews for `/`, `/services/ai-native-venture-studio`, Focus product domains; top `cta_click` / `venture_card_click` events.
2. Confirm Focus set still matches three bets (or document a swap decision in Company OS / Linear).
3. Refresh cost/proof quotes only if infra or spend materially changed.
4. Update `structure.json` proof strings + service proof section if needed.
5. Commit with message `docs(proof): monthly refresh YYYY-MM`.
6. Log outcome in this file under **History**.

## Do not
- Invent signup or revenue numbers without a source
- Mark Monitor ventures as Focus in public copy
- Autopublish agent-drafted metrics without human Approve

## History

| Month | Notes |
| --- | --- |
| 2026-08 | Protocol created; baseline is live portfolio + Company OS narrative (no vanity counters). |
