# Hidden tests, p01-count-char

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello\nl` | `2\n` | 2 l's |
| t2 | `hello\nz` | `0\n` | absent: 0 |
| t3 | `banana\na` | `3\n` | 3 a's |
| t4 | `\na` | `0\n` | empty string: 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
