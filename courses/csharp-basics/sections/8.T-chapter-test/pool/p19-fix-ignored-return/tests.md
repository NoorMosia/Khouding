# Hidden tests, p19-fix-ignored-return

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `HELLO\n` | HELLO |
| t2 | `mixed Case` | `MIXED CASE\n` | MIXED CASE |
| t3 | `ALREADY` | `ALREADY\n` | ALREADY |
| t4 | `one more` | `ONE MORE\n` | ONE MORE |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
