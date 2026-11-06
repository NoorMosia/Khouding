# Hidden tests, p02-max-method

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n4\n9\n2\n7` | `9\n` | max 9 |
| t2 | `3\n-5\n-2\n-9` | `-2\n` | all negative: -2 |
| t3 | `1\n42` | `42\n` | edge - length 1: 42 |
| t4 | `5\n3\n3\n3\n3\n3` | `3\n` | all equal: 3 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
