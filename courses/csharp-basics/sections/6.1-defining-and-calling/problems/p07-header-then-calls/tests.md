# Hidden tests, p07-header-then-calls

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3` | `Enter a count:\nROWS:\nrow\nrow\nrow\n` | header then 3 rows |
| t2 | `0` | `Enter a count:\nROWS:\n` | header then nothing (zero calls) |
| t3 | `1` | `Enter a count:\nROWS:\nrow\n` | header then 1 row |
| t4 | `4` | `Enter a count:\nROWS:\nrow\nrow\nrow\nrow\n` | header then 4 rows |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
