# Hidden tests, p17-fix-forgot-to-parse

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a whole number:\n15\n` | normal |
| t2 | `0` | `Enter a whole number:\n0\n` | zero |
| t3 | `-3` | `Enter a whole number:\n-9\n` | negative |
| t4 | `40` | `Enter a whole number:\n120\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
