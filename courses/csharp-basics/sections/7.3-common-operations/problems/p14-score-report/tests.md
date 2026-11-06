# Hidden tests, p14-score-report

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n10\n20\n30\n40` | `Count: 4\nSum: 100\nAverage: 25\nHighest: 40\n` | average 25 (whole) |
| t2 | `3\n1\n2\n2` | `Count: 3\nSum: 5\nAverage: 1.6666666666666667\nHighest: 2\n` | fractional average 1.6666666666666667 |
| t3 | `1\n99` | `Count: 1\nSum: 99\nAverage: 99\nHighest: 99\n` | edge - length 1 |
| t4 | `5\n50\n50\n50\n50\n50` | `Count: 5\nSum: 250\nAverage: 50\nHighest: 50\n` | all equal: average 50 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
