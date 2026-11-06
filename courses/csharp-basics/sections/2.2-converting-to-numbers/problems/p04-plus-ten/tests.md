# Hidden tests, p04-plus-ten

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a whole number:\n15\n` | small |
| t2 | `0` | `Enter a whole number:\n10\n` | zero |
| t3 | `-10` | `Enter a whole number:\n0\n` | cancels to zero |
| t4 | `90` | `Enter a whole number:\n100\n` | large |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
