# Hidden tests, p08-running-total

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n20\n30` | `Enter the first amount:\nEnter the second amount:\nEnter the third amount:\n60\n` | 60 |
| t2 | `0\n0\n0` | `Enter the first amount:\nEnter the second amount:\nEnter the third amount:\n0\n` | 0 |
| t3 | `5\n-3\n8` | `Enter the first amount:\nEnter the second amount:\nEnter the third amount:\n10\n` | 10 (includes a negative amount) |
| t4 | `100\n250\n75` | `Enter the first amount:\nEnter the second amount:\nEnter the third amount:\n425\n` | 425 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
