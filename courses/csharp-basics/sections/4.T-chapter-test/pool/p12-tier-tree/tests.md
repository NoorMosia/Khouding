# Hidden tests, p12-tier-tree

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4` | `Enter a number:\npositive even\n` | positive even |
| t2 | `7` | `Enter a number:\npositive odd\n` | positive odd |
| t3 | `-2` | `Enter a number:\nnot positive\n` | not positive (inner never reached) |
| t4 | `0` | `Enter a number:\nnot positive\n` | not positive (zero) |
| t5 | `1` | `Enter a number:\npositive odd\n` | smallest positive odd |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
