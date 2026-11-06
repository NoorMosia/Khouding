# Hidden tests, p15-first-match

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n50\n120\n80\n200` | `Enter a count:\n120\n` | first above 100 is 120 (found late) |
| t2 | `3\n150\n2\n4` | `Enter a count:\n150\n` | first value matches -> 150 |
| t3 | `3\n1\n2\n3` | `Enter a count:\nnone\n` | none above 100 -> none |
| t4 | `1\n999` | `Enter a count:\n999\n` | single match -> 999 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
