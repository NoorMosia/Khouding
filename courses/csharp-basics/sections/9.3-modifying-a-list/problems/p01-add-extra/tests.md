# Hidden tests, p01-add-extra

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30\n99` | `4\n` | 4 |
| t2 | `0\n5` | `1\n` | edge - was empty: 1 |
| t3 | `1\n7\n8` | `2\n` | 2 |
| t4 | `4\n1\n2\n3\n4\n42` | `5\n` | 5 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
