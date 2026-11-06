# Hidden tests, p02-add-with-plus-equals

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n7` | `Enter the total:\nEnter the amount to add:\n17\n` | 17 |
| t2 | `0\n5` | `Enter the total:\nEnter the amount to add:\n5\n` | 5 |
| t3 | `20\n0` | `Enter the total:\nEnter the amount to add:\n20\n` | 20 (add zero) |
| t4 | `100\n50` | `Enter the total:\nEnter the amount to add:\n150\n` | 150 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
