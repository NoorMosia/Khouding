# Hidden tests, p20-fix-max-seed

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n4\n9\n2\n7` | `9\n` | positive: 9 |
| t2 | `3\n-5\n-2\n-9` | `-2\n` | all negative: -2 |
| t3 | `1\n-7` | `-7\n` | edge - single negative: -7 |
| t4 | `4\n-1\n-1\n-1\n-1` | `-1\n` | all equal negative: -1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
