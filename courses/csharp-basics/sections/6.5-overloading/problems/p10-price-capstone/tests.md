# Hidden tests, p10-price-capstone

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n5` | `Enter quantity and unit:\n30\n15\n` | default 30 then 15 |
| t2 | `0\n9` | `Enter quantity and unit:\n0\n0\n` | 0 then 0 |
| t3 | `4\n10` | `Enter quantity and unit:\n40\n40\n` | 40 then 40 |
| t4 | `2\n7` | `Enter quantity and unit:\n20\n14\n` | 20 then 14 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
