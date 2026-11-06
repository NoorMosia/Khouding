# Hidden tests, p07-average

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n2\n4\n6\n8` | `Enter a count:\n5\n` | 20/4 = 5 |
| t2 | `3\n1\n2\n2` | `Enter a count:\n1\n` | 5/3 = 1 (truncates) |
| t3 | `1\n9` | `Enter a count:\n9\n` | 9 |
| t4 | `2\n10\n5` | `Enter a count:\n7\n` | 15/2 = 7 (truncates) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
