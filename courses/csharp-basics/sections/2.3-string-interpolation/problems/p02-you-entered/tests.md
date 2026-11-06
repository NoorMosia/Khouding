# Hidden tests, p02-you-entered

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `42` | `Enter a number:\nYou entered 42\n` | typical |
| t2 | `0` | `Enter a number:\nYou entered 0\n` | zero |
| t3 | `-7` | `Enter a number:\nYou entered -7\n` | negative |
| t4 | `1000` | `Enter a number:\nYou entered 1000\n` | large |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
