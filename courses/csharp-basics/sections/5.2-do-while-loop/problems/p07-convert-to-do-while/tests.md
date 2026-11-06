# Hidden tests, p07-convert-to-do-while

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3` | `Enter a count:\n1\n2\n3\n` | 1 2 3 |
| t2 | `1` | `Enter a count:\n1\n` | just 1 |
| t3 | `0` | `Enter a count:\n1\n` | do-while runs once: prints 1 (a plain while would print nothing) |
| t4 | `5` | `Enter a count:\n1\n2\n3\n4\n5\n` | 1..5 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
