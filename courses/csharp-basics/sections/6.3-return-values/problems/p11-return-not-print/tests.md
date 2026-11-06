# Hidden tests, p11-return-not-print

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4` | `Enter a number:\n12\n24\n` | 12 then 24 |
| t2 | `0` | `Enter a number:\n0\n0\n` | 0 then 0 |
| t3 | `-2` | `Enter a number:\n-6\n-12\n` | -6 then -12 |
| t4 | `5` | `Enter a number:\n15\n30\n` | 15 then 30 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
