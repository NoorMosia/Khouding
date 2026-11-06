# Hidden tests, p09-adjust-the-score

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n5\n3\n2` | `Enter the starting score:\nEnter the bonus to add:\nEnter the penalty to subtract:\nEnter the multiplier:\n24\n` | ((10+5)-3)*2 = 24 |
| t2 | `0\n0\n0\n1` | `Enter the starting score:\nEnter the bonus to add:\nEnter the penalty to subtract:\nEnter the multiplier:\n0\n` | 0 |
| t3 | `20\n10\n5\n0` | `Enter the starting score:\nEnter the bonus to add:\nEnter the penalty to subtract:\nEnter the multiplier:\n0\n` | times zero at the end = 0 |
| t4 | `7\n3\n10\n4` | `Enter the starting score:\nEnter the bonus to add:\nEnter the penalty to subtract:\nEnter the multiplier:\n0\n` | ((7+3)-10)*4 = 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
