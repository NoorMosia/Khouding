# Hidden tests, p01-positive-small-or-large

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a number:\nsmall positive\n` | small positive leaf |
| t2 | `250` | `Enter a number:\nlarge positive\n` | large positive leaf |
| t3 | `100` | `Enter a number:\nsmall positive\n` | edge: 100 is not > 100 -> small positive |
| t4 | `-4` | `Enter a number:\nnot positive\n` | outer else, not positive (inner never reached) |
| t5 | `0` | `Enter a number:\nnot positive\n` | zero is not positive |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
