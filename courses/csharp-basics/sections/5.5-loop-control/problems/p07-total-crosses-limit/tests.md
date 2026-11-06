# Hidden tests, p07-total-crosses-limit

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n10\n4\n3\n5\n9\n1` | `Enter count, limit, then values:\n12\n` | 4,7,12 -> exceeds 10 at 12, print 12 and stop |
| t2 | `3\n100\n10\n20\n30` | `Enter count, limit, then values:\n60\n` | never exceeds 100 -> final total 60 |
| t3 | `2\n5\n9\n1` | `Enter count, limit, then values:\n9\n` | first value 9 already exceeds 5 -> 9 |
| t4 | `4\n0\n1\n2\n3\n4` | `Enter count, limit, then values:\n1\n` | limit 0: first running total 1 exceeds -> 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
