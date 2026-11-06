# Hidden tests, p02-read-integer-quotient

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7\n2` | `Enter a:\nEnter b:\n3\n` | 3 (truncated from 3.5) |
| t2 | `9\n3` | `Enter a:\nEnter b:\n3\n` | 3 exact |
| t3 | `10\n4` | `Enter a:\nEnter b:\n2\n` | 2 (truncated from 2.5) |
| t4 | `5\n8` | `Enter a:\nEnter b:\n0\n` | 0 (smaller over larger) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
