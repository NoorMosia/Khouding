# Hidden tests, p05-resolve-from-input

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n4\n5\n6` | `Enter mode and three numbers:\n9\n` | mode 2 -> Add(4,5) = 9 |
| t2 | `3\n4\n5\n6` | `Enter mode and three numbers:\n15\n` | mode 3 -> Add(4,5,6) = 15 |
| t3 | `2\n0\n0\n9` | `Enter mode and three numbers:\n0\n` | mode 2 -> 0 |
| t4 | `3\n1\n2\n3` | `Enter mode and three numbers:\n6\n` | mode 3 -> 6 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
