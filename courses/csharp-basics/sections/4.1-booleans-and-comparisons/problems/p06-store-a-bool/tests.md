# Hidden tests, p06-store-a-bool

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a number:\nTrue\n` | True |
| t2 | `-3` | `Enter a number:\nFalse\n` | False |
| t3 | `0` | `Enter a number:\nFalse\n` | False (zero is not positive) |
| t4 | `100` | `Enter a number:\nTrue\n` | True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
