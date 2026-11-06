# Hidden tests, p04-remove-negatives

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n-3\n4\n0\n-1\n7` | `4\n0\n7\n` | 4 0 7 |
| t2 | `3\n-1\n-2\n-3` | `` | all removed: nothing |
| t3 | `3\n1\n2\n3` | `1\n2\n3\n` | none removed: 1 2 3 |
| t4 | `0` | `` | edge - nothing |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
