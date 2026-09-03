# Godkänn agent-PR:er (din kö)

## Primär kö (bokmärk denna)

### → [Review requests](https://github.com/pulls/review-requested)

Hit landar PR:er där Execute (Cursor-boten) har bett dig om review.

### Backup: [Assigned to you](https://github.com/pulls/assigned)

Execute ska alltid **assigna** dig också. Använd den här om review-request saknas.

---

### På dator

1. Öppna [Assigned](https://github.com/pulls/assigned) (eller [Review requests](https://github.com/pulls/review-requested))
2. Klicka PR:n → läs **## Din tur** (Vercel Preview) + diff
3. **Approve** → **Merge** (när CI / Vercel är grön)
4. **Ta bort dig som assignee** (sidebar → Assignees → X) — GitHub nollställer den inte vid merge

### På mobil (GitHub-appen)

1. Push-notis *“requested your review”* / *assigned* → öppna
2. Approve → Merge
3. Under Assignees: ta bort dig själv

### Om båda köerna är tomma

Inget att göra just nu.

### Relaterat

| Länk | Vad |
|------|-----|
| [Review requests](https://github.com/pulls/review-requested) | **Primär kö** |
| [Assigned](https://github.com/pulls/assigned) | Backup-kö |
| [Open `cursor/agent-issue-*` PRs](https://github.com/emilingemarkarlsson/theunnamedroads/pulls?q=is%3Apr+is%3Aopen+head%3Acursor%2Fagent-issue-) | Manuell filter |
| [Issues `agent:done`](https://github.com/emilingemarkarlsson/theunnamedroads/issues?q=is%3Aissue+is%3Aopen+label%3Aagent%3Adone) | Agent klar — PR borde finnas |

Efter merge av docs som ändrar Execute-prompten: **klistra in** [EXECUTE_PROMPT.md](./EXECUTE_PROMPT.md) i Cursor automation **Execute agent:ready**.
