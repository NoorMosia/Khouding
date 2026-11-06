# Hidden tests, p09-three-comparisons

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n5` | `Enter a:\nEnter b:\nTrue\nFalse\nFalse\n` | True / False / False |
| t2 | `5\n3` | `Enter a:\nEnter b:\nFalse\nFalse\nTrue\n` | False / False / True |
| t3 | `4\n4` | `Enter a:\nEnter b:\nFalse\nTrue\nFalse\n` | False / True / False |
| t4 | `-2\n1` | `Enter a:\nEnter b:\nTrue\nFalse\nFalse\n` | True / False / False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
