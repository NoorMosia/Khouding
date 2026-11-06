# Hidden tests, p05-range-band

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a number:\nbelow\n` | below |
| t2 | `10` | `Enter a number:\nwithin\n` | within (low edge) |
| t3 | `20` | `Enter a number:\nwithin\n` | within (high edge) |
| t4 | `25` | `Enter a number:\nabove\n` | above |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
