# Hidden tests, p08-sum-positives

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n-3\n4\n0\n7\n-1` | `11\n` | 11 |
| t2 | `3\n-1\n-2\n-3` | `0\n` | all negative: 0 |
| t3 | `3\n5\n6\n7` | `18\n` | 18 |
| t4 | `0` | `0\n` | edge - empty: 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
