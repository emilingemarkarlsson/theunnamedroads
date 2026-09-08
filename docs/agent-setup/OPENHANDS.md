# OpenHands executor (alternate to Cursor Cloud Automations)

OpenHands can run the **same GitHub label loop** as Cursor Execute — one `agent:ready` issue at a time, branch, verify, PR, human merge. Cursor-specific prompts and automations stay in [EXECUTE_PROMPT.md](./EXECUTE_PROMPT.md) and [LEARN_PROMPT.md](./LEARN_PROMPT.md); this file is the OpenHands-facing slice only.

---

## Loop (shared with Cursor)

```text
agent:draft → agent:ready → agent:running → PR → human merge → agent:done
```

| Rule | Detail |
|------|--------|
| Claim | **One** open issue with `agent:ready` per run. Ignore `agent:running` / `agent:done`. |
| Sort | `[qNN]` prefix in title (lowest N first); else oldest `created_at`. |
| Labels | On claim: add `agent:running`, remove `agent:ready`. On PR: set `agent:done`. |
| PR | Branch `cursor/agent-issue-<number>`, link issue (`Closes #<number>`). |
| Merge | **Never auto-merge.** Human approves via [Review requests](https://github.com/pulls/review-requested) / [Assigned](https://github.com/pulls/assigned). |
| Inbox | Mark PR ready (not draft), assign + request review from `emilingemarkarlsson`. |

Full playbook: [PORTABLE_PLAYBOOK.md](./PORTABLE_PLAYBOOK.md). Human approve habit: [APPROVE.md](./APPROVE.md).

---

## Install & verify (this repo)

| Step | Command |
|------|---------|
| **INSTALL** | `corepack enable && pnpm install --frozen-lockfile` |
| **VERIFY** | `pnpm check` |
| Build (when acceptance requires) | `pnpm build` |

Repo rules and hosting: root [`AGENTS.md`](../../AGENTS.md). Standing constraints: `.cursor/rules/always-on.mdc` (apply even when not using Cursor UI).

---

## What OpenHands should read

1. Issue acceptance criteria
2. [`AGENTS.md`](../../AGENTS.md)
3. Relevant `.cursor/rules/` and `.cursor/skills/` (same as Cursor Execute)
4. This file for executor-specific install/verify and inbox routing

Do **not** duplicate or replace [EXECUTE_PROMPT.md](./EXECUTE_PROMPT.md) — paste that prompt only into Cursor Automations.

---

## Suggested OpenHands task prompt (paste into your OpenHands job)

```
Pick ONE open issue labeled agent:ready in this repo (lowest [qNN] title prefix, else oldest).

1. Set agent:running, remove agent:ready
2. Read acceptance criteria; read AGENTS.md and docs/agent-setup/OPENHANDS.md
3. Minimal implementation only
4. INSTALL: corepack enable && pnpm install --frozen-lockfile
5. VERIFY: pnpm check (pnpm build if acceptance requires)
6. Push branch cursor/agent-issue-<number>; open PR (Closes #<number>)
7. Ready for review; assign + request review: emilingemarkarlsson
8. Set agent:done on the issue

Never merge. Max 2 retries; if blocked: agent:needs-human + comment why.
```

---

## `.openhands/` stub

Project-level OpenHands customization lives in [`.openhands/`](../../.openhands/) and points at root [`AGENTS.md`](../../AGENTS.md). Optional `setup.sh` / Stop hooks can wrap the same INSTALL/VERIFY commands above; see [OpenHands repository customization](https://docs.openhands.dev/openhands/usage/customization/repository).
