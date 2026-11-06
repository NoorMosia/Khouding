# Hidden tests, p10-count-times-price

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n2.5` | `Enter the count:\nEnter the price:\n7.5\n` | whole result from a decimal price |
| t2 | `0\n9.99` | `Enter the count:\nEnter the price:\n0\n` | count zero |
| t3 | `4\n1.25` | `Enter the count:\nEnter the price:\n5\n` | lands on a clean decimal |
| t4 | `10\n2.5` | `Enter the count:\nEnter the price:\n25\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
