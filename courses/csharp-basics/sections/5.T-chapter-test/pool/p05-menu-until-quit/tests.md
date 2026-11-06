# Hidden tests, p05-menu-until-quit

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1\n2\n0` | `Pick (1-3, 0 quit):\none\nPick (1-3, 0 quit):\ntwo\nPick (1-3, 0 quit):\nbye\n` | one, two, then bye |
| t2 | `0` | `Pick (1-3, 0 quit):\nbye\n` | quit immediately: menu once then bye |
| t3 | `3\n0` | `Pick (1-3, 0 quit):\nthree\nPick (1-3, 0 quit):\nbye\n` | three then bye |
| t4 | `9\n0` | `Pick (1-3, 0 quit):\nunknown\nPick (1-3, 0 quit):\nbye\n` | unknown then bye |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
