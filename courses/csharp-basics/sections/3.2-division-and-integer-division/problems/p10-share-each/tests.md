# Hidden tests, p10-share-each

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n4` | `Enter the total:\nEnter the number of people:\n2.5\n` | 2.5 each |
| t2 | `9\n4` | `Enter the total:\nEnter the number of people:\n2.25\n` | 2.25 each |
| t3 | `12\n8` | `Enter the total:\nEnter the number of people:\n1.5\n` | 1.5 each |
| t4 | `20\n5` | `Enter the total:\nEnter the number of people:\n4\n` | 4 each (exact) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
