# Agents — theunnamedroads

Travel site. **Production host: Vercel** (not Netlify).

| | |
|--|--|
| Vercel team | `thepricelab` (The Unnamed Roads) |
| Vercel project | `tur-site` |
| Domains | `www.theunnamedroads.com` (canonical), apex → www 301 |
| Deploy | `git push origin main` → GitHub → Vercel |
| Canonical host | `https://www.theunnamedroads.com` — apex and `http://` 301 at Vercel edge (`vercel.json`); internal links use `www` |
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

## Agent loop (Cursor Cloud Automations or OpenHands)

Semi-automatic 24/7 Execute + Learn loop. **Human merge only** — no auto-merge.

Same GitHub labels (`agent:draft` → `agent:ready` → …) work with **Cursor Cloud Automations** (primary) or **OpenHands** as an alternate executor — see [`docs/agent-setup/OPENHANDS.md`](docs/agent-setup/OPENHANDS.md).

| | |
|--|--|
| Install | `corepack enable && pnpm install --frozen-lockfile` |
| Verify before PR | `pnpm check` |
| Build when needed | `pnpm build` |
| Default branch | `main` |
| Human inbox | https://github.com/pulls/assigned |
| Docs | `docs/agent-setup/` (EXECUTE_PROMPT, LEARN_PROMPT, APPROVE, PORTABLE_PLAYBOOK, OPENHANDS) |
| Issue template | `.github/ISSUE_TEMPLATE/agent-task.yml` → start `agent:draft`, flip to `agent:ready` |

Runtime: Astro 5 static; pnpm 9 via corepack; Vercel deploy on push to `main`. Cursor Cloud Agent environment: `.cursor/environment.json`. OpenHands stub: `.openhands/` → this file.

