# Hidden tests, p02-power

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n10` | `Enter the base:\nEnter the exponent:\n1024\n` | 1024 |
| t2 | `5\n2` | `Enter the base:\nEnter the exponent:\n25\n` | 25 |
| t3 | `10\n3` | `Enter the base:\nEnter the exponent:\n1000\n` | 1000 |
| t4 | `7\n0` | `Enter the base:\nEnter the exponent:\n1\n` | 1 (anything to the 0 is 1) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
