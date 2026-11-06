# Hidden tests, p01-toupper

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `HELLO\n` | HELLO |
| t2 | `Hello World` | `HELLO WORLD\n` | HELLO WORLD |
| t3 | `ALREADY` | `ALREADY\n` | already upper: ALREADY |
| t4 | `a` | `A\n` | single char: A |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
