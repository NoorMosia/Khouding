# Hidden tests, p03-read-mixed

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n4` | `Enter a:\nEnter b:\n11\n` | 3 + 8 = 11 |
| t2 | `0\n5` | `Enter a:\nEnter b:\n10\n` | 0 + 10 = 10 |
| t3 | `10\n0` | `Enter a:\nEnter b:\n10\n` | b zero, 10 + 0 = 10 |
| t4 | `7\n6` | `Enter a:\nEnter b:\n19\n` | 7 + 12 = 19 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
