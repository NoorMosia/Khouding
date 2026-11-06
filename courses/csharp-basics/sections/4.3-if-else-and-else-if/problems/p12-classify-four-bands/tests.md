# Hidden tests, p12-classify-four-bands

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter the water level:\nempty\n` | empty |
| t2 | `20` | `Enter the water level:\nlow\n` | low (boundary) |
| t3 | `60` | `Enter the water level:\nok\n` | ok (boundary) |
| t4 | `90` | `Enter the water level:\nfull\n` | full (boundary, final else) |
| t5 | `45` | `Enter the water level:\nlow\n` | low (interior) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
