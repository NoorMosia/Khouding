# Hidden tests, p07-sum

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30` | `60\n` | 60 |
| t2 | `0` | `0\n` | edge - 0 |
| t3 | `4\n-1\n-2\n3\n5` | `5\n` | 5 |
| t4 | `1\n7` | `7\n` | 7 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
