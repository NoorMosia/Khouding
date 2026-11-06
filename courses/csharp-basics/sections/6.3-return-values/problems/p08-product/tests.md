# Hidden tests, p08-product

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n4` | `Enter two numbers:\n12\n` | 12 |
| t2 | `0\n9` | `Enter two numbers:\n0\n` | 0 |
| t3 | `-2\n5` | `Enter two numbers:\n-10\n` | -10 |
| t4 | `7\n7` | `Enter two numbers:\n49\n` | 49 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
