# Hidden tests, p11-fix-row-end

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3` | `Enter rows and cols:\n***\n***\n` | 2 rows of 3 (buggy prints 6 single-star lines) |
| t2 | `1\n4` | `Enter rows and cols:\n****\n` | 1 row of 4 |
| t3 | `3\n1` | `Enter rows and cols:\n*\n*\n*\n` | 3 rows of 1 (same either way, but other cases distinguish) |
| t4 | `2\n2` | `Enter rows and cols:\n**\n**\n` | 2 rows of 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
