# Hidden tests, p17-max-overloads

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n9\n5` | `Enter three numbers:\n9\n9\n` | 9 then 9 |
| t2 | `8\n2\n4` | `Enter three numbers:\n8\n8\n` | 8 then 8 |
| t3 | `1\n2\n7` | `Enter three numbers:\n2\n7\n` | 2 then 7 |
| t4 | `-5\n-2\n-9` | `Enter three numbers:\n-2\n-2\n` | -2 then -2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
