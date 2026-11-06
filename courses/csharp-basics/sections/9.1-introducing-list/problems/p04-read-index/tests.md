# Hidden tests, p04-read-index

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n10\n20\n30\n40\n1` | `20\n` | 20 |
| t2 | `4\n10\n20\n30\n40\n0` | `10\n` | first: 10 |
| t3 | `4\n10\n20\n30\n40\n3` | `40\n` | last: 40 |
| t4 | `3\n7\n8\n9\n2` | `9\n` | 9 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
