# Hidden tests, p09-fix-stray-semicolon

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `250` | `Enter a number:\nbig\n` | runs -> big |
| t2 | `7` | `Enter a number:\n` | skips (buggy starter would still print big) |
| t3 | `100` | `Enter a number:\n` | skips (100 not > 100) |
| t4 | `101` | `Enter a number:\nbig\n` | runs |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
