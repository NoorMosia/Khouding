# Hidden tests, p05-name-is-age

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\n36` | `Enter your name:\nEnter your age:\nAda is 36\n` | typical |
| t2 | `Grace\n85` | `Enter your name:\nEnter your age:\nGrace is 85\n` | older |
| t3 | `Jun\n0` | `Enter your name:\nEnter your age:\nJun is 0\n` | age zero |
| t4 | `Al\n7` | `Enter your name:\nEnter your age:\nAl is 7\n` | short name |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
