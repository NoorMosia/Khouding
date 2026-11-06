# Hidden tests, p04-absolute-value

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `-5` | `Enter a number:\n5\n` | 5 |
| t2 | `5` | `Enter a number:\n5\n` | 5 (already positive) |
| t3 | `0` | `Enter a number:\n0\n` | 0 |
| t4 | `-42` | `Enter a number:\n42\n` | 42 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
