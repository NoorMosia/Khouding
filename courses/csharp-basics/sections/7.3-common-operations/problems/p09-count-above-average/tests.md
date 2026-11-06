# Hidden tests, p09-count-above-average

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n1\n2\n3\n10` | `1\n` | average 4: one above (10) |
| t2 | `3\n5\n5\n5` | `0\n` | all equal average 5: none strictly above |
| t3 | `5\n1\n2\n3\n4\n5` | `2\n` | average 3: two above (4,5) |
| t4 | `1\n7` | `0\n` | edge - length 1: average 7, none above |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
