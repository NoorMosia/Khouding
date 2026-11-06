# Hidden tests, p15-model-the-scenario

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n2.5` | `7.5\n12.5\n` | normal; subtotal 7.5 |
| t2 | `1\n10` | `10\n15\n` | single item |
| t3 | `0\n9.99` | `0\n5\n` | edge - zero quantity; subtotal 0 |
| t4 | `4\n1.25` | `5\n10\n` | subtotal 5 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
