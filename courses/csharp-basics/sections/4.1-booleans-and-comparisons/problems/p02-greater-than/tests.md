# Hidden tests, p02-greater-than

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n3` | `Enter a:\nEnter b:\nTrue\n` | True (greater) |
| t2 | `3\n5` | `Enter a:\nEnter b:\nFalse\n` | False (less) |
| t3 | `4\n4` | `Enter a:\nEnter b:\nFalse\n` | False (equal, > is strict) |
| t4 | `-2\n-7` | `Enter a:\nEnter b:\nTrue\n` | True (less negative is greater) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
