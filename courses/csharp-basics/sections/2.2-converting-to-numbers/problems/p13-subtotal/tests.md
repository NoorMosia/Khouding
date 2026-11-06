# Hidden tests, p13-subtotal

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3.5` | `Enter the quantity:\nEnter the unit price:\n7\n` | clean result |
| t2 | `0\n9.99` | `Enter the quantity:\nEnter the unit price:\n0\n` | quantity zero |
| t3 | `4\n2.25` | `Enter the quantity:\nEnter the unit price:\n9\n` | lands on a clean decimal |
| t4 | `6\n10.5` | `Enter the quantity:\nEnter the unit price:\n63\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
