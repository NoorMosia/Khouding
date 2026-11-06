# Hidden tests, p08-raw-vs-formatted

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7.5` | `Enter a value:\nRaw: 7.5\nFormatted: 7.50\n` | raw 7.5 vs formatted 7.50 |
| t2 | `10` | `Enter a value:\nRaw: 10\nFormatted: 10.00\n` | raw 10 vs formatted 10.00 |
| t3 | `2.25` | `Enter a value:\nRaw: 2.25\nFormatted: 2.25\n` | raw 2.25 vs formatted 2.25 |
| t4 | `0.5` | `Enter a value:\nRaw: 0.5\nFormatted: 0.50\n` | raw 0.5 vs formatted 0.50 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
