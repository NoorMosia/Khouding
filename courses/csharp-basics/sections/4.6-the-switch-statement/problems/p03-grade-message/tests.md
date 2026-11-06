# Hidden tests, p03-grade-message

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `A` | `Enter a grade (A, B, C, F):\nexcellent\n` | excellent |
| t2 | `B` | `Enter a grade (A, B, C, F):\ngood\n` | good |
| t3 | `C` | `Enter a grade (A, B, C, F):\npass\n` | pass |
| t4 | `F` | `Enter a grade (A, B, C, F):\nfail\n` | fail |
| t5 | `Z` | `Enter a grade (A, B, C, F):\ninvalid grade\n` | unmatched letter -> invalid grade (default) |
| t6 | `a` | `Enter a grade (A, B, C, F):\ninvalid grade\n` | lowercase, case-sensitive miss -> invalid grade (default) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
