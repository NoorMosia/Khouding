# Hidden tests, p01-declare-a-string

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada` | `Ada\n` | normal name |
| t2 | `A` | `A\n` | single-letter word (still a string) |
| t3 | `hello` | `hello\n` | a lowercase word |
| t4 | `Mississippi` | `Mississippi\n` | longer word |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
