# Hidden tests, p02-read-remainder

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7\n3` | `Enter a:\nEnter b:\n1\n` | 1 |
| t2 | `10\n2` | `Enter a:\nEnter b:\n0\n` | 0 (even, exact) |
| t3 | `4\n9` | `Enter a:\nEnter b:\n4\n` | 4 (a < b, remainder is a) |
| t4 | `100\n7` | `Enter a:\nEnter b:\n2\n` | 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
