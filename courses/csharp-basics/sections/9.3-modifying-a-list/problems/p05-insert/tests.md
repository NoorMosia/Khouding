# Hidden tests, p05-insert

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30\n1\n99` | `10\n99\n20\n30\n` | 10 99 20 30 |
| t2 | `3\n10\n20\n30\n0\n5` | `5\n10\n20\n30\n` | insert at front: 5 10 20 30 |
| t3 | `3\n10\n20\n30\n3\n5` | `10\n20\n30\n5\n` | insert at end: 10 20 30 5 |
| t4 | `2\n1\n2\n1\n9` | `1\n9\n2\n` | 1 9 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
