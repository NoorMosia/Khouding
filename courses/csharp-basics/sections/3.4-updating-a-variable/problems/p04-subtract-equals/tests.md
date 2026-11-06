# Hidden tests, p04-subtract-equals

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `20\n5` | `Enter the start:\nEnter the amount to subtract:\n15\n` | 15 |
| t2 | `10\n10` | `Enter the start:\nEnter the amount to subtract:\n0\n` | 0 |
| t3 | `5\n8` | `Enter the start:\nEnter the amount to subtract:\n-3\n` | -3 (goes negative) |
| t4 | `100\n1` | `Enter the start:\nEnter the amount to subtract:\n99\n` | 99 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
