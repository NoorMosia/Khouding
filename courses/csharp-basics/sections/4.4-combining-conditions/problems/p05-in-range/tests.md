# Hidden tests, p05-in-range

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `15` | `Enter a number:\nTrue\n` | inside -> True |
| t2 | `10` | `Enter a number:\nTrue\n` | low edge, inclusive -> True |
| t3 | `20` | `Enter a number:\nTrue\n` | high edge, inclusive -> True |
| t4 | `9` | `Enter a number:\nFalse\n` | just below -> False |
| t5 | `21` | `Enter a number:\nFalse\n` | just above -> False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
