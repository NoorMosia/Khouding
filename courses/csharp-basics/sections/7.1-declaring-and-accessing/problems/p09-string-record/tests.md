# Hidden tests, p09-string-record

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\nEngineer` | `Ada\nEngineer\n` | normal |
| t2 | `Linus\nMaintainer` | `Linus\nMaintainer\n` | different text |
| t3 | `Grace\nAdmiral` | `Grace\nAdmiral\n` | another |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
