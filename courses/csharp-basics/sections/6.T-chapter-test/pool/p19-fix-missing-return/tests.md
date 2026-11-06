# Hidden tests, p19-fix-missing-return

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a number:\nnon-negative\n` | non-negative |
| t2 | `0` | `Enter a number:\nnon-negative\n` | non-negative |
| t3 | `-3` | `Enter a number:\nnegative\n` | negative |
| t4 | `-1` | `Enter a number:\nnegative\n` | negative |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
