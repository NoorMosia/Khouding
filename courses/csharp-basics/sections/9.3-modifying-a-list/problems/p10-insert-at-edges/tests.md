# Hidden tests, p10-insert-at-edges

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30\n5\n99` | `5\n10\n20\n30\n99\n` | 5 10 20 30 99 |
| t2 | `0\n1\n2` | `1\n2\n` | empty list: 1 2 |
| t3 | `2\n7\n8\n0\n9` | `0\n7\n8\n9\n` | 0 7 8 9 |
| t4 | `1\n5\n-1\n-2` | `-1\n5\n-2\n` | -1 5 -2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
