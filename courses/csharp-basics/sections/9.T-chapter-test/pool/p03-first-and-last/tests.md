# Hidden tests, p03-first-and-last

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n10\n20\n30\n40` | `10\n40\n` | 10 then 40 |
| t2 | `1\n7` | `7\n7\n` | 7 then 7 |
| t3 | `3\n-5\n0\n5` | `-5\n5\n` | -5 then 5 |
| t4 | `2\n99\n1` | `99\n1\n` | 99 then 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
