# Hidden tests, p16-count-above

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n3\n8\n1\n10\n5` | `2\n` | 2 |
| t2 | `3\n1\n2\n3\n10` | `0\n` | 0 |
| t3 | `3\n7\n8\n9\n0` | `3\n` | 3 |
| t4 | `0\n5` | `0\n` | 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
