# Hidden tests, p10-fix-off-by-one

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30` | `30\n` | last is 30 |
| t2 | `1\n7` | `7\n` | edge - one element: 7 |
| t3 | `4\n-1\n0\n5\n-9` | `-9\n` | last is -9 |
| t4 | `2\n7\n8` | `8\n` | last is 8 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
