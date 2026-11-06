# Hidden tests, p06-double-each

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n1\n2\n3` | `2\n4\n6\n` | 2 4 6 |
| t2 | `3\n-1\n0\n5` | `-2\n0\n10\n` | negative and zero |
| t3 | `1\n7` | `14\n` | edge - length 1: 14 |
| t4 | `0` | `` | edge - length 0: nothing |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
