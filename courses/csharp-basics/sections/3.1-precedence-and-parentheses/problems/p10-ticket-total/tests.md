# Hidden tests, p10-ticket-total

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n10\n5` | `Enter the number of adults:\nEnter the number of children:\nEnter the ticket price:\nEnter the booking fee:\n55\n` | (5) * 10 + 5 = 55 |
| t2 | `1\n0\n20\n0` | `Enter the number of adults:\nEnter the number of children:\nEnter the ticket price:\nEnter the booking fee:\n20\n` | (1) * 20 + 0 = 20, no fee no children |
| t3 | `0\n4\n8\n3` | `Enter the number of adults:\nEnter the number of children:\nEnter the ticket price:\nEnter the booking fee:\n35\n` | (4) * 8 + 3 = 35, adults zero |
| t4 | `5\n5\n12\n10` | `Enter the number of adults:\nEnter the number of children:\nEnter the ticket price:\nEnter the booking fee:\n130\n` | (10) * 12 + 10 = 130 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
