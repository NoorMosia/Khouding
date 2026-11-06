# Hidden tests, p07-negative-remainder

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `-7\n3` | `Enter a:\nEnter b:\n-1\n` | -1 (sign from -7) |
| t2 | `7\n-3` | `Enter a:\nEnter b:\n1\n` | 1 (sign from 7) |
| t3 | `-10\n5` | `Enter a:\nEnter b:\n0\n` | 0 (exact) |
| t4 | `-8\n3` | `Enter a:\nEnter b:\n-2\n` | -2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
