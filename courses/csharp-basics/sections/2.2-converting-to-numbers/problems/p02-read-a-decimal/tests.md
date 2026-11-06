# Hidden tests, p02-read-a-decimal

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3.5` | `Enter a decimal number:\n3.5\n` | one decimal place |
| t2 | `0` | `Enter a decimal number:\n0\n` | zero |
| t3 | `-2.25` | `Enter a decimal number:\n-2.25\n` | negative decimal |
| t4 | `12.75` | `Enter a decimal number:\n12.75\n` | larger decimal |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
