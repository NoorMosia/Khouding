# Hidden tests, p11-fix-loose-range

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `15` | `Enter a number:\nTrue\n` | inside -> True |
| t2 | `10` | `Enter a number:\nTrue\n` | low edge -> True |
| t3 | `20` | `Enter a number:\nTrue\n` | high edge -> True |
| t4 | `5` | `Enter a number:\nFalse\n` | below: buggy || would print True, correct && prints False |
| t5 | `25` | `Enter a number:\nFalse\n` | above: buggy || would print True, correct && prints False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
