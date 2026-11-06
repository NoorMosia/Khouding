# Hidden tests, p06-label

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `75` | `Enter a score:\npass\n` | pass |
| t2 | `50` | `Enter a score:\npass\n` | pass (boundary inclusive) |
| t3 | `49` | `Enter a score:\nfail\n` | fail |
| t4 | `0` | `Enter a score:\nfail\n` | fail |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
