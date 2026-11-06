# Hidden tests, p05-sum-n-values

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n5\n7\n2` | `Enter a count:\n14\n` | 14 |
| t2 | `1\n9` | `Enter a count:\n9\n` | 9 |
| t3 | `0` | `Enter a count:\n0\n` | zero iterations -> 0 |
| t4 | `4\n1\n-2\n3\n-1` | `Enter a count:\n1\n` | 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
