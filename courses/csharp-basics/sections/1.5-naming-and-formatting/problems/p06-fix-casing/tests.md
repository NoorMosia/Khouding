# Hidden tests, p06-fix-casing

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2` | `14\n` | normal; 14 |
| t2 | `1` | `7\n` | one week |
| t3 | `0` | `0\n` | edge - zero |
| t4 | `10` | `70\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
