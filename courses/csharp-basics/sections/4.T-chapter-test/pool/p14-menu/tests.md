# Hidden tests, p14-menu

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1` | `Choose an option (1-3):\nnew game\n` | new game |
| t2 | `2` | `Choose an option (1-3):\ncontinue\n` | continue |
| t3 | `3` | `Choose an option (1-3):\nexit\n` | exit |
| t4 | `5` | `Choose an option (1-3):\ninvalid\n` | off menu -> invalid (default) |
| t5 | `0` | `Choose an option (1-3):\ninvalid\n` | zero -> invalid (default) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
