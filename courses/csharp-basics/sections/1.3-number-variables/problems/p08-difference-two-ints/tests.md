# Hidden tests, p08-difference-two-ints

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n4` | `6\n` | normal |
| t2 | `4\n10` | `-6\n` | result is negative (order matters) |
| t3 | `7\n7` | `0\n` | edge - zero result |
| t4 | `0\n5` | `-5\n` | edge - from zero |
| t5 | `250\n50` | `200\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
