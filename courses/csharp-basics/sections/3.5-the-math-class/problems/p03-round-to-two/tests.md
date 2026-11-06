# Hidden tests, p03-round-to-two

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3.14159` | `Enter a value:\n3.14\n` | 3.14 |
| t2 | `2.718` | `Enter a value:\n2.72\n` | 2.72 |
| t3 | `9.871` | `Enter a value:\n9.87\n` | 9.87 |
| t4 | `1.004` | `Enter a value:\n1\n` | 1 (rounds to 1.00, prints 1) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
