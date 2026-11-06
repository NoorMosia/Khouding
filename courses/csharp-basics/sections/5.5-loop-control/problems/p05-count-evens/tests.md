# Hidden tests, p05-count-evens

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n2\n3\n4\n7\n6` | `Enter a count:\n3\n` | evens 2,4,6 -> 3 |
| t2 | `3\n2\n4\n6` | `Enter a count:\n3\n` | all even -> 3 |
| t3 | `3\n1\n3\n5` | `Enter a count:\n0\n` | all odd -> 0 |
| t4 | `4\n0\n1\n2\n3` | `Enter a count:\n2\n` | 0 is even -> evens 0,2 -> 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
