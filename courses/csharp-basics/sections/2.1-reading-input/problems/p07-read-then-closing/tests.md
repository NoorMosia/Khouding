# Hidden tests, p07-read-then-closing

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada` | `What is your name?\nAda\nWelcome aboard.\n` | normal |
| t2 | `Jin` | `What is your name?\nJin\nWelcome aboard.\n` | short |
| t3 | `Fatima` | `What is your name?\nFatima\nWelcome aboard.\n` | another |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
