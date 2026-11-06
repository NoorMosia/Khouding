# Hidden tests, p01-print-argument

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a number:\n5\n` | prints 5 |
| t2 | `0` | `Enter a number:\n0\n` | prints 0 |
| t3 | `-3` | `Enter a number:\n-3\n` | prints -3 |
| t4 | `42` | `Enter a number:\n42\n` | prints 42 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
