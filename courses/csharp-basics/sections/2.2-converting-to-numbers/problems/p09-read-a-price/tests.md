# Hidden tests, p09-read-a-price

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4.5` | `Enter the price:\n4.5\n` | one decimal place |
| t2 | `0` | `Enter the price:\n0\n` | free |
| t3 | `19.95` | `Enter the price:\n19.95\n` | common price shape |
| t4 | `120.5` | `Enter the price:\n120.5\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
