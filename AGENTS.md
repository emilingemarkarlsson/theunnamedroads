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

