# Hidden tests, p08-keep-digits

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `abc123def` | `123\n` | 123 |
| t2 | `12345` | `12345\n` | all digits: 12345 |
| t3 | `hello` | `\n` | no digits: empty line |
| t4 | `` | `\n` | empty: empty line |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
