# Hidden tests, p07-reuse-varied-args

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n5\n9` | `Enter three numbers:\n4\n10\n18\n` | 4, 10, 18 |
| t2 | `0\n-3\n7` | `Enter three numbers:\n0\n-6\n14\n` | 0, -6, 14 |
| t3 | `1\n1\n1` | `Enter three numbers:\n2\n2\n2\n` | 2, 2, 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
