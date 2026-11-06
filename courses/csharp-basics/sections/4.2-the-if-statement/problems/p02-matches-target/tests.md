# Hidden tests, p02-matches-target

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1234` | `Enter the code:\nmatch\n` | runs -> match |
| t2 | `1000` | `Enter the code:\n` | skips |
| t3 | `1235` | `Enter the code:\n` | skips (close but not equal) |
| t4 | `0` | `Enter the code:\n` | skips |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
