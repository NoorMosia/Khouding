# Hidden tests, p10-fix-off-by-one

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n20\n30` | `30\n` | last is 30 |
| t2 | `1\n2\n3` | `3\n` | last is 3 |
| t3 | `-4\n0\n-9` | `-9\n` | last negative |
| t4 | `7\n7\n7` | `7\n` | all equal |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
