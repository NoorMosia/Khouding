# Hidden tests, p05-count-positives

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n3\n-1\n5\n0` | `Enter a count:\n2\n` | positives among 3,-1,5,0 -> 2 |
| t2 | `3\n-2\n-5\n-1` | `Enter a count:\n0\n` | none positive -> 0 |
| t3 | `3\n1\n2\n3` | `Enter a count:\n3\n` | all positive -> 3 |
| t4 | `0` | `Enter a count:\n0\n` | zero iterations -> 0 |
| t5 | `1\n7` | `Enter a count:\n1\n` | one positive -> 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
