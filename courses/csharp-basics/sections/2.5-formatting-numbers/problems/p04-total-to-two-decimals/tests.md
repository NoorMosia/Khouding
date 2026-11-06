# Hidden tests, p04-total-to-two-decimals

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n2.5` | `Enter the count:\nEnter the unit price:\nTotal: 7.50\n` | pads to 7.50 |
| t2 | `2\n19.95` | `Enter the count:\nEnter the unit price:\nTotal: 39.90\n` | gives 39.90 |
| t3 | `0\n9.99` | `Enter the count:\nEnter the unit price:\nTotal: 0.00\n` | count zero, 0.00 |
| t4 | `10\n1.5` | `Enter the count:\nEnter the unit price:\nTotal: 15.00\n` | gives 15.00 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
