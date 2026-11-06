# Hidden tests, p06-average

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n2\n4\n6\n8` | `Enter a count:\n5\n` | sum 20 / 4 = 5 |
| t2 | `3\n1\n2\n2` | `Enter a count:\n1\n` | sum 5 / 3 = 1 (integer division truncates) |
| t3 | `1\n9` | `Enter a count:\n9\n` | single value -> 9 |
| t4 | `2\n10\n5` | `Enter a count:\n7\n` | 15 / 2 = 7 (truncates) |
| t5 | `3\n-3\n-3\n-3` | `Enter a count:\n-3\n` | negatives: -9 / 3 = -3 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
