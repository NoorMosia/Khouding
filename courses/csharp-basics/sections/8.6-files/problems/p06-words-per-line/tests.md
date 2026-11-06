# Hidden tests, p06-words-per-line

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | ` ` | `3\n2\n4\n` | split on space: word counts |
| t2 | `a` | `1\n1\n2\n` | split on 'a': different counts |
| t3 | `e` | `4\n2\n1\n` | split on 'e': different counts |
| t4 | `z` | `1\n1\n1\n` | sep absent: each line is 1 piece |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
