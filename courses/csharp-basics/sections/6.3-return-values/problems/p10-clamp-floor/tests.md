# Hidden tests, p10-clamp-floor

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a number:\n5\n` | 5 (non-negative, returned as is) |
| t2 | `0` | `Enter a number:\n0\n` | 0 (boundary, not negative) |
| t3 | `-3` | `Enter a number:\n0\n` | 0 (negative clamped to 0, early return) |
| t4 | `-1` | `Enter a number:\n0\n` | 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
