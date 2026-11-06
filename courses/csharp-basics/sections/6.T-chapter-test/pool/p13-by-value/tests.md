# Hidden tests, p13-by-value

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a number:\n105\n5\n` | 105 then 5 |
| t2 | `0` | `Enter a number:\n100\n0\n` | 100 then 0 |
| t3 | `-7` | `Enter a number:\n93\n-7\n` | 93 then -7 |
| t4 | `40` | `Enter a number:\n140\n40\n` | 140 then 40 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
