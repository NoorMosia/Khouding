# Hidden tests, p10-calculator-capstone

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1\n6\n4` | `Enter op (1-4) and two numbers:\n10\n` | add -> 10 |
| t2 | `2\n6\n4` | `Enter op (1-4) and two numbers:\n2\n` | subtract -> 2 |
| t3 | `3\n6\n4` | `Enter op (1-4) and two numbers:\n24\n` | multiply -> 24 |
| t4 | `4\n6\n4` | `Enter op (1-4) and two numbers:\n5\n` | average (6+4)/2 -> 5 |
| t5 | `4\n7\n2` | `Enter op (1-4) and two numbers:\n4\n` | average (7+2)/2 = 9/2 -> 4 (integer division) |
| t6 | `9\n1\n1` | `Enter op (1-4) and two numbers:\ninvalid op\n` | bad op -> invalid op (default) |
| t7 | `2\n3\n10` | `Enter op (1-4) and two numbers:\n-7\n` | subtract negative result -> -7 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
