# Hidden tests, p04-count-letters

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `abc123` | `3\n` | 3 letters |
| t2 | `hello` | `5\n` | all letters: 5 |
| t3 | `123` | `0\n` | no letters: 0 |
| t4 | `` | `0\n` | empty: 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
