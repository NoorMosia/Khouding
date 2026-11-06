# Hidden tests, p08-three-params

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `sum\n4\n6` | `Enter label and two numbers:\nsum: 4 + 6 = 10\n` | sum: 4 + 6 = 10 |
| t2 | `total\n0\n0` | `Enter label and two numbers:\ntotal: 0 + 0 = 0\n` | total: 0 + 0 = 0 |
| t3 | `r\n-2\n5` | `Enter label and two numbers:\nr: -2 + 5 = 3\n` | r: -2 + 5 = 3 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
