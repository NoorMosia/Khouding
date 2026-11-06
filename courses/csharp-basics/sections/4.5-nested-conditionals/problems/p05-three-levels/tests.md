# Hidden tests, p05-three-levels

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `-3` | `Enter a number:\nnot positive\n` | L1 else -> not positive |
| t2 | `7` | `Enter a number:\nodd\n` | positive odd -> odd |
| t3 | `8` | `Enter a number:\neven by four\n` | positive even, divisible by 4 -> even by four |
| t4 | `6` | `Enter a number:\neven not by four\n` | positive even, not divisible by 4 -> even not by four |
| t5 | `0` | `Enter a number:\nnot positive\n` | zero is not positive -> not positive |
| t6 | `4` | `Enter a number:\neven by four\n` | smallest positive multiple of 4 -> even by four |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
