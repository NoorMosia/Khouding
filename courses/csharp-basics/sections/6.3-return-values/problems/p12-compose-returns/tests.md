# Hidden tests, p12-compose-returns

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n4` | `Enter two numbers:\n16\n` | Square 9,16 -> larger 16 |
| t2 | `-5\n2` | `Enter two numbers:\n25\n` | Square 25,4 -> larger 25 |
| t3 | `2\n2` | `Enter two numbers:\n4\n` | Square 4,4 -> larger 4 |
| t4 | `0\n-1` | `Enter two numbers:\n1\n` | Square 0,1 -> larger 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
