# Hidden tests, p16-hypotenuse

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n4` | `Enter the first leg:\nEnter the second leg:\n5\n` | 5 |
| t2 | `6\n8` | `Enter the first leg:\nEnter the second leg:\n10\n` | 10 |
| t3 | `5\n12` | `Enter the first leg:\nEnter the second leg:\n13\n` | 13 |
| t4 | `8\n15` | `Enter the first leg:\nEnter the second leg:\n17\n` | 17 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
