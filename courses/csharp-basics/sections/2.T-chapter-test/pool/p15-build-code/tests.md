# Hidden tests, p15-build-code

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `AB\n100` | `Enter the prefix:\nEnter the number:\nAB-100\n` | typical |
| t2 | `ZX\n7` | `Enter the prefix:\nEnter the number:\nZX-7\n` | small number |
| t3 | `QQ\n0` | `Enter the prefix:\nEnter the number:\nQQ-0\n` | zero |
| t4 | `RT\n4096` | `Enter the prefix:\nEnter the number:\nRT-4096\n` | large number |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
