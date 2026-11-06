# Hidden tests, p04-add-amount

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n1\n2\n3\n10` | `11\n12\n13\n` | add 10 |
| t2 | `3\n5\n5\n5\n-5` | `0\n0\n0\n` | add -5: all zero |
| t3 | `0\n4` | `` | edge - length 0: prints nothing |
| t4 | `1\n7\n3` | `10\n` | edge - length 1: 10 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
