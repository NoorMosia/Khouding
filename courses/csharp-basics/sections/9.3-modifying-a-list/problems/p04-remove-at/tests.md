# Hidden tests, p04-remove-at

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n10\n20\n30\n40\n1` | `10\n30\n40\n` | 10 30 40 |
| t2 | `4\n10\n20\n30\n40\n0` | `20\n30\n40\n` | removes first: 20 30 40 |
| t3 | `4\n10\n20\n30\n40\n3` | `10\n20\n30\n` | removes last: 10 20 30 |
| t4 | `2\n5\n6\n0` | `6\n` | 5 removed: 6 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
