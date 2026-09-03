# Learn loop (automation prompt)

Paste into a **new** Cursor automation (name: `Learn from agent runs`), same repo.

**Trigger:** cron `0 */6 * * *` (var 6:e timme) — eller manuellt.

```
Plocka EN open issue med label "learn:candidate" i detta repo (äldst först).
Om ingen sådan issue: avsluta utan åtgärd (inga tomma PR:er).

Mål: omvandla EN konkret learning till något agenten följer nästa gång — inte en bloggpost.

1. Läs issue + länkad PR (om angiven)
2. Läs `.cursor/skills/promote-learning/SKILL.md` och följ den
3. Välj EXAKT en promotion (minsta ändringen som räcker):
   - Uppdatera befintlig `.cursor/rules/*.mdc` ELLER
   - Uppdatera befintlig `.cursor/skills/*/SKILL.md` ELLER
   - Lägg 5–15 rader i `docs/agent-runs/YYYY-MM-DD-<slug>.md` + peka från skill/rule om det behövs senare
4. Kör inte onödiga builds för docs/rules-only; om kod rörs: `pnpm check`
5. Push branch `cursor/learn-<issue-nummer>`, öppna PR (Ready for review)
6. Assign + request review: emilingemarkarlsson
7. PR-body: ## Din tur, Vad som ändrades, vilken learning, Efter merge: unassign
8. Ta bort label `learn:candidate` och stäng learn-issuen när PR:n är öppnad (Closes #<learn-issue> i PR-body)

Regler:
- En learning → en fil/change-set. Inga refactors.
- Hoppa över vaga learnings ("var försiktig"). Kräv konkret regel agenten kan följa.
- Inga secrets. Merga aldrig själv.
- Om learning redan finns i rules/skills: kommentera på issue och ta bort learn:candidate utan PR.
```
