# Hidden tests, p10-equal-and-larger

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n4` | `Enter a:\nEnter b:\nTrue\nFalse\n` | True / False |
| t2 | `7\n3` | `Enter a:\nEnter b:\nFalse\nTrue\n` | False / True |
| t3 | `2\n9` | `Enter a:\nEnter b:\nFalse\nFalse\n` | False / False |
| t4 | `0\n0` | `Enter a:\nEnter b:\nTrue\nFalse\n` | True / False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
