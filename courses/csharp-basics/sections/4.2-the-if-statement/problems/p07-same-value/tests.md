# Hidden tests, p07-same-value

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n4` | `Enter a:\nEnter b:\nsame\n` | runs -> same |
| t2 | `4\n5` | `Enter a:\nEnter b:\n` | skips |
| t3 | `5\n4` | `Enter a:\nEnter b:\n` | skips |
| t4 | `0\n0` | `Enter a:\nEnter b:\nsame\n` | runs |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
