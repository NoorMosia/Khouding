# Hidden tests, p11-wrap-into-range

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7\n3` | `Enter the value:\nEnter the size:\n1\n` | 1 |
| t2 | `3\n3` | `Enter the value:\nEnter the size:\n0\n` | 0 (lands on size) |
| t3 | `2\n5` | `Enter the value:\nEnter the size:\n2\n` | 2 (already in range) |
| t4 | `14\n12` | `Enter the value:\nEnter the size:\n2\n` | 2 (clock-style) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
