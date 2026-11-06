# Hidden tests, p09-two-removeat

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n10\n20\n30\n40` | `20\n30\n` | remove last(40) then first(10): 20 30 |
| t2 | `3\n5\n6\n7` | `6\n` | remove last(7) then first(5): 6 |
| t3 | `5\n1\n2\n3\n4\n5` | `2\n3\n4\n` | remove last(5) then first(1): 2 3 4 |
| t4 | `2\n9\n8` | `` | remove last(8) then first(9): nothing |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
