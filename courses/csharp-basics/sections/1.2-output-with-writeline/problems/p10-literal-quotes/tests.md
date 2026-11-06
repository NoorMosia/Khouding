# Hidden tests, p10-literal-quotes

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `She said "hello".\n` | no-input; output contains literal double-quote characters (\" escape) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
