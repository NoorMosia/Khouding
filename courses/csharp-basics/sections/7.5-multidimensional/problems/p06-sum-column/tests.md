# Hidden tests, p06-sum-column

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n1\n2\n3\n4\n5\n6\n0` | `5\n` | col 0 of 2x3: 1+4 = 5 |
| t2 | `2\n3\n1\n2\n3\n4\n5\n6\n2` | `9\n` | col 2 of 2x3: 3+6 = 9 |
| t3 | `3\n2\n1\n1\n2\n2\n3\n3\n1` | `6\n` | col 1 of 3x2: 1+2+3 = 6 |
| t4 | `3\n1\n5\n6\n7\n0` | `18\n` | 3x1 single column: 18 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
