# Hidden tests, p05-first-and-last

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n20\n30\n40` | `10\n40\n` | normal |
| t2 | `5\n5\n5\n5` | `5\n5\n` | ends equal |
| t3 | `-1\n0\n9\n-8` | `-1\n-8\n` | negatives |
| t4 | `100\n1\n1\n2` | `100\n2\n` | big first |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
