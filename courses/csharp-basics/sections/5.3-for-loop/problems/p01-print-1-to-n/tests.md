# Hidden tests, p01-print-1-to-n

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4` | `Enter a count:\n1\n2\n3\n4\n` | 1 2 3 4 |
| t2 | `1` | `Enter a count:\n1\n` | one pass |
| t3 | `0` | `Enter a count:\n` | zero iterations: nothing |
| t4 | `6` | `Enter a count:\n1\n2\n3\n4\n5\n6\n` | 1..6 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
