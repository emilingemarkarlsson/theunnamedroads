# Go-live checklist (manual clicks this agent cannot do)

Cloud Agent tokens are **read-only** on GitHub for labels/issues/merge, and Cursor Automations have **no create API** from this environment.

## Status

- [x] Agent loop scaffold merged ([#10](https://github.com/emilingemarkarlsson/theunnamedroads/pull/10))
- [x] Agent labels bootstrapped (`agent:draft|ready|running|done|needs-human`, `learn:candidate`)
- [x] Execute automation configured (cron `*/30` + `agent:ready`)
- [x] Smoke test ([#11](https://github.com/emilingemarkarlsson/theunnamedroads/issues/11) → [#12](https://github.com/emilingemarkarlsson/theunnamedroads/pull/12)) — Execute picked up `agent:ready` and opened a PR
- [ ] **Agent PR inbox workflow** merged — auto-assign + review request on `cursor/agent-issue-*` PRs (fixes empty Assigned queue)

Re-run label bootstrap if needed: push to `main` (workflow `.github/workflows/sync-agent-labels.yml`) or **Actions → Sync agent labels → Run workflow**.

## Create Execute automation

1. Open https://cursor.com/automations → **New**
2. Repo: `emilingemarkarlsson/theunnamedroads`
3. Trigger: Issue labeled `agent:ready` (or cron `*/30 * * * *`)
4. Paste prompt from [EXECUTE_PROMPT.md](./EXECUTE_PROMPT.md)
5. Tools: GitHub, Open PR, Request Reviewers, Comment — **Don't Allow PR Approval**
6. Save / enable

## Dashboard sanity

- [ ] GitHub integration has repo access
- [ ] Environment linked (`.cursor/environment.json`)
- [ ] MCP GitHub (+ Vercel optional)

## First smoke test

1. **New issue** → template **Agent Task**
2. Fill Mål + Acceptanskriterier (include CI grön)
3. Replace `agent:draft` with `agent:ready`
4. Wait for automation → PR should appear
5. PR ska synas under [Review requests](https://github.com/pulls/review-requested) **och** [Assigned](https://github.com/pulls/assigned)
6. Godkänn enligt [APPROVE.md](./APPROVE.md) — **merga inte förrän du läst diffen**

### Om kön är tom efter smoke test

Smoke test-PR [#12](https://github.com/emilingemarkarlsson/theunnamedroads/pull/12) **mergades redan** — därför syns inget att godkänna. Det betyder att loopen fungerade, inte att den är trasig. Skapa en ny `agent:ready`-issue för nästa test.

## After changing Execute prompt

1. Open your Execute automation in https://cursor.com/automations
2. Replace the prompt with the full block from [EXECUTE_PROMPT.md](./EXECUTE_PROMPT.md)
3. Save

## Create Learn automation (mål 2)

1. Open https://cursor.com/automations → **New**
2. Name: `Learn from agent runs`
3. Repo: same
4. Trigger: cron `0 */6 * * *` (or manual)
5. Paste prompt from [LEARN_PROMPT.md](./LEARN_PROMPT.md)
6. Save / enable

ROI-nivå: håll **mänsklig merge**. Full auto-merge är inte målet — matad kö + learn-PR:er är.
