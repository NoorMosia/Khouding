# Hidden tests, p04-doubled-is

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a number:\n5 doubled is 10\n` | typical |
| t2 | `0` | `Enter a number:\n0 doubled is 0\n` | zero doubles to zero |
| t3 | `-3` | `Enter a number:\n-3 doubled is -6\n` | negative |
| t4 | `250` | `Enter a number:\n250 doubled is 500\n` | large |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
