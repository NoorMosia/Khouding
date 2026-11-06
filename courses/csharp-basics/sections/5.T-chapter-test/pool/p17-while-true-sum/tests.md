# Hidden tests, p17-while-true-sum

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n3\n2\n0` | `Enter numbers, 0 to stop:\n10\n` | 10 |
| t2 | `0` | `Enter numbers, 0 to stop:\n0\n` | quit immediately -> 0 |
| t3 | `7\n0` | `Enter numbers, 0 to stop:\n7\n` | one value -> 7 |
| t4 | `4\n-6\n0` | `Enter numbers, 0 to stop:\n-2\n` | -2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
