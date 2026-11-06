# Hidden tests, p09-plus-to-interpolation

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Lisbon` | `Enter the city:\nWelcome to Lisbon\n` | typical |
| t2 | `Nairobi` | `Enter the city:\nWelcome to Nairobi\n` | different city |
| t3 | `Lima` | `Enter the city:\nWelcome to Lima\n` | short name |
| t4 | `Viet Nam` | `Enter the city:\nWelcome to Viet Nam\n` | value with a space |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
