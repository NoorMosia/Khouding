# Hidden tests, p10-price-line

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `19.95` | `Enter the price:\nPrice: 19.95\n` | typical price |
| t2 | `7.5` | `Enter the price:\nPrice: 7.50\n` | pads to 7.50 |
| t3 | `100` | `Enter the price:\nPrice: 100.00\n` | whole shows 100.00 |
| t4 | `0` | `Enter the price:\nPrice: 0.00\n` | free |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
