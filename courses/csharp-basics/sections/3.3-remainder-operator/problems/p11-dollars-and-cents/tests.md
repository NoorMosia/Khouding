# Hidden tests, p11-dollars-and-cents

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `250` | `Enter the total cents:\n2\n50\n` | 2 then 50 |
| t2 | `300` | `Enter the total cents:\n3\n0\n` | 3 then 0 (exact) |
| t3 | `75` | `Enter the total cents:\n0\n75\n` | 0 then 75 (under one unit) |
| t4 | `1099` | `Enter the total cents:\n10\n99\n` | 10 then 99 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
