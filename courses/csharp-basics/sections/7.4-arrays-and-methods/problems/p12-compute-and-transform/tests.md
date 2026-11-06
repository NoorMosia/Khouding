# Hidden tests, p12-compute-and-transform

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n1\n2\n3` | `Sum: 6\nDoubled:\n2\n4\n6\n` | sum 6, doubled 2 4 6 |
| t2 | `0` | `Sum: 0\nDoubled:\n` | edge - length 0: sum 0, no doubled lines |
| t3 | `1\n5` | `Sum: 5\nDoubled:\n10\n` | edge - length 1: sum 5, doubled 10 |
| t4 | `4\n-1\n2\n-3\n4` | `Sum: 2\nDoubled:\n-2\n4\n-6\n8\n` | negatives: sum 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
