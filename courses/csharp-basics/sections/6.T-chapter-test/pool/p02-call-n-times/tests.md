# Hidden tests, p02-call-n-times

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3` | `Enter a count:\n*\n*\n*\n` | 3 lines |
| t2 | `1` | `Enter a count:\n*\n` | 1 line |
| t3 | `0` | `Enter a count:\n` | zero calls: only the prompt |
| t4 | `5` | `Enter a count:\n*\n*\n*\n*\n*\n` | 5 lines |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
