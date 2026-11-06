# Hidden tests, p01-over-threshold

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `250` | `Enter a number:\nbig\n` | runs -> big |
| t2 | `7` | `Enter a number:\n` | skips -> nothing after prompt |
| t3 | `100` | `Enter a number:\n` | skips (100 is not > 100) |
| t4 | `101` | `Enter a number:\nbig\n` | runs (just over) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
