# Hidden tests, p02-in-range-then-half

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `20` | `Enter a number:\nlow half\n` | in range, low half |
| t2 | `80` | `Enter a number:\nhigh half\n` | in range, high half |
| t3 | `50` | `Enter a number:\nlow half\n` | edge: 50 <= 50 -> low half |
| t4 | `51` | `Enter a number:\nhigh half\n` | just over midpoint -> high half |
| t5 | `0` | `Enter a number:\nout\n` | below range -> out |
| t6 | `150` | `Enter a number:\nout\n` | above range -> out |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
