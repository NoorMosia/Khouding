# Hidden tests, p02-number-rows

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3` | `Enter rows and cols:\n1 2 3\n1 2 3\n` | two rows of 1 2 3 |
| t2 | `1\n5` | `Enter rows and cols:\n1 2 3 4 5\n` | one row 1 2 3 4 5 |
| t3 | `3\n1` | `Enter rows and cols:\n1\n1\n1\n` | three rows each just 1 (no trailing space) |
| t4 | `2\n4` | `Enter rows and cols:\n1 2 3 4\n1 2 3 4\n` | two rows of 1 2 3 4 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
