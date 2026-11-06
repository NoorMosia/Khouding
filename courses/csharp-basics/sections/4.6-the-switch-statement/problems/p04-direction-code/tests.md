# Hidden tests, p04-direction-code

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `N` | `Enter a direction code (N, E, S, W):\nNorth\n` | North |
| t2 | `E` | `Enter a direction code (N, E, S, W):\nEast\n` | East |
| t3 | `S` | `Enter a direction code (N, E, S, W):\nSouth\n` | South |
| t4 | `W` | `Enter a direction code (N, E, S, W):\nWest\n` | West |
| t5 | `X` | `Enter a direction code (N, E, S, W):\nunknown\n` | unmatched -> unknown (default) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
