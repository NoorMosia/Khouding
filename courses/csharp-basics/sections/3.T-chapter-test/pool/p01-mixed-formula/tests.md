# Hidden tests, p01-mixed-formula

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n4` | `Enter a:\nEnter b:\nEnter c:\n14\n` | 2 + 12 = 14 |
| t2 | `0\n5\n6` | `Enter a:\nEnter b:\nEnter c:\n30\n` | 0 + 30 = 30 |
| t3 | `9\n2\n0` | `Enter a:\nEnter b:\nEnter c:\n9\n` | c zero, 9 |
| t4 | `5\n5\n5` | `Enter a:\nEnter b:\nEnter c:\n30\n` | 5 + 25 = 30 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
