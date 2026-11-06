# Hidden tests, p13-triangle-report

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n4` | `Enter the first leg:\nEnter the second leg:\nHypotenuse: 5.00\nArea: 6.00\n` | Hypotenuse 5.00, Area 6.00 |
| t2 | `6\n8` | `Enter the first leg:\nEnter the second leg:\nHypotenuse: 10.00\nArea: 24.00\n` | Hypotenuse 10.00, Area 24.00 |
| t3 | `5\n12` | `Enter the first leg:\nEnter the second leg:\nHypotenuse: 13.00\nArea: 30.00\n` | Hypotenuse 13.00, Area 30.00 |
| t4 | `8\n15` | `Enter the first leg:\nEnter the second leg:\nHypotenuse: 17.00\nArea: 60.00\n` | Hypotenuse 17.00, Area 60.00 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
