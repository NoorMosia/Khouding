# Hidden tests, p01-length-and-last

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n10\n20\n30\n40` | `4\n40\n` | length 4, last 40 |
| t2 | `1\n7` | `1\n7\n` | edge - length 1, last 7 |
| t3 | `3\n-1\n-2\n-3` | `3\n-3\n` | negatives, last -3 |
| t4 | `5\n5\n4\n3\n2\n9` | `5\n9\n` | length 5, last 9 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
