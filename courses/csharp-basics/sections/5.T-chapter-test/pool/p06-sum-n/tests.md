# Hidden tests, p06-sum-n

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n4\n4\n4` | `Enter a count:\n12\n` | 12 |
| t2 | `1\n100` | `Enter a count:\n100\n` | 100 |
| t3 | `0` | `Enter a count:\n0\n` | zero iterations -> 0 |
| t4 | `5\n1\n1\n1\n1\n1` | `Enter a count:\n5\n` | 5 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
