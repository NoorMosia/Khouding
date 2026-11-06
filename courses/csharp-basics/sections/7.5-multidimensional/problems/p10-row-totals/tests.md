# Hidden tests, p10-row-totals

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n1\n2\n3\n4\n5\n6` | `1 2 3 | 6\n4 5 6 | 15\n` | 2x3: rows total 6 and 15 |
| t2 | `1\n4\n10\n20\n30\n40` | `10 20 30 40 | 100\n` | 1x4 single row total 100 |
| t3 | `3\n1\n5\n6\n7` | `5 | 5\n6 | 6\n7 | 7\n` | 3x1: each row total is the single cell |
| t4 | `2\n2\n-1\n2\n-3\n4` | `-1 2 | 1\n-3 4 | 1\n` | 2x2 negatives |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
