# Hidden tests, p10-fix-off-by-one

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `o\n` | last is o |
| t2 | `cat` | `t\n` | last is t |
| t3 | `z` | `z\n` | edge - single char: z |
| t4 | `the end` | `d\n` | last is d |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
