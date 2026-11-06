# Hidden tests, p12-steps-capstone

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `12000\n8000\n10000\n-1` | `Enter daily steps, -1 to stop:\n30000\n2\n` | total 30000; goal days: 12000 and 10000 -> 2 |
| t2 | `-1` | `Enter daily steps, -1 to stop:\n0\n0\n` | no days -> total 0, goal days 0 |
| t3 | `5000\n-1` | `Enter daily steps, -1 to stop:\n5000\n0\n` | one day under goal -> total 5000, goal days 0 |
| t4 | `10000\n10000\n-1` | `Enter daily steps, -1 to stop:\n20000\n2\n` | both exactly at goal -> total 20000, goal days 2 |
| t5 | `3000\n15000\n-1` | `Enter daily steps, -1 to stop:\n18000\n1\n` | total 18000; goal days 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
