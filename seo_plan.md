# SEO Content Automation Plan (The Unnamed Roads)

> Goal: Build a scalable, topic-consistent system that discovers high-quality SEO article opportunities and publishes content safely (human-in-the-loop first, automation later).

---

## Phase 0 — Prerequisites (Done / Confirm)
- [ ] Topical backbone defined (core topic + pillars + guardrails)
- [ ] Site is single-language (EN) and targets one primary audience
- [ ] Basic site structure exists (home → pillars → posts)
- [ ] Analytics + tracking ready
  - [ ] Google Search Console configured
  - [ ] GA4 (optional but useful)
  - [ ] Sitemap + robots.txt sane

**Definition of success:** Google understands the site’s topic and starts showing impressions for relevant queries.

---

## Phase 1 — Calibration (Manual Publishing Loop, 2–4 weeks)
**Purpose:** Prove topical fit + learn what Google indexes and surfaces.

### Deliverables
- [ ] Choose **1 pillar** to focus on first
- [ ] Publish **5–7 articles** (1–2 per week) under that pillar
- [ ] Each article must:
  - [ ] Answer one clear search intent (informational preferred)
  - [ ] Link to the pillar page + 1–2 related articles
  - [ ] Include a small, consistent CTA to the relevant project/venture page (if applicable)
  - [ ] Avoid vague thought-leadership unless it has search demand

### Acceptance criteria
- [ ] Pages indexed in Google
- [ ] Impressions increasing in GSC (even if clicks are low)
- [ ] Queries shown in GSC match your intended topic clusters

---

## Phase 2 — Build the “Signal Machine” (No Auto-Publishing Yet)
**Purpose:** Automate discovery + prioritization of article topics.

### Pipeline (MVP)
1) **Seeds**
- [ ] Create a seed list per pillar (10–30 seed phrases each)
- [ ] Maintain `seeds.json` in repo (manual at first)

2) **Collect signals (Apify)**
- [ ] Google Autosuggest (from seeds)
- [ ] People Also Ask (PAA) (from seeds)
- [ ] (Optional) SERP snapshot for top queries

3) **Normalize & deduplicate**
- [ ] Lowercase, trim, remove duplicates
- [ ] Keep metadata: source, seed, locale, timestamp

4) **Score & shortlist**
- [ ] Score each query using simple rules:
  - +2 if it appears in both Suggest and PAA
  - +1 if it’s a question (“how/why/what/guide”)
  - +1 if it contains pillar-specific terms
  - -2 if SERP is dominated by huge authorities *and* you have no unique angle
- [ ] Select top 10–30 opportunities per week

### Output (must be stable)
- [ ] Save results as:
  - [ ] `opportunities.csv` (or Google Sheet/Notion)
  - [ ] Each row contains:
    - query
    - pillar
    - intent
    - evidence (suggest/paa/serp titles)
    - score
    - recommended target page (pillar/venture)

**Definition of success:** You get a clean weekly queue of topics worth writing, aligned with your site’s pillars.

---

## Phase 3 — Semi-Automated Writing (Human-in-the-Loop)
**Purpose:** Scale production while maintaining quality + topical consistency.

### Add a “Brief Generator”
For each shortlisted query, generate a brief with:
- [ ] Primary query + secondary terms
- [ ] Search intent
- [ ] Audience & “job to be done”
- [ ] Outline (H2/H3)
- [ ] PAA questions to answer
- [ ] Internal link plan (2–4 links)
- [ ] “Unique angle” (why your article is better)
- [ ] CTA placement

### Add a “Draft Generator”
- [ ] Draft is generated strictly from the brief + your guardrails
- [ ] No unsupported claims
- [ ] Keep consistent voice and structure

### Human review checklist (required)
- [ ] Outline matches intent
- [ ] Intro is clear and non-generic
- [ ] Internal links included and correct
- [ ] No hallucinated facts / unverified stats
- [ ] CTA is present but not spammy
- [ ] Title + meta description exist
- [ ] Ready to publish

**Definition of success:** 1–3 publishable drafts per week with minimal editing.

---

## Phase 4 — Controlled Auto-Publishing (Optional, Only After Proof)
**Purpose:** Reduce manual effort once quality and SEO signals are stable.

### Preconditions (must all be true)
- [ ] 20–30 articles indexed
- [ ] Consistent impressions growth in GSC
- [ ] Low error rate in drafts (few fixes needed)
- [ ] Strong internal linking structure is working
- [ ] You trust your guardrails and scoring

### Auto-publish rules
- [ ] Max 1–2 posts/week (rate-limit)
- [ ] Only publish if:
  - [ ] score >= threshold
  - [ ] brief generated successfully
  - [ ] internal links resolved
  - [ ] passes QA checks
- [ ] Always log:
  - [ ] query → URL mapping
  - [ ] publish date
  - [ ] pillar assignment
  - [ ] model/version used

### Rollback / safety
- [ ] If GSC shows topical drift (wrong queries), pause auto-publish
- [ ] If quality drops, revert to Phase 3 temporarily

**Definition of success:** Safe, steady publishing without diluting topical authority.

---

## Measurement & Feedback Loop (Always On)
### Weekly (15–30 min)
- [ ] Check GSC: impressions, top queries, pages indexed
- [ ] Add 5–10 new seeds based on queries you’re already showing for
- [ ] Remove topics that generate irrelevant impressions (dilution)

### Monthly
- [ ] Identify winning clusters → write 5–10 more posts in that cluster
- [ ] Refresh top posts (improve internal links + clarity)
- [ ] Create or strengthen pillar pages where needed

---

## Guardrails (Non-Negotiables)
- [ ] Never publish content that cannot link to a pillar/target page
- [ ] Never publish outside the defined topical backbone
- [ ] Avoid “trend chasing” unless it maps to a pillar and has clear intent
- [ ] Prefer evergreen, problem-driven queries over vague essays
- [ ] One site = one audience = one language = one authority

---

## Suggested Next Actions (Start Here)
- [ ] Pick the first pillar to validate
- [ ] Write/publish 2 articles this week (manual)
- [ ] Create `seeds.json` for that pillar
- [ ] Build Apify discovery pipeline (Suggest + PAA)
- [ ] Output first `opportunities.csv` list