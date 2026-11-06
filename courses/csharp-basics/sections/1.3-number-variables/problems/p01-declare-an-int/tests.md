# Hidden tests, p01-declare-an-int

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3` | `3\n` | normal small |
| t2 | `0` | `0\n` | edge - zero |
| t3 | `150` | `150\n` | larger |
| t4 | `-7` | `-7\n` | edge - negative |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
