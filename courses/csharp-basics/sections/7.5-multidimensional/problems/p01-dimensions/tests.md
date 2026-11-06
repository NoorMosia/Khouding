# Hidden tests, p01-dimensions

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3` | `2\n3\n` | 2 rows, 3 cols |
| t2 | `1\n5` | `1\n5\n` | 1 row (1xk) |
| t3 | `4\n1` | `4\n1\n` | 1 col (kx1) |
| t4 | `3\n3` | `3\n3\n` | square |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
