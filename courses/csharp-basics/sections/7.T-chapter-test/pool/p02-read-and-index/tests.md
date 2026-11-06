# Hidden tests, p02-read-and-index

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n10\n20\n30\n40\n2` | `30\n` | index 2 -> 30 |
| t2 | `3\n7\n8\n9\n0` | `7\n` | first index -> 7 |
| t3 | `3\n7\n8\n9\n2` | `9\n` | last index -> 9 |
| t4 | `1\n42\n0` | `42\n` | edge - length 1 -> 42 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
