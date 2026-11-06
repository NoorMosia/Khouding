# Hidden tests, p10-count-matches

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n1\n2\n2\n3\n2\n2` | `3\n` | three matches |
| t2 | `3\n1\n2\n3\n9` | `0\n` | zero matches |
| t3 | `4\n5\n5\n5\n5\n5` | `4\n` | all match |
| t4 | `0\n7` | `0\n` | edge - length 0: count 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
