# Hidden tests, p09-pass-either-way

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `95\n0` | `Enter score and bonus (0 or 1):\npass\n` | high score, no bonus -> pass |
| t2 | `40\n1` | `Enter score and bonus (0 or 1):\npass\n` | low score but bonus -> pass |
| t3 | `90\n0` | `Enter score and bonus (0 or 1):\npass\n` | score edge, inclusive -> pass |
| t4 | `40\n0` | `Enter score and bonus (0 or 1):\nfail\n` | neither -> fail |
| t5 | `89\n0` | `Enter score and bonus (0 or 1):\nfail\n` | just below the mark, no bonus -> fail |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
