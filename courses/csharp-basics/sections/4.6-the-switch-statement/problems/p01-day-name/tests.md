# Hidden tests, p01-day-name

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1` | `Enter a day number (1-7):\nMonday\n` | Monday |
| t2 | `3` | `Enter a day number (1-7):\nWednesday\n` | Wednesday |
| t3 | `7` | `Enter a day number (1-7):\nSunday\n` | Sunday (last valid) |
| t4 | `0` | `Enter a day number (1-7):\nunknown\n` | below range -> unknown (default) |
| t5 | `9` | `Enter a day number (1-7):\nunknown\n` | above range -> unknown (default) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
