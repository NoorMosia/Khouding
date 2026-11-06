# Hidden tests, p15-day-name

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1` | `Enter a day number (1-7):\nMonday\n` | Monday |
| t2 | `5` | `Enter a day number (1-7):\nFriday\n` | Friday |
| t3 | `7` | `Enter a day number (1-7):\nSunday\n` | Sunday (last valid) |
| t4 | `8` | `Enter a day number (1-7):\nunknown\n` | above -> unknown (default) |
| t5 | `0` | `Enter a day number (1-7):\nunknown\n` | below -> unknown (default) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
