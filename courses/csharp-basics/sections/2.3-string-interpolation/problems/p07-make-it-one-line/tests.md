# Hidden tests, p07-make-it-one-line

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `21` | `Enter the temperature:\nTemperature: 21\n` | typical |
| t2 | `0` | `Enter the temperature:\nTemperature: 0\n` | zero |
| t3 | `-8` | `Enter the temperature:\nTemperature: -8\n` | negative |
| t4 | `100` | `Enter the temperature:\nTemperature: 100\n` | large |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
