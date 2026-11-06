# Hidden tests, p01-length

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `5\n` | 5 |
| t2 | `a` | `1\n` | edge - single char: 1 |
| t3 | `two words` | `9\n` | space counts: 9 |
| t4 | `programming` | `11\n` | longer: 11 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
