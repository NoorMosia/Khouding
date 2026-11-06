# Hidden tests, p02-tolower

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `HELLO` | `hello\n` | hello |
| t2 | `Hello World` | `hello world\n` | hello world |
| t3 | `already` | `already\n` | already lower: already |
| t4 | `A` | `a\n` | single char: a |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
