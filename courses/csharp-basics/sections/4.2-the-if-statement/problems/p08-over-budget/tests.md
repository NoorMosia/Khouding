# Hidden tests, p08-over-budget

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `120\n100` | `Enter the spend:\nEnter the budget:\n20\n` | over -> 20 |
| t2 | `100\n100` | `Enter the spend:\nEnter the budget:\n` | skips (equal is not over) |
| t3 | `80\n100` | `Enter the spend:\nEnter the budget:\n` | skips (under) |
| t4 | `250\n100` | `Enter the spend:\nEnter the budget:\n150\n` | over -> 150 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
