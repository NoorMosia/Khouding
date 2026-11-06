# Hidden tests, p03-last-char

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `o\n` | o |
| t2 | `cat` | `t\n` | t |
| t3 | `z` | `z\n` | edge - single char: z |
| t4 | `last word` | `d\n` | d |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
