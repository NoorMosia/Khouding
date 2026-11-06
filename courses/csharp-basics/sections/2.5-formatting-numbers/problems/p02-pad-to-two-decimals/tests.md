# Hidden tests, p02-pad-to-two-decimals

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7.5` | `Enter a value:\n7.50\n` | pads to 7.50 |
| t2 | `3` | `Enter a value:\n3.00\n` | pads to 3.00 |
| t3 | `0.5` | `Enter a value:\n0.50\n` | pads to 0.50 |
| t4 | `12` | `Enter a value:\n12.00\n` | pads to 12.00 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
