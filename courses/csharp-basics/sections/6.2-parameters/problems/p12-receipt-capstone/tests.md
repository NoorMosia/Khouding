# Hidden tests, p12-receipt-capstone

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `apple\n3\n2` | `Enter item, quantity, price:\napple x3 = 6\n` | apple x3 = 6 |
| t2 | `pen\n1\n5` | `Enter item, quantity, price:\npen x1 = 5\n` | pen x1 = 5 |
| t3 | `box\n0\n9` | `Enter item, quantity, price:\nbox x0 = 0\n` | box x0 = 0 |
| t4 | `nail\n10\n1` | `Enter item, quantity, price:\nnail x10 = 10\n` | nail x10 = 10 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
