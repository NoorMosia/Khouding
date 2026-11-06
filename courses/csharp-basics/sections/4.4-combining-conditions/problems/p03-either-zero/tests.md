# Hidden tests, p03-either-zero

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `0\n5` | `Enter two numbers:\nTrue\n` | first is zero -> True |
| t2 | `5\n0` | `Enter two numbers:\nTrue\n` | second is zero -> True |
| t3 | `0\n0` | `Enter two numbers:\nTrue\n` | both zero -> True |
| t4 | `5\n7` | `Enter two numbers:\nFalse\n` | neither zero -> False |
| t5 | `-2\n3` | `Enter two numbers:\nFalse\n` | neither zero (negatives count) -> False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
