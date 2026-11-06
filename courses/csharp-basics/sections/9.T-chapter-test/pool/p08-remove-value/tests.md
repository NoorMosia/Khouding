# Hidden tests, p08-remove-value

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n10\n20\n30\n40\n20` | `3\n` | 3 |
| t2 | `3\n5\n5\n5\n5` | `2\n` | removes first 5: 2 |
| t3 | `1\n7\n7` | `0\n` | 0 |
| t4 | `3\n1\n2\n3\n3` | `2\n` | 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
