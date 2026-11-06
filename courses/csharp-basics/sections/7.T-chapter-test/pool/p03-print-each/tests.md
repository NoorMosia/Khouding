# Hidden tests, p03-print-each

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30` | `10\n20\n30\n` | three lines |
| t2 | `0` | `` | edge - length 0: nothing |
| t3 | `1\n7` | `7\n` | edge - length 1 |
| t4 | `4\n-1\n0\n5\n-9` | `-1\n0\n5\n-9\n` | negatives and zero |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
