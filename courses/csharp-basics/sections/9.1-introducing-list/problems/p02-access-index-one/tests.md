# Hidden tests, p02-access-index-one

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n20\n30` | `20\n` | 20 |
| t2 | `1\n99\n3` | `99\n` | 99 |
| t3 | `0\n0\n0` | `0\n` | 0 |
| t4 | `-5\n8\n-3` | `8\n` | 8 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
