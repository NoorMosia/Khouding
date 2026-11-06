# Hidden tests, p05-const-days

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3` | `21\n` | normal |
| t2 | `1` | `7\n` | one week |
| t3 | `0` | `0\n` | edge - zero weeks |
| t4 | `52` | `364\n` | larger (a year) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
