# Hidden tests, p09-range

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n4\n9\n2\n7` | `7\n` | 7 |
| t2 | `3\n5\n5\n5` | `0\n` | all equal: 0 |
| t3 | `4\n-5\n-2\n-9\n-1` | `8\n` | negatives: 8 |
| t4 | `1\n7` | `0\n` | 1: 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
