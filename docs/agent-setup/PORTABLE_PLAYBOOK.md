# Portable playbook: semi-automated 24/7 + self-learning agents

This repo follows the same operating model as `emilingemarkarlsson/emilingemarkarlsson-astro-theme`.

ROI: **matad kö + mänsklig merge** — inte full auto-merge. Learn-loopen gör systemet smartare över tid.

---

## What you get

```text
You write Agent Task issues (agent:draft)
  → you flip to agent:ready
  → Execute cron (*/30) claims ONE issue → branch → CI → PR
  → PR lands in GitHub Assigned / Review requests
  → you Approve + Merge → Vercel deploys from main
  → concrete Learnings become [learn] issues (learn:candidate)
  → Learn cron (every 6h) promotes ONE learning → .cursor/rules or skill
  → you merge the tiny learn-PR
```

Without `agent:ready` issues, Execute should no-op.

---

## Repo-specific runtime

| | |
|--|--|
| Install | `corepack enable && pnpm install --frozen-lockfile` |
| Verify | `pnpm check` (lint + astro check) |
| Build | `pnpm build` (when acceptance requires it) |
| Deploy | `git push origin main` → Vercel (`tur-site`) |
| Default branch | `main` |
| Human inbox | https://github.com/pulls/assigned |

See also `AGENTS.md` for content and hosting rules.

---

## Files in this repo

| Path | Role |
|------|------|
| [EXECUTE_PROMPT.md](./EXECUTE_PROMPT.md) | Paste into Execute automation |
| [LEARN_PROMPT.md](./LEARN_PROMPT.md) | Paste into Learn automation |
| [APPROVE.md](./APPROVE.md) | Human approve habit |
| `.cursor/rules/always-on.mdc` | Standing constraints |
| `.cursor/skills/write-agent-issue/` | How to write Agent Tasks |
| `.cursor/skills/promote-learning/` | How Learn promotes a learning |
| `.github/ISSUE_TEMPLATE/agent-task.yml` | Issue form → `agent:draft` |

When prompts in git change → **re-paste** into Cursor Automations UI.

---

## Labels

`agent:draft` → `agent:ready` → `agent:running` → `agent:done` (+ `agent:needs-human`, `learn:candidate`)

---

## Smoke test

1. Agent Task → flip to `agent:ready` with trivial docs acceptance.
2. Wait for Execute ≤ 30 min → PR in Assigned.
3. Merge; confirm Vercel deploy.
4. Optional: `[learn]` issue → Learn PR → merge.
