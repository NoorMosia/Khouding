# Hidden tests, p09-product-two-ints

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n4` | `12\n` | normal |
| t2 | `6\n0` | `0\n` | edge - times zero |
| t3 | `-4\n3` | `-12\n` | edge - negative (sign flip) |
| t4 | `1\n99` | `99\n` | times one |
| t5 | `12\n12` | `144\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
