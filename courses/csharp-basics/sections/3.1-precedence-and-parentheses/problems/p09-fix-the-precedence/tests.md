# Hidden tests, p09-fix-the-precedence

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n2\n4` | `Enter the base price:\nEnter the extra per person:\nEnter the number of people:\n48\n` | (12) * 4 = 48; buggy would be 10 + 8 = 18 |
| t2 | `5\n5\n2` | `Enter the base price:\nEnter the extra per person:\nEnter the number of people:\n20\n` | (10) * 2 = 20 |
| t3 | `0\n3\n5` | `Enter the base price:\nEnter the extra per person:\nEnter the number of people:\n15\n` | (3) * 5 = 15 |
| t4 | `20\n0\n3` | `Enter the base price:\nEnter the extra per person:\nEnter the number of people:\n60\n` | extra zero, (20) * 3 = 60 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
