# Hidden tests, p12-sum-of-three

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1\n2\n3` | `Enter the first number:\nEnter the second number:\nEnter the third number:\n6\n` | small ascending |
| t2 | `0\n0\n0` | `Enter the first number:\nEnter the second number:\nEnter the third number:\n0\n` | all zero |
| t3 | `-5\n5\n10` | `Enter the first number:\nEnter the second number:\nEnter the third number:\n10\n` | includes a negative |
| t4 | `40\n30\n30` | `Enter the first number:\nEnter the second number:\nEnter the third number:\n100\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
