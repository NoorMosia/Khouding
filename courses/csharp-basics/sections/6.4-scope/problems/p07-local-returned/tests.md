# Hidden tests, p07-local-returned

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3` | `Enter a number:\n6\n` | doubled 6 |
| t2 | `0` | `Enter a number:\n0\n` | 0 |
| t3 | `-5` | `Enter a number:\n-10\n` | -10 |
| t4 | `7` | `Enter a number:\n14\n` | 14 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
