# Hidden tests, p09-hollow-square

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4` | `Enter a size:\n****\n*  *\n*  *\n****\n` | 4x4 hollow square |
| t2 | `1` | `Enter a size:\n*\n` | 1x1: a single * (all border) |
| t3 | `2` | `Enter a size:\n**\n**\n` | 2x2: all four cells are border -> **/** |
| t4 | `5` | `Enter a size:\n*****\n*   *\n*   *\n*   *\n*****\n` | 5x5 with a hollow interior |
| t5 | `3` | `Enter a size:\n***\n* *\n***\n` | 3x3: *** / * * / *** |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
