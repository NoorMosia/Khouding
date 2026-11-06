# Hidden tests, p12-fix-stale-index

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n-1\n-2\n3\n4\n5` | `3\n4\n5\n` | 3 4 5 (starter misses -2) |
| t2 | `4\n1\n-1\n-2\n4` | `1\n4\n` | 1 4 (starter misses -2) |
| t3 | `3\n1\n2\n3` | `1\n2\n3\n` | no negatives: 1 2 3 |
| t4 | `0` | `` | empty: nothing |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
