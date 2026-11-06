# Hidden tests, p07-rate-to-two-decimals

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1.5` | `Enter the rate:\nRate: 1.50\n` | pads to 1.50 |
| t2 | `2.25` | `Enter the rate:\nRate: 2.25\n` | already two decimals |
| t3 | `3` | `Enter the rate:\nRate: 3.00\n` | whole shows as 3.00 |
| t4 | `0.1` | `Enter the rate:\nRate: 0.10\n` | pads to 0.10 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
