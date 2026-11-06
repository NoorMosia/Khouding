# Hidden tests, p06-both-ways

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7\n2` | `Enter a:\nEnter b:\n3\n3.5\n` | 3 then 3.5 |
| t2 | `9\n4` | `Enter a:\nEnter b:\n2\n2.25\n` | 2 then 2.25 |
| t3 | `10\n8` | `Enter a:\nEnter b:\n1\n1.25\n` | 1 then 1.25 |
| t4 | `8\n2` | `Enter a:\nEnter b:\n4\n4\n` | 4 then 4 (exact, both the same) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
