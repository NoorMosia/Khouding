# Hidden tests, p08-guard-then-divide

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n2` | `Enter two numbers:\n5\n` | 10 / 2 = 5 |
| t2 | `7\n3` | `Enter two numbers:\n2\n` | integer division truncates -> 2 |
| t3 | `5\n0` | `Enter two numbers:\ncannot divide by zero\n` | divisor zero -> cannot divide by zero (guard protects) |
| t4 | `9\n-2` | `Enter two numbers:\n-4\n` | negative divisor, truncates toward zero -> -4 |
| t5 | `0\n5` | `Enter two numbers:\n0\n` | zero dividend, nonzero divisor -> 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
