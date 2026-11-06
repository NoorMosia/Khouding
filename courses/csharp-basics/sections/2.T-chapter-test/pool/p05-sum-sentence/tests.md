# Hidden tests, p05-sum-sentence

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3` | `Enter the first number:\nEnter the second number:\n2 + 3 = 5\n` | typical |
| t2 | `0\n0` | `Enter the first number:\nEnter the second number:\n0 + 0 = 0\n` | zeros |
| t3 | `-4\n10` | `Enter the first number:\nEnter the second number:\n-4 + 10 = 6\n` | negative operand |
| t4 | `120\n80` | `Enter the first number:\nEnter the second number:\n120 + 80 = 200\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
