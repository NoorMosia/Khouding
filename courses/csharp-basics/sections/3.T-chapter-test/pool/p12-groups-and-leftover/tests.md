# Hidden tests, p12-groups-and-leftover

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `17\n5` | `Enter the total:\nEnter the group size:\n3\n2\n` | 3 then 2 |
| t2 | `20\n5` | `Enter the total:\nEnter the group size:\n4\n0\n` | 4 then 0 |
| t3 | `4\n5` | `Enter the total:\nEnter the group size:\n0\n4\n` | 0 then 4 |
| t4 | `100\n7` | `Enter the total:\nEnter the group size:\n14\n2\n` | 14 then 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
