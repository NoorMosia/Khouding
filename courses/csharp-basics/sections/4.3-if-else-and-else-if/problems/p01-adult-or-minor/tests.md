# Hidden tests, p01-adult-or-minor

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `20` | `Enter your age:\nadult\n` | adult |
| t2 | `18` | `Enter your age:\nadult\n` | adult (18 counts) |
| t3 | `17` | `Enter your age:\nminor\n` | minor |
| t4 | `0` | `Enter your age:\nminor\n` | minor |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
