# Hidden tests, p11-two-factor-gate

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `20\n1` | `Enter age and license (0 or 1):\nmay drive\n` | old enough and licensed -> may drive |
| t2 | `20\n0` | `Enter age and license (0 or 1):\nno\n` | old enough, no license -> no |
| t3 | `15\n1` | `Enter age and license (0 or 1):\nno\n` | licensed but too young -> no |
| t4 | `15\n0` | `Enter age and license (0 or 1):\nno\n` | neither -> no |
| t5 | `16\n1` | `Enter age and license (0 or 1):\nmay drive\n` | age edge inclusive, licensed -> may drive |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
