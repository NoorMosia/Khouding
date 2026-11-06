# Hidden tests, p19-fix-forgot-double

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7\n2` | `Enter a:\nEnter b:\n3.5\n` | want 3.5, buggy 3 |
| t2 | `9\n4` | `Enter a:\nEnter b:\n2.25\n` | want 2.25, buggy 2 |
| t3 | `1\n4` | `Enter a:\nEnter b:\n0.25\n` | want 0.25, buggy 0 |
| t4 | `10\n8` | `Enter a:\nEnter b:\n1.25\n` | want 1.25, buggy 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
