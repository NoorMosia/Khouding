# Hidden tests, p08-max

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n3\n9\n2\n7` | `Enter a count:\n9\n` | 9 |
| t2 | `1\n5` | `Enter a count:\n5\n` | 5 |
| t3 | `3\n-4\n-1\n-9` | `Enter a count:\n-1\n` | all negative -> -1 |
| t4 | `3\n6\n6\n2` | `Enter a count:\n6\n` | duplicate max -> 6 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
