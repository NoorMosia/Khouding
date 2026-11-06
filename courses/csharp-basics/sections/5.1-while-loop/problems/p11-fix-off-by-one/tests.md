# Hidden tests, p11-fix-off-by-one

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a count:\n1\n2\n3\n4\n5\n` | 1 2 3 4 5 (buggy prints 1..4) |
| t2 | `1` | `Enter a count:\n1\n` | just 1 (buggy prints nothing) |
| t3 | `0` | `Enter a count:\n` | zero iterations: nothing |
| t4 | `3` | `Enter a count:\n1\n2\n3\n` | 1 2 3 (buggy prints 1 2) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
