# Hidden tests, p15-order-total

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n10.5\n1` | `Enter the quantity:\nEnter the unit price:\nEnter the discount:\n20\n` | discount applied |
| t2 | `3\n4\n0` | `Enter the quantity:\nEnter the unit price:\nEnter the discount:\n12\n` | no discount |
| t3 | `4\n2.25\n0.5` | `Enter the quantity:\nEnter the unit price:\nEnter the discount:\n8.5\n` | clean decimal result |
| t4 | `10\n5.5\n5` | `Enter the quantity:\nEnter the unit price:\nEnter the discount:\n50\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
