# Hidden tests, p07-multiplication-grid

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n3` | `1 2 3\n2 4 6\n3 6 9\n` | 3x3 multiplication table |
| t2 | `2\n4` | `1 2 3 4\n2 4 6 8\n` | 2x4 |
| t3 | `1\n5` | `1 2 3 4 5\n` | 1x5 (single row) |
| t4 | `4\n1` | `1\n2\n3\n4\n` | 4x1 (single column) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
