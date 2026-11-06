# Hidden tests, p04-not-equal

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n5` | `Enter a:\nEnter b:\nTrue\n` | True (not equal) |
| t2 | `4\n4` | `Enter a:\nEnter b:\nFalse\n` | False (equal) |
| t3 | `0\n1` | `Enter a:\nEnter b:\nTrue\n` | True |
| t4 | `7\n7` | `Enter a:\nEnter b:\nFalse\n` | False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
