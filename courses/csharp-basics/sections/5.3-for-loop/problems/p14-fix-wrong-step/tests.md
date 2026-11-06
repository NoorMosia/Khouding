# Hidden tests, p14-fix-wrong-step

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10` | `Enter a limit:\n2\n4\n6\n8\n10\n` | 2 4 6 8 10 (buggy prints 2..10 all) |
| t2 | `9` | `Enter a limit:\n2\n4\n6\n8\n` | 2 4 6 8 (buggy prints 2..9 all) |
| t3 | `2` | `Enter a limit:\n2\n` | just 2 |
| t4 | `1` | `Enter a limit:\n` | n < 2: nothing |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
