# Hidden tests, p01-increment-decrement

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a number:\n6\n5\n` | 6 then 5 |
| t2 | `0` | `Enter a number:\n1\n0\n` | 1 then 0 |
| t3 | `-1` | `Enter a number:\n0\n-1\n` | 0 then -1 |
| t4 | `99` | `Enter a number:\n100\n99\n` | 100 then 99 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
