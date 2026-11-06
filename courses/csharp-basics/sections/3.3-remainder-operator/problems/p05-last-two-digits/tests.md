# Hidden tests, p05-last-two-digits

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1234` | `Enter a number:\n34\n` | 34 |
| t2 | `5` | `Enter a number:\n5\n` | 5 (less than 100, whole number) |
| t3 | `900` | `Enter a number:\n0\n` | 0 (ends in 00) |
| t4 | `4087` | `Enter a number:\n87\n` | 87 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
