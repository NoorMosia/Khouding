# Hidden tests, p09-every-other

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n10\n20\n30\n40\n50` | `10\n30\n50\n` | indexes 0,2,4: 10 30 50 |
| t2 | `4\n1\n2\n3\n4` | `1\n3\n` | indexes 0,2: 1 3 |
| t3 | `0` | `` | edge - nothing |
| t4 | `1\n9` | `9\n` | edge - just index 0: 9 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
