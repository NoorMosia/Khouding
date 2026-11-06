# Hidden tests, p03-numbered-positions

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n10\n20\n30` | `1: 10\n2: 20\n3: 30\n` | 1: 10, 2: 20, 3: 30 |
| t2 | `0` | `` | edge - nothing |
| t3 | `1\n99` | `1: 99\n` | 1: 99 |
| t4 | `2\n-5\n8` | `1: -5\n2: 8\n` | 1: -5, 2: 8 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
