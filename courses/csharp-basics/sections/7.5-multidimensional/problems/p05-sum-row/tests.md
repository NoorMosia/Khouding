# Hidden tests, p05-sum-row

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n1\n2\n3\n4\n5\n6\n0` | `6\n` | row 0 of 2x3: 6 |
| t2 | `2\n3\n1\n2\n3\n4\n5\n6\n1` | `15\n` | row 1 of 2x3: 15 |
| t3 | `3\n2\n1\n1\n2\n2\n3\n3\n2` | `6\n` | last row of 3x2: 6 |
| t4 | `1\n4\n10\n20\n30\n40\n0` | `100\n` | 1x4 single row: 100 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
