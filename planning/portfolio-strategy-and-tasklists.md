# Portfolio Strategy & Tasklists — August 2026

## Thesis alignment

Company OS is **not** a company with AI executives. It is a **control loop**:

Signal → Decision → Work → Outcome → Lesson — with human gates and Focus · Monitor · Parked allocation.

Every project must answer:

1. **Real problem** — who hurts, when, how do they solve it today?
2. **Agent-native wedge** — can an operator or assistant complete the job from mobile without fake autonomy?
3. **Evidence path** — what falsifiable outcome in ≤12 weeks?
4. **Platform fit** — does it strengthen Signal Mesh, Operator Context, MeshGuard or a Focus bet?

---

## Status map (23 projects)

### Focus — active validation (4)

| Project | Problem | Agent-native wedge | Live site |
| --- | --- | --- | --- |
| **TUR Company OS** | Portfolio decisions scatter across SaaS | Mobile approvals + decision memory | No (platform) |
| **Parental leave planner** | Swedish parents can't see pay/day trade-offs | Plan + share from phone / assistant | Yes |
| **The Hockey Analytics** | Clubs get dashboards, not decisions | Digestible club intelligence | Yes |
| **The Unnamed Roads** | Operators lack decision-first playbooks | Field Notes + Company OS narrative | Yes |

### Monitor — live, not daily growth (6)

| Project | Why Monitor | Live site |
| --- | --- | --- |
| **MeshGuard** | Critical for agent governance thesis | No |
| **The Hockey Brain** | Overlaps THA; keep consulting surface | Yes |
| **The Atomic Network** | Pilot GTM; hyperlocal + mobile wedge | Yes (pilot) |
| **The Agent Fabric** | Narrative / SEO until product wedge | Yes |
| **AI Automation Fabric** | Workflow cards handoff to agents | Yes |
| **Signal Mesh** *(new)* | Problem-first signal ingestion | No |
| **Operator Context** *(new)* | MCP/API for assistants | No |

### Linked — not a venture

| **EIK** | Personal trust realm distribution | Yes |

### Parked — honest inactive (12)

The Data Labelers, UTKO, Baby Sellpy, Bilkalkyl, Bostadsplanering, Travel Tools, Data Conversation, Post-Human Venture Engine, Print Route, Price Lab, Bebischecklistan — crowded market, ops-heavy, or absorbed into Company OS narrative.

---

## New concepts (recommended build order)

1. **Signal Mesh** — ranked daily signals → decision queue (enables everything)
2. **Operator Context** — MCP tools for read portfolio / draft decisions / approve
3. **MeshGuard** — promote from prototype to enforced policy on Operator API

---

## Linear tasklists

Import `planning/linear-portfolio-tasklist.csv` into project **The Unnamed Roads — Visibility** or a new **Portfolio Execution** project.

### A. Platform (Company OS)

- [ ] Signal Mesh v0: PostHog + manual SERP + inbox → 3 ranked decisions/week
- [ ] Operator Context MCP: read Focus status + pending approvals (read-only)
- [ ] MeshGuard: allow-list tools per workflow on Operator API
- [ ] Mobile approval flow: Approve / Defer / Reject with audit event

### B. Focus bet — Parental

- [ ] Agent handoff: export plan summary structured for assistant context
- [ ] One FAQ/AEO page targeting "föräldraledighet planera dagar"
- [ ] PostHog funnel: start plan → complete → share

### C. Focus bet — THA

- [ ] Club Pack beta: one-page offer + assistant-readable summary
- [ ] Weekly club intelligence digest format (mobile-first)
- [ ] Outcome metric: clubs completing onboarding wizard

### D. Focus bet — TUR / Field Notes

- [ ] Monthly proof refresh ritual (see monthly-proof-refresh-protocol.md)
- [ ] One case study draft when sourced metrics exist
- [ ] Homepage hero ↔ project list parity audit (automated)

### E. Monitor — TAN

- [ ] Validate one vertical pilot (broker OR mower) with human send only
- [ ] Assistant prompt pack for campaign draft (internal, not public outreach page)
- [ ] Kill/pivot review if no waitlist signal in 8 weeks

### F. Parked cleanup

- [ ] Add `Parked` banner on project pages without live sites
- [ ] Review Print Route / Price Lab for spin-down or single-retailer pilot only
- [ ] Archive Post-Human Venture Engine content into Company OS explainer

---

## Weekly operator ritual

1. Run `planning/scripts/reconcile-links.py`
2. Update keyword log in `planning/keyword-serp-tracking.md`
3. Max three Focus decisions in Linear
4. No status inflation (Parked ≠ Active)
