# Hidden tests, p06-divide-equals

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `17\n5` | `Enter the value:\nEnter the divisor:\n3\n` | 3 (truncated) |
| t2 | `20\n4` | `Enter the value:\nEnter the divisor:\n5\n` | 5 (exact) |
| t3 | `3\n5` | `Enter the value:\nEnter the divisor:\n0\n` | 0 (smaller over larger) |
| t4 | `100\n7` | `Enter the value:\nEnter the divisor:\n14\n` | 14 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
