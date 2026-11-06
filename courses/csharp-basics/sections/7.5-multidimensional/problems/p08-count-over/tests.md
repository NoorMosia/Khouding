# Hidden tests, p08-count-over

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n1\n8\n3\n10\n2\n9\n5` | `3\n` | three cells above 5 |
| t2 | `2\n2\n1\n2\n3\n4\n10` | `0\n` | none above 10 |
| t3 | `2\n2\n5\n6\n7\n8\n0` | `4\n` | all above 0 |
| t4 | `1\n4\n1\n2\n3\n4\n2` | `2\n` | 1x4: two above 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
