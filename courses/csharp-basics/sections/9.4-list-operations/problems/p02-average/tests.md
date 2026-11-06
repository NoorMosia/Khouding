# Hidden tests, p02-average

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30` | `20\n` | 20 |
| t2 | `2\n1\n2` | `1.5\n` | 1.5 (proves cast) |
| t3 | `1\n7` | `7\n` | 7 |
| t4 | `4\n2\n4\n6\n8` | `5\n` | 5 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
