# Hidden tests, p13-shipping-cost

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `500` | `Enter the weight in grams:\n3\n` | 3 (upper boundary of first band) |
| t2 | `2000` | `Enter the weight in grams:\n6\n` | 6 (boundary) |
| t3 | `5000` | `Enter the weight in grams:\n10\n` | 10 (boundary) |
| t4 | `5001` | `Enter the weight in grams:\ntoo heavy\n` | too heavy (final else) |
| t5 | `1200` | `Enter the weight in grams:\n6\n` | 6 (interior) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
