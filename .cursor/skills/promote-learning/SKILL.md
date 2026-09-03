---
name: promote-learning
description: Turn an agent run learning into a durable rule or skill update. Use when processing learn:candidate issues or promoting PR Learnings into .cursor/rules or .cursor/skills.
---

# Promote learning

## Goal

One concrete learning → one durable instruction the next Execute run will follow.

## Prefer in order

1. **Patch an existing rule** under `.cursor/rules/` if the learning is always-on for this repo.
2. **Patch an existing skill** under `.cursor/skills/` if it only applies in a scenario (CI, agent issues, …).
3. **New short run note** under `docs/agent-runs/YYYY-MM-DD-<slug>.md` only when it is situational context, not a standing rule — and link it from a skill if agents should read it.

## Shape of a good promotion

- Imperative, testable: “Always X when Y” / “Never Z”.
- Names files/commands when relevant (`pnpm check`, label `agent:ready`).
- ≤ ~20 lines added unless replacing a wrong section.

## Reject / skip

- Vague advice (“be careful”, “test more”) without a concrete check.
- One-off content that belongs only in a merged PR body.
- Duplicates of text already in `AGENTS.md` or rules — comment and drop `learn:candidate`.

## After writing

- PR assigns `emilingemarkarlsson`, Ready for review.
- Remove `learn:candidate` when the promotion PR is opened (or note on the issue that PR supersedes it).
