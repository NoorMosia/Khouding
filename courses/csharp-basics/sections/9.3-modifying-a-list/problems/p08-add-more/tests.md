# Hidden tests, p08-add-more

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30\n2\n40\n50` | `5\n` | 5 |
| t2 | `0\n3\n1\n2\n3` | `3\n` | started empty: 3 |
| t3 | `2\n5\n6\n0` | `2\n` | add 0: stays 2 |
| t4 | `1\n7\n4\n1\n2\n3\n4` | `5\n` | 5 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
