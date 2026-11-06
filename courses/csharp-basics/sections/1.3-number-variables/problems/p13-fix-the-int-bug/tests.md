# Hidden tests, p13-fix-the-int-bug

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4.99` | `4.99\n` | price with cents |
| t2 | `1.5` | `1.5\n` | simple decimal |
| t3 | `0` | `0\n` | edge - zero |
| t4 | `19.95` | `19.95\n` | larger price |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
