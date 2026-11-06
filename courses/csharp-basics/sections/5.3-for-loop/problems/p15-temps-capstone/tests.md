# Hidden tests, p15-temps-capstone

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n22\n20\n25\n18\n30` | `Enter count, threshold, then temps:\n23\n2\n` | avg (20+25+18+30)/4=23; above 22: 25,30 -> 2 |
| t2 | `1\n10\n15` | `Enter count, threshold, then temps:\n15\n1\n` | avg 15; above 10: 1 |
| t3 | `3\n5\n5\n5\n5` | `Enter count, threshold, then temps:\n5\n0\n` | avg 5; above 5: none -> 0 (strict) |
| t4 | `2\n-5\n-4\n-10` | `Enter count, threshold, then temps:\n-7\n1\n` | avg (-14)/2=-7; above -5: -4 -> 1 |
| t5 | `3\n15\n10\n20\n30` | `Enter count, threshold, then temps:\n20\n2\n` | avg 20; above 15: 20,30 -> 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
