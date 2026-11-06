# Hidden tests, p07-remainder-equals

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `17\n5` | `Enter the value:\nEnter the divisor:\n2\n` | 2 |
| t2 | `20\n5` | `Enter the value:\nEnter the divisor:\n0\n` | 0 (exact) |
| t3 | `3\n5` | `Enter the value:\nEnter the divisor:\n3\n` | 3 (smaller than divisor) |
| t4 | `100\n7` | `Enter the value:\nEnter the divisor:\n2\n` | 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
