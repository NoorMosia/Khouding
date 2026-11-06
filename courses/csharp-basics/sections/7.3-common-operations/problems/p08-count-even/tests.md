# Hidden tests, p08-count-even

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n1\n2\n3\n4\n6` | `3\n` | three evens |
| t2 | `3\n1\n3\n5` | `0\n` | none even |
| t3 | `4\n0\n-2\n-4\n7` | `3\n` | zero and negatives even: three |
| t4 | `0` | `0\n` | edge - length 0: count 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
