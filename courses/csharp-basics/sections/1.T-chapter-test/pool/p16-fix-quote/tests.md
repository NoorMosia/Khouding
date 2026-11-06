# Hidden tests, p16-fix-quote

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `Omar\nO\n` | no-input; fix the char quotes so it compiles and prints Omar then O |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
