# Hidden tests, p01-read-a-whole-number

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7` | `Enter a whole number:\n7\n` | small |
| t2 | `0` | `Enter a whole number:\n0\n` | zero |
| t3 | `-4` | `Enter a whole number:\n-4\n` | negative |
| t4 | `1000` | `Enter a whole number:\n1000\n` | large |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
