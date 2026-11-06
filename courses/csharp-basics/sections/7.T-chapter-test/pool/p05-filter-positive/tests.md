# Hidden tests, p05-filter-positive

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n-3\n4\n0\n7` | `4\n7\n` | some pass: 4 7 |
| t2 | `3\n-1\n-2\n-3` | `` | none pass: nothing |
| t3 | `3\n1\n2\n3` | `1\n2\n3\n` | all pass |
| t4 | `0` | `` | edge - length 0: nothing |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
