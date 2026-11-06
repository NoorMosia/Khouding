# Hidden tests, p07-value-with-unit

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter the distance:\nDistance: 5 km\n` | typical |
| t2 | `0` | `Enter the distance:\nDistance: 0 km\n` | zero |
| t3 | `42` | `Enter the distance:\nDistance: 42 km\n` | larger |
| t4 | `100` | `Enter the distance:\nDistance: 100 km\n` | large |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
