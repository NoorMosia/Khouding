# Hidden tests, p13-shipping-cost

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n1` | `Enter weight and zone:\n5\n` | light, zone 1 -> 5 |
| t2 | `3\n2` | `Enter weight and zone:\n8\n` | light, far zone -> 5 + 3 = 8 |
| t3 | `10\n1` | `Enter weight and zone:\n10\n` | heavy, zone 1 -> 10 |
| t4 | `10\n2` | `Enter weight and zone:\n13\n` | heavy, far zone -> 10 + 3 = 13 |
| t5 | `5\n2` | `Enter weight and zone:\n8\n` | weight edge: 5 is light, far -> 8 |
| t6 | `6\n1` | `Enter weight and zone:\n10\n` | just over edge: heavy, zone 1 -> 10 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
