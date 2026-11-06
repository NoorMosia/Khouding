# Hidden tests, p03-echo-until-sentinel

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n8\n2\n0` | `Enter numbers, 0 to stop:\n5\n8\n2\n` | echoes 5 8 2, stops at 0 |
| t2 | `0` | `Enter numbers, 0 to stop:\n` | sentinel first: read once, echo nothing (0 not echoed) |
| t3 | `7\n0` | `Enter numbers, 0 to stop:\n7\n` | echoes 7 |
| t4 | `4\n-2\n0` | `Enter numbers, 0 to stop:\n4\n-2\n` | echoes 4 and -2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
