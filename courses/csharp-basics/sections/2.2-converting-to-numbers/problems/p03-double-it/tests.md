# Hidden tests, p03-double-it

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a whole number:\n10\n` | small |
| t2 | `0` | `Enter a whole number:\n0\n` | zero doubles to zero |
| t3 | `-3` | `Enter a whole number:\n-6\n` | negative |
| t4 | `250` | `Enter a whole number:\n500\n` | large |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
