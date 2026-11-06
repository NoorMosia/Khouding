# Hidden tests, p04-sum-until-quit

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n3\n2\n-1` | `Enter numbers, -1 to stop:\n10\n` | 5+3+2 = 10 |
| t2 | `-1` | `Enter numbers, -1 to stop:\n0\n` | quit first: read once, sum 0 |
| t3 | `0\n0\n-1` | `Enter numbers, -1 to stop:\n0\n` | zeros are valid data, sum 0 |
| t4 | `9\n-1` | `Enter numbers, -1 to stop:\n9\n` | one value: 9 |
| t5 | `4\n-6\n-1` | `Enter numbers, -1 to stop:\n-2\n` | 4 + (-6) = -2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
