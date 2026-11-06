# Hidden tests, p04-read-decimal-quotient

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7\n2` | `Enter a:\nEnter b:\n3.5\n` | 3.5 |
| t2 | `9\n4` | `Enter a:\nEnter b:\n2.25\n` | 2.25 |
| t3 | `1\n4` | `Enter a:\nEnter b:\n0.25\n` | 0.25 |
| t4 | `10\n8` | `Enter a:\nEnter b:\n1.25\n` | 1.25 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
