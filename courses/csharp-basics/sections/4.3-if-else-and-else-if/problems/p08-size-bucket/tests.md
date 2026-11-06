# Hidden tests, p08-size-bucket

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3` | `Enter the count:\nsmall\n` | small (< 10) |
| t2 | `40` | `Enter the count:\nmedium\n` | medium (10..99) |
| t3 | `500` | `Enter the count:\nlarge\n` | large (100..999) |
| t4 | `1000` | `Enter the count:\nhuge\n` | huge (>= 1000) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
