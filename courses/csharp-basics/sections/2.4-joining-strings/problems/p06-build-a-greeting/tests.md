# Hidden tests, p06-build-a-greeting

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada` | `Enter your name:\nHello, Ada!\n` | typical |
| t2 | `Grace` | `Enter your name:\nHello, Grace!\n` | different name |
| t3 | `Al` | `Enter your name:\nHello, Al!\n` | short name |
| t4 | `Jun-ho` | `Enter your name:\nHello, Jun-ho!\n` | name with a hyphen |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
