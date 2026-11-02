# AGENTS.md — EasyLib

File di contesto per le sessioni OpenCode. Fonti: `readme.md`, `docs/requirements.md`,
`package.json`, Issue GitHub (verificate con `gh`). Il codice è allo stato di
scaffolding iniziale: **nessuna decisione architetturale è stata presa** — non
presumerne alcuna oltre a quanto esiste nel repo.

## Progetto

EasyLib: piattaforma fullstack per la gestione dei prestiti bibliotecari
universitari. Gli utenti consultano il catalogo e i propri prestiti; gli
operatori della biblioteca registrano prestiti e restituzioni (`readme.md`).

## Stack e convenzioni

- **Backend**: Node.js, Express 5, MongoDB via Mongoose 8, JWT per l'autenticazione
  (JWT è dichiarato nel `readme.md`; la dipendenza non è ancora in `package.json`).
- **Moduli ES**: `package.json` ha `"type": "module"` → usare `import`, non `require`.
- **Frontend**: Vue 3 + Vite (dichiarato nel `readme.md`; non ancora presente nel repo).
- **Test**: Jest + Supertest. Comandi: `npm test`, `npm start`.
- **Config**: variabili d'ambiente via dotenv, modello in `.env.example`
  (`PORT`, `DB_URL`, `SUPER_SECRET`). Non committare `.env`.

## Struttura attuale del repo

```
index.js                    # entrypoint (npm start)
app/books.js                # prima route/resource
app/models/book.js          # modello Mongoose
test/authentications.test.js
scripts/seed.js
docs/requirements.md        # requisiti e backlog (vedi sotto)
```

Nient'altro esiste: non assumere cartelle, layer o pattern non ancora creati.

## Fonti di verità

| Cosa serve | Dove |
|---|---|
| Requisiti (attori, RF, RNF, UC), indice del backlog, tracciamento | `docs/requirements.md` |
| User story complete: criteri di accettazione (AC), task, Definition of Ready | GitHub Issues: `gh issue list`, `gh issue view <n>` |
| Stack dichiarato | `readme.md` |
| Tooling e script effettivi | `package.json` |

**Non inventare requisiti.** Se un dettaglio manca nelle fonti, segnalarlo e
chiedere, non assumere. Lacune note documentate in `docs/requirements.md`:

- RF5, RF6, RF7 hanno solo il titolo, nessuna descrizione nell'estratto D1.
- RNF1 è citata dalla Issue #2 ma non è definita nell'estratto D1.
- UC-01 e UC-02 non compaiono nell'estratto D1 (partono da UC-03).
- RF2–RF7 non hanno ancora una user story su GitHub.

## Vincoli espliciti

- **RNF2 (performance)**: 95% delle richieste entro 2 s con almeno 100 utenti
  simultanei. Ogni scelta tecnica che impatti le performance va giustificata
  rispetto a questo vincolo.
- **Ruoli (RF1)**: due attori — *Utente biblioteca* (studente registrato) e
  *Operatore biblioteca* (personale). I permessi sulle funzionalità dipendono
  dal ruolo.
- **RF4**: registrazione di prestiti e restituzioni è riservata agli operatori
  (UC-04, UC-05); il sistema mantiene lo storico dei prestiti conclusi.
- Ogni user story nel backlog deve citare il numero della Issue GitHub.
- Il backlog è incompleto: prima di implementare una funzione, verificare che
  esista una US/Issue corrispondente.

## Come citare gli identificatori

Formati esatti da usare in codice, test, commit, PR e documenti:

| Identificatore | Formato | Esempio |
|---|---|---|
| Requisito funzionale | `RFn` | RF3 |
| Requisito non funzionale | `RNFn` | RNF2 |
| Use case | `UC-nn` | UC-04 |
| User story | `US-nn` **sempre con il numero di Issue** | US-02 (Issue #2) |
| Criterio di accettazione | `AC-USnn-nn` (ID definiti nella Issue) | AC-US02-01 |

Regole:

1. Mai citare una US senza il numero della Issue GitHub corrispondente
   (es. "US-02 (Issue #2)", mai solo "US-02").
2. I test che verificano un criterio di accettazione ne citano l'AC ID nel nome
   (es. `describe("AC-US02-01 ...")`).
3. Commit e PR che implementano una US riportano `US-nn (Issue #n)` e, se
   pertinente, i RF/UC di riferimento.
4. La mappa completa US → RF → UC è in `docs/requirements.md` §6: aggiornarla
   quando si crea o modifica una Issue.
