# Hidden tests, p06-labelled-total

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n4` | `Enter the first number:\nEnter the second number:\nTotal: 7\n` | typical |
| t2 | `0\n0` | `Enter the first number:\nEnter the second number:\nTotal: 0\n` | zero total |
| t3 | `-5\n5` | `Enter the first number:\nEnter the second number:\nTotal: 0\n` | cancels to zero |
| t4 | `100\n250` | `Enter the first number:\nEnter the second number:\nTotal: 350\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
