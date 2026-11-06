# Hidden tests, p10-total-cost

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n1.25` | `5\n` | normal; 4 * 1.25 = 5 |
| t2 | `3\n2.5` | `7.5\n` | decimal result; 3 * 2.5 = 7.5 |
| t3 | `0\n9.99` | `0\n` | edge - zero count |
| t4 | `10\n2` | `20\n` | whole price |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
