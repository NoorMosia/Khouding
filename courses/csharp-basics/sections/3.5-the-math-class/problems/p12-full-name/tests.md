# Hidden tests, p12-full-name

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `9` | `Enter a number:\n3\n` | 3 |
| t2 | `25` | `Enter a number:\n5\n` | 5 |
| t3 | `100` | `Enter a number:\n10\n` | 10 |
| t4 | `49` | `Enter a number:\n7\n` | 7 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
