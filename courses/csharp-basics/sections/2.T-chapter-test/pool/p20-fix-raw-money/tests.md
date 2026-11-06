# Hidden tests, p20-fix-raw-money

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7.5` | `Enter the price:\nPrice: 7.50\n` | must become 7.50 |
| t2 | `10` | `Enter the price:\nPrice: 10.00\n` | must become 10.00 |
| t3 | `19.95` | `Enter the price:\nPrice: 19.95\n` | already two decimals |
| t4 | `0` | `Enter the price:\nPrice: 0.00\n` | must become 0.00 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
