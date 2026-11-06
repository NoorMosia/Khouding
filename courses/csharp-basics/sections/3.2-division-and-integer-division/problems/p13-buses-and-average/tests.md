# Hidden tests, p13-buses-and-average

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n4` | `Enter the number of passengers:\nEnter the number of buses:\n2\n2.5\n` | 2 then 2.5 |
| t2 | `9\n4` | `Enter the number of passengers:\nEnter the number of buses:\n2\n2.25\n` | 2 then 2.25 |
| t3 | `20\n8` | `Enter the number of passengers:\nEnter the number of buses:\n2\n2.5\n` | 2 then 2.5 |
| t4 | `16\n4` | `Enter the number of passengers:\nEnter the number of buses:\n4\n4\n` | 4 then 4 (exact) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
