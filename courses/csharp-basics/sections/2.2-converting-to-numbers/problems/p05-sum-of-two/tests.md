# Hidden tests, p05-sum-of-two

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n4` | `Enter the first number:\nEnter the second number:\n7\n` | both positive |
| t2 | `0\n0` | `Enter the first number:\nEnter the second number:\n0\n` | both zero |
| t3 | `-5\n5` | `Enter the first number:\nEnter the second number:\n0\n` | cancels to zero |
| t4 | `100\n25` | `Enter the first number:\nEnter the second number:\n125\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
