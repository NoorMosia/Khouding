# Hidden tests, p01-price-to-two-decimals

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `19.95` | `Enter a price:\n19.95\n` | already two decimals |
| t2 | `7.5` | `Enter a price:\n7.50\n` | pads to 7.50 |
| t3 | `10` | `Enter a price:\n10.00\n` | whole value shows as 10.00 |
| t4 | `0` | `Enter a price:\n0.00\n` | zero shows as 0.00 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
