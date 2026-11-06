# Hidden tests, p01-private-locals

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `1\n99\n` | Main's x then Helper's x: 1 then 99 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
