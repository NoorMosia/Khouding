# Hidden tests, p17-sum-grid

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n1\n2\n3\n4\n5\n6` | `21\n` | 2x3 sum 21 |
| t2 | `1\n4\n10\n20\n30\n40` | `100\n` | 1x4 sum 100 |
| t3 | `3\n1\n5\n6\n7` | `18\n` | 3x1 sum 18 |
| t4 | `2\n2\n-1\n2\n-3\n4` | `2\n` | 2x2 negatives sum 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
