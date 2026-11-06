# Hidden tests, p12-swap-two-values

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1\n2` | `2\n1\n` | normal |
| t2 | `5\n5` | `5\n5\n` | equal values |
| t3 | `-3\n8` | `8\n-3\n` | negatives |
| t4 | `0\n42` | `42\n0\n` | edge - zero |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
