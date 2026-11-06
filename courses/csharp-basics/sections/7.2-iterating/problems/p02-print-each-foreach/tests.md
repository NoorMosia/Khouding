# Hidden tests, p02-print-each-foreach

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30` | `10\n20\n30\n` | normal |
| t2 | `1\n7` | `7\n` | edge - length 1 |
| t3 | `0` | `` | edge - length 0: prints nothing |
| t4 | `2\n-4\n4` | `-4\n4\n` | negatives |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
