# Pipeline ↔ Public Portfolio Reconciliation

**Issue:** TUR-92  
**Verified:** 2026-08-12  
**Canonical:** `tur-company-os/portfolio/registry.json`  
**Public:** `theunnamedroads/src/content/projects/*.md`

## Result

| Source | Count |
| --- | ---: |
| Registry Studio projects | 19 |
| Public project pages mapped | 19 |
| Gaps | **0** |

## Mapping

| Registry project | Public slug | Status on public |
| --- | --- | --- |
| TUR Company OS | `tur-company-os` | Focus |
| The Unnamed Roads Studio | `anonymous-venture-studio` | Focus |
| MeshGuard | `meshguard` | concept / Monitor |
| The Hockey Analytics | `the-hockey-analytics` | Focus |
| The Hockey Brain | `the-hockey-brain` | Monitor |
| The Atomic Network | `the-atomic-network` | Monitor |
| The Print Route | `the-print-route` | Monitor |
| Föräldraledighetsplaneraren | `parental-leave-planner` | Focus |
| Bebischecklistan | `bebischecklistan` | Monitor |
| Baby Sellpy | `baby-sellpy` | idea |
| TUR Bilkalkyl | `tur-bilkalkyl` | idea |
| TUR Bostadsplanering | `tur-bostadsplanering` | idea |
| AI Automation Fabric | `ai-automation-fabric` | Monitor |
| The Price Lab | `the-price-lab` | Monitor |
| The Agent Fabric | `the-agent-fabric` | Monitor |
| The Data Labelers | `the-data-lablers` | concept |
| ServiceBuddy / UTKO | `utko-service-platform` | concept |
| TUR Travel Tools | `tur-travel-tools` | concept |
| Data Conversation Prototype | `data-conversation-prototype` | concept |

## Intentional extras (not registry projects)

- `emil-ingemark-karlsson` — Personal trust realm distribution surface
- `post-human-venture-engine` — Narrative / methodology project page

## Homepage cards

Homepage shows a curated subset (Focus + selected Monitor + Linked personal). Full pipeline remains on `/projects`. Publication subset ≠ ownership.

## Re-verify

Run whenever registry changes:

```bash
# from monorepo-adjacent check
python3 planning/scripts/reconcile-pipeline.py
```

Or re-diff registry project IDs against `src/content/projects/*.md` stems.
