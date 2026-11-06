# Hidden tests, p03-left-to-right

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n4\n3` | `Enter a:\nEnter b:\nEnter c:\n9\n` | (6) + 3 = 9 |
| t2 | `5\n5\n5` | `Enter a:\nEnter b:\nEnter c:\n5\n` | (0) + 5 = 5 |
| t3 | `2\n8\n1` | `Enter a:\nEnter b:\nEnter c:\n-5\n` | (-6) + 1 = -5 |
| t4 | `20\n7\n7` | `Enter a:\nEnter b:\nEnter c:\n20\n` | (13) + 7 = 20 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
