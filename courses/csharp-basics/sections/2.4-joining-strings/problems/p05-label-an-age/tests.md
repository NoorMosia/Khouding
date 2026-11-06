# Hidden tests, p05-label-an-age

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `36` | `Enter your age:\nAge: 36\n` | typical |
| t2 | `0` | `Enter your age:\nAge: 0\n` | zero |
| t3 | `7` | `Enter your age:\nAge: 7\n` | small |
| t4 | `100` | `Enter your age:\nAge: 100\n` | large |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
