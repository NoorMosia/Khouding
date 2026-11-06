# Hidden tests, p02-cube

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2` | `Enter a number:\n8\n` | 8 |
| t2 | `0` | `Enter a number:\n0\n` | 0 |
| t3 | `-3` | `Enter a number:\n-27\n` | -27 |
| t4 | `5` | `Enter a number:\n125\n` | 125 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
