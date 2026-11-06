# Hidden tests, p08-temperature-bands

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a temperature:\ncold\n` | cold |
| t2 | `9` | `Enter a temperature:\ncold\n` | cold upper edge (< 10) |
| t3 | `10` | `Enter a temperature:\nwarm\n` | warm low edge |
| t4 | `24` | `Enter a temperature:\nwarm\n` | warm high edge |
| t5 | `25` | `Enter a temperature:\nhot\n` | hot low edge |
| t6 | `40` | `Enter a temperature:\nhot\n` | hot |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
