# Hidden tests, p12-labelled-positives

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n-3\n4\n0\n7\n-1` | `1: 4\n2: 7\n` | some positive: labels 1,2 |
| t2 | `3\n-1\n-2\n-3` | `` | none positive: prints nothing |
| t3 | `3\n5\n6\n7` | `1: 5\n2: 6\n3: 7\n` | all positive: labels 1,2,3 |
| t4 | `0` | `` | edge - length 0: prints nothing |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
