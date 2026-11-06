# Hidden tests, p10-report-parity

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4` | `Enter a number:\neven\n` | even |
| t2 | `7` | `Enter a number:\nodd\n` | odd |
| t3 | `0` | `Enter a number:\neven\n` | even |
| t4 | `-3` | `Enter a number:\nodd\n` | odd |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
