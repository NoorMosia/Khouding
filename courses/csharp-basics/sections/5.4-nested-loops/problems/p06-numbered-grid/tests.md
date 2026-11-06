# Hidden tests, p06-numbered-grid

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3` | `Enter rows and cols:\n1 2 3\n4 5 6\n` | row1: 1 2 3; row2: 4 5 6 |
| t2 | `1\n4` | `Enter rows and cols:\n1 2 3 4\n` | 1 2 3 4 |
| t3 | `3\n1` | `Enter rows and cols:\n1\n2\n3\n` | 1 / 2 / 3 |
| t4 | `2\n2` | `Enter rows and cols:\n1 2\n3 4\n` | 1 2 / 3 4 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
