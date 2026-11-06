# Hidden tests, p06-status-code

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `200` | `Enter a status code:\nok\n` | ok |
| t2 | `404` | `Enter a status code:\nnot found\n` | not found |
| t3 | `500` | `Enter a status code:\nother\n` | other (default) |
| t4 | `301` | `Enter a status code:\nother\n` | other (default) |
| t5 | `0` | `Enter a status code:\nother\n` | other (default) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
