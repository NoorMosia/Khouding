# Hidden tests, p01-sum-method

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n10\n20\n30\n40` | `100\n` | normal: 100 |
| t2 | `0` | `0\n` | edge - length 0: 0 |
| t3 | `3\n-5\n2\n-1` | `-4\n` | negatives: -4 |
| t4 | `1\n7` | `7\n` | edge - length 1: 7 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
