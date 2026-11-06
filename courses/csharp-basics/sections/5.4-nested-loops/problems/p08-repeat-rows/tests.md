# Hidden tests, p08-repeat-rows

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3` | `Enter a height:\n1\n2 2\n3 3 3\n` | 1 / 2 2 / 3 3 3 |
| t2 | `1` | `Enter a height:\n1\n` | just 1 |
| t3 | `4` | `Enter a height:\n1\n2 2\n3 3 3\n4 4 4 4\n` | 1 / 2 2 / 3 3 3 / 4 4 4 4 |
| t4 | `2` | `Enter a height:\n1\n2 2\n` | 1 / 2 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
