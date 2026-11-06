# Hidden tests, p07-append-zeros

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n1\n2\n3\n2` | `3\n5\n` | 3 then 5 |
| t2 | `0\n4` | `0\n4\n` | 0 then 4 |
| t3 | `2\n5\n6\n0` | `2\n2\n` | 2 then 2 (add 0 zeros) |
| t4 | `1\n7\n3` | `1\n4\n` | 1 then 4 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
