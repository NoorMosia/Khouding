# Hidden tests, p15-isolation

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3\n9` | `Enter three numbers:\n5\n9\n` | 5 then 9 |
| t2 | `0\n0\n7` | `Enter three numbers:\n0\n7\n` | 0 then 7 |
| t3 | `-1\n4\n2` | `Enter three numbers:\n3\n2\n` | 3 then 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
