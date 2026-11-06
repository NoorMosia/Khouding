# Hidden tests, p05-menu-repeat

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1\n2\n4` | `Menu: 1=start 2=load 3=save 4=quit\nstart\nMenu: 1=start 2=load 3=save 4=quit\nload\nMenu: 1=start 2=load 3=save 4=quit\nbye\n` | start, load, then bye on 4 |
| t2 | `4` | `Menu: 1=start 2=load 3=save 4=quit\nbye\n` | quit immediately: menu shows once, then bye |
| t3 | `3\n4` | `Menu: 1=start 2=load 3=save 4=quit\nsave\nMenu: 1=start 2=load 3=save 4=quit\nbye\n` | save then bye |
| t4 | `9\n4` | `Menu: 1=start 2=load 3=save 4=quit\nunknown\nMenu: 1=start 2=load 3=save 4=quit\nbye\n` | unknown choice then bye |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
