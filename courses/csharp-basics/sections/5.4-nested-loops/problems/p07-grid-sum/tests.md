# Hidden tests, p07-grid-sum

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n2` | `Enter rows and cols:\n9\n` | 1+2+2+4 = 9 |
| t2 | `1\n1` | `Enter rows and cols:\n1\n` | single cell 1*1 = 1 |
| t3 | `3\n1` | `Enter rows and cols:\n6\n` | 1+2+3 = 6 (column) |
| t4 | `1\n4` | `Enter rows and cols:\n10\n` | 1+2+3+4 = 10 (row) |
| t5 | `3\n3` | `Enter rows and cols:\n36\n` | sum of the 3x3 products = 36 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
