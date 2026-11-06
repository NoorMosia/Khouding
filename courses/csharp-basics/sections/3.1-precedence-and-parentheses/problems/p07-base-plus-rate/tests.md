# Hidden tests, p07-base-plus-rate

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n2\n3` | `Enter the base fee:\nEnter the rate:\nEnter the units:\n11\n` | 5 + 6 = 11 |
| t2 | `10\n0\n9` | `Enter the base fee:\nEnter the rate:\nEnter the units:\n10\n` | rate zero, 10 + 0 = 10 |
| t3 | `0\n4\n7` | `Enter the base fee:\nEnter the rate:\nEnter the units:\n28\n` | no base, 0 + 28 = 28 |
| t4 | `20\n3\n10` | `Enter the base fee:\nEnter the rate:\nEnter the units:\n50\n` | 20 + 30 = 50 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
