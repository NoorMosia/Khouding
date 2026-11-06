# Hidden tests, p06-same-name-distinct

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a total:\n42\n5\n` | 42 then 5 |
| t2 | `0` | `Enter a total:\n42\n0\n` | 42 then 0 |
| t3 | `99` | `Enter a total:\n42\n99\n` | 42 then 99 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
