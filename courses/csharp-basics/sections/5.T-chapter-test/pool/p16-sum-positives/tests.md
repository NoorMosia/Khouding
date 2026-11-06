# Hidden tests, p16-sum-positives

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n3\n-1\n5\n-2` | `Enter a count:\n8\n` | 3+5 = 8 |
| t2 | `3\n1\n2\n3` | `Enter a count:\n6\n` | none skipped -> 6 |
| t3 | `3\n-1\n-2\n-3` | `Enter a count:\n0\n` | all skipped -> 0 |
| t4 | `4\n0\n4\n0\n6` | `Enter a count:\n10\n` | zeros skipped -> 10 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
