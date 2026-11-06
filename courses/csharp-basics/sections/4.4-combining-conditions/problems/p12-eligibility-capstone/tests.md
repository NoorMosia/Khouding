# Hidden tests, p12-eligibility-capstone

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2500\n30\n1` | `Enter income, age, employed (0 or 1):\napproved\n` | all factors pass -> approved |
| t2 | `1500\n30\n1` | `Enter income, age, employed (0 or 1):\ndeclined\n` | income too low -> declined |
| t3 | `2500\n18\n1` | `Enter income, age, employed (0 or 1):\ndeclined\n` | age below band -> declined |
| t4 | `2500\n70\n1` | `Enter income, age, employed (0 or 1):\ndeclined\n` | age above band -> declined |
| t5 | `2500\n30\n0` | `Enter income, age, employed (0 or 1):\ndeclined\n` | not employed -> declined |
| t6 | `2000\n21\n1` | `Enter income, age, employed (0 or 1):\napproved\n` | edges: income and low age both inclusive -> approved |
| t7 | `3000\n65\n1` | `Enter income, age, employed (0 or 1):\napproved\n` | high age edge inclusive -> approved |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
