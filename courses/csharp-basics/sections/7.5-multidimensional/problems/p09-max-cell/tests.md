# Hidden tests, p09-max-cell

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n1\n8\n3\n10\n2\n9` | `10\n` | max 10 |
| t2 | `2\n2\n-5\n-2\n-9\n-1` | `-1\n` | all negative: -1 (0 seed would fail) |
| t3 | `1\n1\n7` | `7\n` | edge - 1x1: 7 |
| t4 | `3\n1\n4\n4\n4` | `4\n` | 3x1 all equal: 4 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
