# Hidden tests, p04-weighted-sum

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n10\n5` | `Enter the adults:\nEnter the children:\nEnter the ticket price:\nEnter the discount:\n45\n` | (5)*10 - 5 = 45 |
| t2 | `1\n0\n20\n0` | `Enter the adults:\nEnter the children:\nEnter the ticket price:\nEnter the discount:\n20\n` | (1)*20 - 0 = 20 |
| t3 | `0\n4\n8\n2` | `Enter the adults:\nEnter the children:\nEnter the ticket price:\nEnter the discount:\n30\n` | (4)*8 - 2 = 30 |
| t4 | `5\n5\n12\n10` | `Enter the adults:\nEnter the children:\nEnter the ticket price:\nEnter the discount:\n110\n` | (10)*12 - 10 = 110 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
