# Hidden tests, p04-not-positive

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a number:\nFalse\n` | positive -> not positive is False |
| t2 | `0` | `Enter a number:\nTrue\n` | edge: zero is not positive -> True |
| t3 | `-4` | `Enter a number:\nTrue\n` | negative -> True |
| t4 | `1` | `Enter a number:\nFalse\n` | smallest positive -> False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
