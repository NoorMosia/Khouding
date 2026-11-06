# Hidden tests, p19-fix-loop-bound

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30` | `10\n20\n30\n` | normal |
| t2 | `1\n42` | `42\n` | edge - length 1 |
| t3 | `4\n-1\n0\n5\n-9` | `-1\n0\n5\n-9\n` | negatives and zero |
| t4 | `2\n7\n8` | `7\n8\n` | two |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
