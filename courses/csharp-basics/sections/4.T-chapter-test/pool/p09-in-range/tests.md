# Hidden tests, p09-in-range

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `50` | `Enter a number:\nTrue\n` | inside -> True |
| t2 | `1` | `Enter a number:\nTrue\n` | low edge inclusive -> True |
| t3 | `100` | `Enter a number:\nTrue\n` | high edge inclusive -> True |
| t4 | `0` | `Enter a number:\nFalse\n` | below -> False |
| t5 | `101` | `Enter a number:\nFalse\n` | above -> False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
