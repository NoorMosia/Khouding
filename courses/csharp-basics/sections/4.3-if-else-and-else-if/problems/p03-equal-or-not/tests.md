# Hidden tests, p03-equal-or-not

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n4` | `Enter a:\nEnter b:\nequal\n` | equal |
| t2 | `4\n5` | `Enter a:\nEnter b:\ndifferent\n` | different |
| t3 | `5\n4` | `Enter a:\nEnter b:\ndifferent\n` | different |
| t4 | `0\n0` | `Enter a:\nEnter b:\nequal\n` | equal |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
