# Hidden tests, p05-count-then-first

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30` | `3\n10\n` | 3 then 10 |
| t2 | `1\n99` | `1\n99\n` | 1 then 99 |
| t3 | `4\n-5\n0\n5\n10` | `4\n-5\n` | 4 then -5 |
| t4 | `2\n7\n8` | `2\n7\n` | 2 then 7 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
