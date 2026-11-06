# Hidden tests, p06-index-of

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n10\n20\n30\n40\n30` | `2\n` | 2 |
| t2 | `3\n5\n6\n7\n9` | `-1\n` | absent: -1 |
| t3 | `4\n8\n8\n8\n8\n8` | `0\n` | first: 0 |
| t4 | `0\n5` | `-1\n` | empty list: -1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
