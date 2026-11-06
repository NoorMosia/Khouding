# Hidden tests, p09-shipping-tree

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n1` | `Enter weight and zone:\nlight local\n` | light, zone 1 -> light local |
| t2 | `3\n2` | `Enter weight and zone:\nlight far\n` | light, other zone -> light far |
| t3 | `10\n1` | `Enter weight and zone:\nheavy local\n` | heavy, zone 1 -> heavy local |
| t4 | `10\n2` | `Enter weight and zone:\nheavy far\n` | heavy, other zone -> heavy far |
| t5 | `5\n1` | `Enter weight and zone:\nlight local\n` | weight edge: 5 is light -> light local |
| t6 | `6\n2` | `Enter weight and zone:\nheavy far\n` | just over edge -> heavy far |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
