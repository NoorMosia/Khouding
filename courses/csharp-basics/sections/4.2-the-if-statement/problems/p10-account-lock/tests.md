# Hidden tests, p10-account-lock

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n3` | `Enter the attempts:\nEnter the limit:\nAttempts recorded\naccount locked\n` | recorded + locked (over) |
| t2 | `3\n3` | `Enter the attempts:\nEnter the limit:\nAttempts recorded\n` | recorded only (equal is not over) |
| t3 | `1\n3` | `Enter the attempts:\nEnter the limit:\nAttempts recorded\n` | recorded only (under) |
| t4 | `10\n3` | `Enter the attempts:\nEnter the limit:\nAttempts recorded\naccount locked\n` | recorded + locked |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
