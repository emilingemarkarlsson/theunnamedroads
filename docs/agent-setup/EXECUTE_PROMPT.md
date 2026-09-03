# Execute automation prompt

Paste into https://cursor.com/automations (Execute) — replace the whole prompt when this file changes.

```
Plocka EN open issue med label "agent:ready" i detta repo.

Sortering (obligatorisk):
- Läs title-prefix `[qNN]` (t.ex. `[q03]`) — lägst N först.
- Saknas `[qNN]` → äldst created_at bland agent:ready.
- En issue per körning. Ignorera issues med agent:running / agent:done.

1. Sätt agent:running, ta bort agent:ready (behåll ev. andra labels utom draft)
2. Läs acceptanskriterier i issue body
3. Läs .cursor/rules/ och .cursor/skills/ som är relevanta (samt AGENTS.md)
4. Implementera MINIMALT för att uppfylla kriterierna
5. Kör lokalt innan commit:
   - corepack enable && pnpm install --frozen-lockfile
   - pnpm check
   - pnpm build (om acceptanskriterier eller ändringar kräver det)
6. Push branch cursor/agent-issue-<nummer>, öppna PR som länkar issue (Closes #<nummer>)
7. Efter PR skapad — gör den synlig i Emils godkännande-kö:
   - Markera PR som Ready for review (inte draft)
   - Assign PR till: emilingemarkarlsson (alltid)
   - Request review från: emilingemarkarlsson (hoppa över om API säger att author inte kan reviewa sig själv)
   - I PR-body: lägg överst "## Din tur" med Vercel Preview-URL om den finns, plus raden "Efter merge: ta bort dig som assignee (GitHub nollställer den inte)."
8. Sätt agent:done på issuen
9. Learn-hook: Om PR-body Learnings innehåller minst EN konkret, återanvändbar regel (fil/kommando/label/check — inte "var försiktig"):
   - Skapa en NY open issue: title `[learn] <max 70 tecken>`, body = learning-bullet(s) + länk till PR, labels: endast `learn:candidate`
   - Kommentera på agent-issuen med länken till learn-issuen
   Annars: ingen learn-issue

PR body ska innehålla: ## Din tur, Vad som ändrades, Verifiering, Learnings (1–3 bullets).
Max 2 retry. Om blockerad: agent:needs-human + kommentar varför.
En issue per körning. Inga secrets i git.
Merga aldrig själv — Emil godkänner och mergar via https://github.com/pulls/assigned / https://github.com/pulls/review-requested.
Efter merge ska Emil unassigna sig så Assigned-kön bara speglar öppna PR:er att godkänna.
```
