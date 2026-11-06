# Hidden tests, p08-absolute-difference

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n3` | `Enter the first number:\nEnter the second number:\n7\n` | 7 |
| t2 | `3\n10` | `Enter the first number:\nEnter the second number:\n7\n` | 7 (same gap, order reversed) |
| t3 | `5\n5` | `Enter the first number:\nEnter the second number:\n0\n` | 0 |
| t4 | `-4\n6` | `Enter the first number:\nEnter the second number:\n10\n` | 10 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
