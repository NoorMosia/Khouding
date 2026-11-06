# Hidden tests, p01-build-and-count

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30` | `3\n` | 3 |
| t2 | `0` | `0\n` | 0 |
| t3 | `1\n7` | `1\n` | 1 |
| t4 | `5\n1\n2\n3\n4\n5` | `5\n` | 5 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
