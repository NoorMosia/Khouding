# Hidden tests, p04-reverse-order

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30` | `30\n20\n10\n` | 30 20 10 |
| t2 | `0` | `` | edge - nothing |
| t3 | `1\n5` | `5\n` | 5 |
| t4 | `4\n1\n2\n3\n4` | `4\n3\n2\n1\n` | 4 3 2 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
