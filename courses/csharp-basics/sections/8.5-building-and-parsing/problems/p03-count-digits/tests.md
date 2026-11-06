# Hidden tests, p03-count-digits

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `abc123` | `3\n` | 3 digits |
| t2 | `99999` | `5\n` | all digits: 5 |
| t3 | `hello` | `0\n` | no digits: 0 |
| t4 | `` | `0\n` | empty: 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
