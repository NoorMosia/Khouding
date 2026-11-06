# Hidden tests, p02-one-cell

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n1\n2\n9` | `9\n` | last cell |
| t2 | `2\n3\n0\n0\n5` | `5\n` | first cell |
| t3 | `3\n1\n2\n0\n7` | `7\n` | kx1 grid, last row |
| t4 | `1\n4\n0\n3\n-2` | `-2\n` | 1xk grid, last col, negative |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
