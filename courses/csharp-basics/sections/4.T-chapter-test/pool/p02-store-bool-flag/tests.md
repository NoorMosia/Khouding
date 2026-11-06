# Hidden tests, p02-store-bool-flag

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a number:\nTrue\n` | non-negative -> True |
| t2 | `0` | `Enter a number:\nTrue\n` | edge: 0 >= 0 -> True |
| t3 | `-1` | `Enter a number:\nFalse\n` | negative -> False |
| t4 | `-100` | `Enter a number:\nFalse\n` | negative -> False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
