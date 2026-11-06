# Hidden tests, p07-eligible-branch

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `40` | `Enter your age:\neligible\n` | inside band -> eligible |
| t2 | `18` | `Enter your age:\neligible\n` | low edge, inclusive -> eligible |
| t3 | `64` | `Enter your age:\neligible\n` | high edge, inside -> eligible |
| t4 | `17` | `Enter your age:\nno\n` | below -> no |
| t5 | `65` | `Enter your age:\nno\n` | at upper bound, excluded -> no |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
