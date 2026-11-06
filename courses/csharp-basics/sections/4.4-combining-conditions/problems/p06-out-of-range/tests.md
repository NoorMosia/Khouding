# Hidden tests, p06-out-of-range

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `15` | `Enter a number:\nFalse\n` | inside -> False |
| t2 | `10` | `Enter a number:\nFalse\n` | low edge, inside -> False |
| t3 | `20` | `Enter a number:\nFalse\n` | high edge, inside -> False |
| t4 | `9` | `Enter a number:\nTrue\n` | below -> True |
| t5 | `21` | `Enter a number:\nTrue\n` | above -> True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
