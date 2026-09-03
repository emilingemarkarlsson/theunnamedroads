# Agents — theunnamedroads

Travel site. **Production host: Vercel** (not Netlify).

| | |
|--|--|
| Vercel team | `thepricelab` (The Unnamed Roads) |
| Vercel project | `tur-site` |
| Domains | `www.theunnamedroads.com`, apex |
| Deploy | `git push origin main` → GitHub → Vercel |
| Framework | Astro static; package manager **pnpm** |
| Local | `~/Documents/dev/theunnamedroads` |

## Rules

- Use `pnpm` (see `packageManager` in `package.json`).
- Content collection date field is `publishedDate` (not `pubDate`).
- In MDX, avoid `~price` (strikethrough). Prefer `approx €…`.
- Commit author: Gmail or GitHub noreply — never Husqvarna work email.
- Prefer GitHub deploy over CLI `vercel deploy`.

## Contact form

Posts JSON to `https://tur-automations.vercel.app/api/webhooks/contact` (not Netlify functions).
Source label: `Contact Form - The Unnamed Roads`.

Cross-portfolio hosting map: `tur-automations/docs/HOSTING-VERCEL.md`.
Monitoring/contact ops: `tur-automations/docs/MONITORING-SYNTHETIC.md`.

## Agent loop (Cursor Cloud Automations)

Semi-automatic 24/7 Execute + Learn loop. **Human merge only** — no auto-merge.

| | |
|--|--|
| Install (Cloud Agent) | `corepack enable && pnpm install --frozen-lockfile` |
| Verify before PR | `pnpm check` |
| Build when needed | `pnpm build` |
| Default branch | `main` |
| Human inbox | https://github.com/pulls/assigned |
| Docs | `docs/agent-setup/` (EXECUTE_PROMPT, LEARN_PROMPT, APPROVE, PORTABLE_PLAYBOOK) |
| Issue template | `.github/ISSUE_TEMPLATE/agent-task.yml` → start `agent:draft`, flip to `agent:ready` |

Runtime: Astro 5 static; pnpm 9 via corepack; Vercel deploy on push to `main`. Cloud Agent environment: `.cursor/environment.json`.

