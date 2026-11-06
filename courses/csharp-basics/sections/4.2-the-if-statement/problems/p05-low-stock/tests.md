# Hidden tests, p05-low-stock

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3` | `Enter the stock level:\nreorder\n` | runs -> reorder |
| t2 | `10` | `Enter the stock level:\n` | skips (10 is not < 10) |
| t3 | `9` | `Enter the stock level:\nreorder\n` | runs (just below) |
| t4 | `50` | `Enter the stock level:\n` | skips |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
