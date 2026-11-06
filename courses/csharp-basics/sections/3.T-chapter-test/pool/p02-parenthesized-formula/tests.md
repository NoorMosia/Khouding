# Hidden tests, p02-parenthesized-formula

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n4` | `Enter a:\nEnter b:\nEnter c:\n20\n` | (5) * 4 = 20 |
| t2 | `0\n5\n6` | `Enter a:\nEnter b:\nEnter c:\n30\n` | (5) * 6 = 30 |
| t3 | `9\n2\n0` | `Enter a:\nEnter b:\nEnter c:\n0\n` | c zero, 0 |
| t4 | `5\n5\n5` | `Enter a:\nEnter b:\nEnter c:\n50\n` | (10) * 5 = 50 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
