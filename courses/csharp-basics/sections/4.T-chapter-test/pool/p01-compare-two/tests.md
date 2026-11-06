# Hidden tests, p01-compare-two

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7\n3` | `Enter two numbers:\nTrue\n` | greater -> True |
| t2 | `3\n7` | `Enter two numbers:\nFalse\n` | smaller -> False |
| t3 | `5\n5` | `Enter two numbers:\nFalse\n` | equal -> False (not strictly greater) |
| t4 | `-2\n-9` | `Enter two numbers:\nTrue\n` | negatives, greater -> True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
