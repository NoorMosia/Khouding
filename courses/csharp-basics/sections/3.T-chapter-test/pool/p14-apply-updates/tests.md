# Hidden tests, p14-apply-updates

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n3\n2` | `Enter the starting value:\nEnter the factor:\nEnter the amount to add:\n17\n` | 5*3=15, +2 = 17 |
| t2 | `10\n1\n0` | `Enter the starting value:\nEnter the factor:\nEnter the amount to add:\n10\n` | 10*1=10, +0 = 10 |
| t3 | `4\n0\n7` | `Enter the starting value:\nEnter the factor:\nEnter the amount to add:\n7\n` | 4*0=0, +7 = 7 |
| t4 | `6\n2\n8` | `Enter the starting value:\nEnter the factor:\nEnter the amount to add:\n20\n` | 6*2=12, +8 = 20 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
