# Hidden tests, p11-fix-dimensions

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n1\n2\n3\n4\n5\n6\n0` | `6\n` | non-square 2x3, row 0: 6 |
| t2 | `2\n3\n1\n2\n3\n4\n5\n6\n1` | `15\n` | row 1: 15 |
| t3 | `3\n2\n1\n1\n2\n2\n3\n3\n2` | `6\n` | non-square 3x2, row 2: 6 |
| t4 | `2\n2\n1\n2\n3\n4\n1` | `7\n` | square 2x2, row 1: 7 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
