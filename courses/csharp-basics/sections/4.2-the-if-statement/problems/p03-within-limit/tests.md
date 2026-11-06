# Hidden tests, p03-within-limit

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `-5` | `Enter the temperature:\nfreezing\n` | runs (below zero) |
| t2 | `0` | `Enter the temperature:\nfreezing\n` | runs (0 counts, <= includes it) |
| t3 | `1` | `Enter the temperature:\n` | skips (just above) |
| t4 | `20` | `Enter the temperature:\n` | skips |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
