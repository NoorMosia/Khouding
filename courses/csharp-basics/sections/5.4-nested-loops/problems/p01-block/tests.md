# Hidden tests, p01-block

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3` | `Enter rows and cols:\n***\n***\n` | 2 rows of 3 stars |
| t2 | `1\n4` | `Enter rows and cols:\n****\n` | 1 row of 4 (1-by-k edge) |
| t3 | `4\n1` | `Enter rows and cols:\n*\n*\n*\n*\n` | 4 rows of 1 (k-by-1 edge) |
| t4 | `3\n3` | `Enter rows and cols:\n***\n***\n***\n` | square |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
