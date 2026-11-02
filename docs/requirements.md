# EasyLib — Requisiti e backlog

> Fonti: estratto del documento D1 (slide precedente) e Issue aperte su GitHub
> (verificate con `gh issue list` / `gh issue view` in data 2026-11-02).
> Nessun requisito è stato aggiunto oltre a quanto presente nelle fonti.

## 1. Attori

| Attore | Descrizione (D1) |
|---|---|
| Utente biblioteca | Studente registrato |
| Operatore biblioteca | Personale della biblioteca |

## 2. Requisiti funzionali (RF)

| ID | Requisito | Descrizione (D1) |
|---|---|---|
| RF1 | Accesso al sistema | Autenticazione di studenti e operatori; permessi di accesso alle funzionalità in base al ruolo. |
| RF2 | Registrazione e gestione del profilo utente | — |
| RF3 | Consultazione del catalogo | Utenti e operatori cercano i libri per titolo, autore, casa editrice e ISBN; si vede la disponibilità delle copie. |
| RF4 | Gestione dei prestiti (operatori) | Registra utente, libro, data di inizio e data prevista di restituzione e aggiorna la disponibilità del libro. La restituzione aggiorna la disponibilità e mantiene lo storico dei prestiti conclusi. |
| RF5 | Consultazione dei prestiti | Titolo presente nel D1, descrizione non inclusa nell'estratto. |
| RF6 | Proroghe | Titolo presente nel D1, descrizione non inclusa nell'estratto. |
| RF7 | Consultazione delle biblioteche | Titolo presente nel D1, descrizione non inclusa nell'estratto. |

## 3. Requisiti non funzionali (RNF)

| ID | Requisito | Descrizione (D1) |
|---|---|---|
| RNF2 | Performance | 95% delle richieste entro 2 s con almeno 100 utenti simultanei. |

> Nota: la Issue #2 cita tra i riferimenti anche **RNF1**, ma la sua definizione non
> è contenuta nell'estratto D1 fornito; non viene quindi specificata qui.

## 4. Use Case (UC)

| ID | Use Case | RF | Attore | Relazioni (D1) |
|---|---|---|---|---|
| UC-03 | Ricercare libri | RF3 | — | — |
| UC-04 | Registrare un prestito | RF4 | Operatore | «include» verifica utente, disponibilità del libro, limite dei prestiti attivi |
| UC-05 | Registrare una restituzione | RF4 | Operatore | «include» verifica dati prestito; «extend» Gestire penalità [restituzione in ritardo] |

> Nota: l'estratto D1 riporta solo UC-03, UC-04 e UC-05; eventuali altri use case
> (es. UC-01, UC-02) non sono inclusi perché non presenti nella fonte.

## 5. Indice del backlog

User story presenti su GitHub al 2026-11-02 (unica Issue aperta):

| US | Titolo | Issue | Riferimenti | Stima | Stato |
|---|---|---|---|---|---|
| US-02 | Login operatore | **Issue #2** | RF1, RNF1 | 3 SP | OPEN (Sprint 1) |

**US-02 — Login operatore (Issue #2)**
> Come operatore, voglio autenticarmi,
> in modo da accedere alle funzioni di gestione.

Criteri di accettazione (estratto dalla Issue #2):
- AC-US02-01 — Con credenziali valide l'operatore accede.
- AC-US02-02 — Con credenziali errate l'accesso è negato.
- AC-US02-03 — Le funzioni di gestione sono accessibili solo dopo l'accesso.

## 6. Tracciamento RF → UC → US

| RF | UC | US (Issue) |
|---|---|---|
| RF1 | — | US-02 (Issue #2) |
| RF2 | — | — |
| RF3 | UC-03 | — |
| RF4 | UC-04, UC-05 | — |
| RF5 | — | — |
| RF6 | — | — |
| RF7 | — | — |

> Il backlog è attualmente incompleto: RF2, RF3, RF4, RF5, RF6 e RF7 non hanno
> ancora una user story su GitHub. Le corrispondenti US andranno create come Issue
> e questo indice aggiornato.
