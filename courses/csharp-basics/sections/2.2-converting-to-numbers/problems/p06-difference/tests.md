# Hidden tests, p06-difference

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n3` | `Enter the first number:\nEnter the second number:\n7\n` | positive result |
| t2 | `3\n10` | `Enter the first number:\nEnter the second number:\n-7\n` | negative result |
| t3 | `7\n7` | `Enter the first number:\nEnter the second number:\n0\n` | zero |
| t4 | `200\n50` | `Enter the first number:\nEnter the second number:\n150\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
