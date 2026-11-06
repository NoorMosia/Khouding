# Hidden tests, p04-sign

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7` | `Enter a number:\npositive\n` | positive |
| t2 | `-3` | `Enter a number:\nnegative\n` | negative |
| t3 | `0` | `Enter a number:\nzero\n` | zero (final else) |
| t4 | `100` | `Enter a number:\npositive\n` | positive |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
