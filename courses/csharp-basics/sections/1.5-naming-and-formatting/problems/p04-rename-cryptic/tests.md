# Hidden tests, p04-rename-cryptic

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7\n5` | `35\n` | normal; 35 |
| t2 | `3\n10` | `30\n` | different values |
| t3 | `0\n9` | `0\n` | edge - zero |
| t4 | `12\n12` | `144\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
