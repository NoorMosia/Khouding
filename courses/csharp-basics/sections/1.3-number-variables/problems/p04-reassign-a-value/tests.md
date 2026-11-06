# Hidden tests, p04-reassign-a-value

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n25` | `25\n` | normal; 10 overwritten by 25 |
| t2 | `5\n0` | `0\n` | edge - reassigned to zero |
| t3 | `-3\n-9` | `-9\n` | edge - negatives |
| t4 | `7\n7` | `7\n` | reassigned to same value |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
