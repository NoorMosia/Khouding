# Hidden tests, p10-fix-break-vs-continue

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n3\n-1\n5\n-2\n4` | `Enter a count:\n12\n` | skip -1,-2: 3+5+4 = 12 (buggy break stops after 3 -> 3) |
| t2 | `3\n1\n2\n3` | `Enter a count:\n6\n` | no skips -> 6 (same either way) |
| t3 | `4\n-1\n2\n3\n4` | `Enter a count:\n9\n` | first is non-positive: skip it -> 9 (buggy -> 0) |
| t4 | `3\n-1\n-2\n-3` | `Enter a count:\n0\n` | all skipped -> 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
