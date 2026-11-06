# Hidden tests, p05-fresh-each-call

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `1\n1\n` | 1 then 1 (local resets each call) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
