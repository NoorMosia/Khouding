# Hidden tests, p02-menu-choice

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1` | `Choose an option (1-3):\nstart\n` | start |
| t2 | `2` | `Choose an option (1-3):\nload\n` | load |
| t3 | `3` | `Choose an option (1-3):\nquit\n` | quit |
| t4 | `4` | `Choose an option (1-3):\ninvalid\n` | out of menu -> invalid (default) |
| t5 | `0` | `Choose an option (1-3):\ninvalid\n` | zero -> invalid (default) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
