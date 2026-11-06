# Hidden tests, p05-compute-in-case

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1\n4` | `Enter option and quantity:\n8\n` | option 1 price 2, qty 4 -> 8 |
| t2 | `2\n3` | `Enter option and quantity:\n15\n` | option 2 price 5, qty 3 -> 15 |
| t3 | `3\n2` | `Enter option and quantity:\n20\n` | option 3 price 10, qty 2 -> 20 |
| t4 | `9\n5` | `Enter option and quantity:\ninvalid option\n` | bad option -> invalid option (default), qty ignored |
| t5 | `2\n0` | `Enter option and quantity:\n0\n` | option 2, qty 0 -> 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
