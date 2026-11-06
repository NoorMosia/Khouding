# Hidden tests, p05-greater-or-equal

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n3` | `Enter a:\nEnter b:\nTrue\n` | True (greater) |
| t2 | `4\n4` | `Enter a:\nEnter b:\nTrue\n` | True (equal, >= includes it) |
| t3 | `3\n5` | `Enter a:\nEnter b:\nFalse\n` | False (less) |
| t4 | `0\n0` | `Enter a:\nEnter b:\nTrue\n` | True (equal at zero) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
