# Hidden tests, p05-larger-of-two

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n9` | `Enter the first number:\nEnter the second number:\n9\n` | 9 (second larger) |
| t2 | `10\n4` | `Enter the first number:\nEnter the second number:\n10\n` | 10 (first larger) |
| t3 | `5\n5` | `Enter the first number:\nEnter the second number:\n5\n` | 5 (equal) |
| t4 | `-7\n-2` | `Enter the first number:\nEnter the second number:\n-2\n` | -2 (less negative is larger) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
