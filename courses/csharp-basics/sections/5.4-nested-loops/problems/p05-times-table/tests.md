# Hidden tests, p05-times-table

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n3` | `Enter rows and cols:\n1 2 3\n2 4 6\n3 6 9\n` | 3x3 products table |
| t2 | `1\n5` | `Enter rows and cols:\n1 2 3 4 5\n` | one row: 1 2 3 4 5 |
| t3 | `4\n1` | `Enter rows and cols:\n1\n2\n3\n4\n` | one column: 1 / 2 / 3 / 4 |
| t4 | `2\n4` | `Enter rows and cols:\n1 2 3 4\n2 4 6 8\n` | 2 rows of 4 products |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
