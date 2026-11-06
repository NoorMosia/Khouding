# Hidden tests, p09-fix-no-overload

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n6` | `Enter two numbers:\n10\n` | 10 |
| t2 | `0\n0` | `Enter two numbers:\n0\n` | 0 |
| t3 | `-2\n5` | `Enter two numbers:\n3\n` | 3 |
| t4 | `7\n8` | `Enter two numbers:\n15\n` | 15 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
