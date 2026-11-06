# Hidden tests, p10-running-total

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n5\n2\n4` | `Enter a count:\n5\n7\n11\n` | running: 5, 7, 11 |
| t2 | `1\n9` | `Enter a count:\n9\n` | single: 9 |
| t3 | `0` | `Enter a count:\n` | zero iterations: no total lines |
| t4 | `4\n2\n-3\n1\n5` | `Enter a count:\n2\n-1\n0\n5\n` | running: 2, -1, 0, 5 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
