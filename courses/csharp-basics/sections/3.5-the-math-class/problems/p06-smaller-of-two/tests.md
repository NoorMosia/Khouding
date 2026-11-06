# Hidden tests, p06-smaller-of-two

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n9` | `Enter the first number:\nEnter the second number:\n3\n` | 3 (first smaller) |
| t2 | `10\n4` | `Enter the first number:\nEnter the second number:\n4\n` | 4 (second smaller) |
| t3 | `5\n5` | `Enter the first number:\nEnter the second number:\n5\n` | 5 (equal) |
| t4 | `-7\n-2` | `Enter the first number:\nEnter the second number:\n-7\n` | -7 (more negative is smaller) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
