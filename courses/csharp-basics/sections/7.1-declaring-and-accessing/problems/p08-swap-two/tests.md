# Hidden tests, p08-swap-two

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n20` | `20\n10\n` | normal |
| t2 | `20\n10` | `10\n20\n` | reversed input |
| t3 | `5\n5` | `5\n5\n` | equal: swap is a no-op |
| t4 | `-3\n8` | `8\n-3\n` | negatives |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
