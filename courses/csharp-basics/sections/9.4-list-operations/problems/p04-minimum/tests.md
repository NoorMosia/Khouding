# Hidden tests, p04-minimum

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n4\n9\n2\n7` | `2\n` | 2 |
| t2 | `3\n5\n8\n6` | `5\n` | all positive: 5 |
| t3 | `1\n42` | `42\n` | 1 |
| t4 | `4\n-1\n-9\n-3\n-2` | `-9\n` | all negative: -9 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
