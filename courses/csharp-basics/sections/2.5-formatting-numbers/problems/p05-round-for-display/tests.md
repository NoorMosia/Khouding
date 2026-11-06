# Hidden tests, p05-round-for-display

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2.345` | `Enter a value:\n2.35\n` | rounds to 2.35 |
| t2 | `1.239` | `Enter a value:\n1.24\n` | rounds to 1.24 |
| t3 | `9.871` | `Enter a value:\n9.87\n` | rounds down to 9.87 |
| t4 | `0.004` | `Enter a value:\n0.00\n` | rounds to 0.00 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
