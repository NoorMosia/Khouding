# Hidden tests, p10-fix-reassign

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n1\n2\n3` | `2\n4\n6\n` | 2 4 6 |
| t2 | `1\n5` | `10\n` | 10 |
| t3 | `0` | `` | nothing |
| t4 | `3\n-2\n0\n4` | `-4\n0\n8\n` | -4 0 8 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
