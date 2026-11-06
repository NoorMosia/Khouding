# Hidden tests, p07-split-on-char

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `a,b,c\n,` | `3\n` | 3 pieces |
| t2 | `a b c\n ` | `3\n` | 3 pieces (space) |
| t3 | `hello\n,` | `1\n` | sep absent: 1 |
| t4 | `a|b|c|d\n|` | `4\n` | 4 pieces |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
