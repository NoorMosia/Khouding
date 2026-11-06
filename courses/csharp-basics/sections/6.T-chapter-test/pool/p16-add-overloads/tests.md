# Hidden tests, p16-add-overloads

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n4` | `Enter three numbers:\n5\n9\n` | 5 then 9 |
| t2 | `0\n0\n0` | `Enter three numbers:\n0\n0\n` | 0 then 0 |
| t3 | `-1\n5\n2` | `Enter three numbers:\n4\n6\n` | 4 then 6 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
