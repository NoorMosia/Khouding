# Hidden tests, p07-negative-division

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `-7\n2` | `Enter a:\nEnter b:\n-3\n` | -3 (toward zero, not -4) |
| t2 | `7\n-2` | `Enter a:\nEnter b:\n-3\n` | -3 |
| t3 | `-8\n2` | `Enter a:\nEnter b:\n-4\n` | -4 exact |
| t4 | `-5\n8` | `Enter a:\nEnter b:\n0\n` | 0 (toward zero) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
