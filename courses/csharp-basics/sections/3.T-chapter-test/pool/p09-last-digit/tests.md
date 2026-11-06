# Hidden tests, p09-last-digit

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `342` | `Enter a number:\n2\n` | 2 |
| t2 | `7` | `Enter a number:\n7\n` | 7 (single digit) |
| t3 | `90` | `Enter a number:\n0\n` | 0 |
| t4 | `1005` | `Enter a number:\n5\n` | 5 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
