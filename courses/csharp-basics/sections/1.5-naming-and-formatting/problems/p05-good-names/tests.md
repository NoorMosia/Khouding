# Hidden tests, p05-good-names

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\n36` | `Ada\n36\n` | normal |
| t2 | `Sam\n9` | `Sam\n9\n` | short name |
| t3 | `Jonathan\n0` | `Jonathan\n0\n` | edge - age zero |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
