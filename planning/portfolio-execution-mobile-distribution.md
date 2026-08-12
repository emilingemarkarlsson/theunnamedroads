# Portfolio Execution — Mobile Control + Distribution (4 weeks)

> Linear project: [Portfolio Execution](https://linear.app/turab/project/portfolio-execution-fcf69dc95b9d)  
> Epics TUR-122–TUR-127 · Subtasks TUR-128+  
> Operator surfaces: **Linear Mobile**, **Operator API / iOS**, **PostHog mobile**, **Cursor Mobile**

## Design principle

Every distribution action must be **approvable from the phone**:

| Layer | Mobile control |
| --- | --- |
| **Decide** | Daily Command parent issue — max 3 Approve/Defer/Reject |
| **See** | Operator API Today / Focus / Decisions (iOS or web PWA) |
| **Measure** | PostHog mobile bookmark per Focus project |
| **Publish** | Human gate — no deploy/publish without explicit Approve comment |

Parked projects get **zero** weekly slots unless promoted in a Monday decision.

---

## Week 1 — Baseline + mobile ritual

**Goal:** You can run the studio from the phone before building more product.

| Day | Action | Mobile surface |
| --- | --- | --- |
| Mon | Create recurring `Daily Command — YYYY-MM-DD` in Linear | Linear Mobile |
| Mon | Bookmark PostHog dashboards (TUR site + Parental + THA) | Safari pinned |
| Tue | Log SERP baseline for 5 keywords (`planning/keyword-serp-tracking.md`) | Notes → Linear comment |
| Wed | Parental: audit current funnel in PostHog | PostHog app |
| Thu | THA: define Club Pack beta CTA + one outcome metric | Linear issue body |
| Fri | Weekly review: Approve/Defer/Reject next week's 3 Focus moves | Linear Mobile |

---

## Week 2 — Ship one claim surface per Focus bet

**Goal:** Each Focus project has **one** canonical reach surface.

| Project | Ship | Approve gate |
| --- | --- | --- |
| Parental | Swedish FAQ/AEO page (`föräldraledighet planera dagar`) | Publish on site |
| THA | Club Pack one-pager (mobile-readable) | Publish + beta CTA live |
| TUR | Field Note: "How we allocate Focus from the phone" | Publish post |
| Platform | Signal Mesh v0: 3 ranked signals in Linear comment | No external publish |

---

## Week 3 — Agent-native handoff (no fake autonomy)

**Goal:** Assistants can **read** context; humans **approve** actions.

| Project | Deliverable |
| --- | --- |
| Parental | Structured plan export JSON assistants can read |
| THA | Weekly digest template (markdown, mobile preview) |
| Platform | Operator Context MCP read-only (Focus status + pending) |
| TUR | `/for-assistants` snippet updated when surfaces ship |

---

## Week 4 — Measure, proof, next cycle

**Goal:** Falsify or continue each Focus bet with evidence.

| Check | Source | Mobile |
| --- | --- | --- |
| Parental funnel | PostHog start → complete → share | PostHog |
| THA beta requests | Form/PostHog/email | Inbox + Linear |
| TUR CTAs | `cta_click` on service + Field Notes | PostHog |
| Portfolio honesty | Hero ↔ `/projects` status match | Operator API portfolio |

Run monthly proof protocol (`planning/monthly-proof-refresh-protocol.md`) on last Thursday.

---

## Epic map (Linear)

| Epic | ID | Scope |
| --- | --- | --- |
| Mobile operator ritual | TUR-122 | Daily Command, bookmarks, weekly review |
| Signal Mesh + decisions | TUR-123 | Ranked signals → Linear decisions |
| Parental reach | TUR-124 | FAQ, funnel, agent export |
| THA reach | TUR-125 | Club Pack, digest, onboarding metric |
| TUR Studio reach | TUR-126 | Field Notes, proof, assistant brief |
| Platform mobile gates | TUR-127 | Approvals, MCP, MeshGuard |

Parent epics TUR-106–121 remain; new subtasks nest under epics above.

---

## Monday template (paste into Linear)

```markdown
## Daily Command — YYYY-MM-DD

### Signals (max 3)
1. [PostHog / SERP / inbox] → proposed decision
2. …
3. …

### Approve / Defer / Reject
- [ ] Item 1 — Approve | Defer (date) | Reject (reason)

### Focus distribution this week
- Parental: …
- THA: …
- TUR: …
```

Reference: `tur-company-os/docs/playbooks/DAILY-COMMAND-V0.md`
