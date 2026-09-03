---
name: write-agent-issue
description: Write a verifiable GitHub issue for Cursor Cloud Automations. Use when drafting agent tasks, refining acceptance criteria, or converting a vague request into an Agent Task issue.
---

# Write agent issue

## Goal

Produce an issue a Cloud Agent can close without guessing.

## Required shape

1. **Mål** — one sentence outcome.
2. **Scope** — files/dirs allowed.
3. **Inte i scope** — explicit non-goals.
4. **Acceptanskriterier** — checkboxes that can be verified locally (always include `CI grön`).
5. **Typ** — feature | bugfix | deploy | refactor | docs.

## Rules

- Prefer the **Agent Task** issue template (`.github/ISSUE_TEMPLATE/agent-task.yml`).
- Start with label `agent:draft`; humans flip to `agent:ready`.
- Criteria must be observable (`pnpm check` passes, page X shows Y) — not “make it better”.
- One issue = one PR-sized change.
- No secrets in the issue body.

## Example acceptance block

```markdown
- [ ] CI grön
- [ ] `pnpm check` passes
- [ ] Page `/contact` still renders form + webhook target unchanged
```
