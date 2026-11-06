# Hidden tests, p04-assign-and-print-each

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n20\n30` | `10\n20\n30\n` | normal |
| t2 | `0\n0\n0` | `0\n0\n0\n` | edge - zeros |
| t3 | `-5\n4\n-1` | `-5\n4\n-1\n` | edge - negatives |
| t4 | `7\n7\n7` | `7\n7\n7\n` | all equal |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
