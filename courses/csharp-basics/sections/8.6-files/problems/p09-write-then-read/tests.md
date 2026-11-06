# Hidden tests, p09-write-then-read

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `HELLO\n` | HELLO |
| t2 | `world` | `WORLD\n` | WORLD |
| t3 | `test` | `TEST\n` | TEST |
| t4 | `abc` | `ABC\n` | ABC |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
