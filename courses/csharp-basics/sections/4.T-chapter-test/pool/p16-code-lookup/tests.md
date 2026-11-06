# Hidden tests, p16-code-lookup

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `GBP` | `Enter a currency code:\nBritish Pound\n` | British Pound |
| t2 | `USD` | `Enter a currency code:\nUS Dollar\n` | US Dollar |
| t3 | `EUR` | `Enter a currency code:\nEuro\n` | Euro |
| t4 | `JPY` | `Enter a currency code:\nunknown\n` | unmatched code -> unknown (default) |
| t5 | `usd` | `Enter a currency code:\nunknown\n` | lowercase, case-sensitive miss -> unknown (default) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
