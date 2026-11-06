# Hidden tests, p11-fix-arg-order

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n3` | `Enter two numbers:\n7\n` | 10 - 3 = 7 (buggy prints -7) |
| t2 | `3\n10` | `Enter two numbers:\n-7\n` | 3 - 10 = -7 (buggy prints 7) |
| t3 | `5\n5` | `Enter two numbers:\n0\n` | 0 (same either way) |
| t4 | `0\n4` | `Enter two numbers:\n-4\n` | 0 - 4 = -4 (buggy prints 4) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
