# Hidden tests, p18-grid-table

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n1\n2\n3\n4\n5\n6` | `1 2 3\n4 5 6\n` | 2x3 table |
| t2 | `1\n4\n7\n8\n9\n10` | `7 8 9 10\n` | 1x4 single row |
| t3 | `3\n1\n5\n6\n7` | `5\n6\n7\n` | 3x1 single column |
| t4 | `2\n2\n-1\n0\n3\n-4` | `-1 0\n3 -4\n` | 2x2 negatives |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
