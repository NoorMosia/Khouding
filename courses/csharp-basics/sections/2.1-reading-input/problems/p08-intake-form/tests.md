# Hidden tests, p08-intake-form

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\nResearch` | `Name:\nDepartment:\n--- Entry ---\nAda\nResearch\n` | normal |
| t2 | `Sam\nSupport` | `Name:\nDepartment:\n--- Entry ---\nSam\nSupport\n` | different |
| t3 | `Lee\nSales` | `Name:\nDepartment:\n--- Entry ---\nLee\nSales\n` | another |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
