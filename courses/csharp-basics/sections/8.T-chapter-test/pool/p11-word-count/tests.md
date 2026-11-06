# Hidden tests, p11-word-count

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `one two three` | `3\n` | 3 |
| t2 | `hello` | `1\n` | 1 |
| t3 | `a b c d e` | `5\n` | 5 |
| t4 | `just two` | `2\n` | 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
