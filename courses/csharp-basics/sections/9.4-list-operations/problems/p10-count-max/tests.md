# Hidden tests, p10-count-max

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n4\n9\n2\n7` | `1\n` | unique: 1 |
| t2 | `5\n3\n9\n9\n1\n9` | `3\n` | three 9s |
| t3 | `3\n5\n5\n5` | `3\n` | all equal: 3 |
| t4 | `1\n7` | `1\n` | 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
