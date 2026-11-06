# Hidden tests, p17-fix-assign-vs-equal

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `0` | `Enter a number:\nzero\n` | zero |
| t2 | `5` | `Enter a number:\nnonzero\n` | nonzero |
| t3 | `-3` | `Enter a number:\nnonzero\n` | nonzero (negative) |
| t4 | `1` | `Enter a number:\nnonzero\n` | nonzero edge |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
