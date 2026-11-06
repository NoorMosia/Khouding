# Hidden tests, p05-value-vs-reference

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n5` | `5\n6\n` | n stays 5, array[0] becomes 6 |
| t2 | `0\n10` | `0\n11\n` | n stays 0, array[0] becomes 11 |
| t3 | `-3\n-1` | `-3\n0\n` | n stays -3, array[0] becomes 0 |
| t4 | `100\n7` | `100\n8\n` | n stays 100, array[0] becomes 8 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
