# Hidden tests, p08-pass-mark

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `72` | `Enter the score:\nTrue\n` | True |
| t2 | `50` | `Enter the score:\nTrue\n` | True (exactly the pass mark) |
| t3 | `49` | `Enter the score:\nFalse\n` | False (just under) |
| t4 | `0` | `Enter the score:\nFalse\n` | False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
