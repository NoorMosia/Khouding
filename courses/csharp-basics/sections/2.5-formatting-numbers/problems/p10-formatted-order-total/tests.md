# Hidden tests, p10-formatted-order-total

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n10.5\n1` | `Enter the quantity:\nEnter the unit price:\nEnter the discount:\nTotal: 20.00\n` | discount applied, 20.00 |
| t2 | `3\n4\n0` | `Enter the quantity:\nEnter the unit price:\nEnter the discount:\nTotal: 12.00\n` | no discount, 12.00 |
| t3 | `4\n2.25\n0.5` | `Enter the quantity:\nEnter the unit price:\nEnter the discount:\nTotal: 8.50\n` | clean decimal, 8.50 |
| t4 | `5\n9.99\n0` | `Enter the quantity:\nEnter the unit price:\nEnter the discount:\nTotal: 49.95\n` | larger, 49.95 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
