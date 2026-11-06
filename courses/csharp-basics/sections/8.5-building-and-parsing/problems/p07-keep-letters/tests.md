# Hidden tests, p07-keep-letters

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `abc123` | `abc\n` | abc |
| t2 | `hello world` | `helloworld\n` | helloworld (spaces removed) |
| t3 | `123` | `\n` | no letters: empty line |
| t4 | `` | `\n` | empty: empty line |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
