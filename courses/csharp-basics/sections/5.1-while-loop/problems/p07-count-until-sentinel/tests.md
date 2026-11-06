# Hidden tests, p07-count-until-sentinel

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n8\n2\n-1` | `Enter numbers, -1 to stop:\n3\n` | three values before -1 -> 3 |
| t2 | `-1` | `Enter numbers, -1 to stop:\n0\n` | sentinel first -> 0 |
| t3 | `0\n0\n-1` | `Enter numbers, -1 to stop:\n2\n` | zeros are valid data -> 2 |
| t4 | `9\n-1` | `Enter numbers, -1 to stop:\n1\n` | one value -> 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
