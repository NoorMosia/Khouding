# Hidden tests, p06-default-value

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n0` | `0\n` | first slot default |
| t2 | `5\n4` | `0\n` | last slot default |
| t3 | `1\n0` | `0\n` | edge - length 1 |
| t4 | `10\n7` | `0\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
