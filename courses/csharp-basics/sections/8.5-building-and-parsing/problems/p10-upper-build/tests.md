# Hidden tests, p10-upper-build

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `HELLO\n` | HELLO |
| t2 | `Hello World` | `HELLO WORLD\n` | HELLO WORLD |
| t3 | `a` | `A\n` | A |
| t4 | `` | `\n` | empty: empty line |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
