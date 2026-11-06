# Hidden tests, p02-both-positive

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n4` | `Enter two numbers:\nTrue\n` | both positive -> True |
| t2 | `3\n-4` | `Enter two numbers:\nFalse\n` | second not positive -> False |
| t3 | `-3\n4` | `Enter two numbers:\nFalse\n` | first not positive -> False |
| t4 | `-3\n-4` | `Enter two numbers:\nFalse\n` | both not positive -> False |
| t5 | `0\n5` | `Enter two numbers:\nFalse\n` | edge: zero is not positive -> False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
