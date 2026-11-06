# Hidden tests, p02-pass-or-fail

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `72` | `Enter the score:\npass\n` | pass |
| t2 | `50` | `Enter the score:\npass\n` | pass (boundary) |
| t3 | `49` | `Enter the score:\nfail\n` | fail |
| t4 | `0` | `Enter the score:\nfail\n` | fail |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
