# Hidden tests, p09-reverse

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `olleh\n` | olleh |
| t2 | `abc` | `cba\n` | cba |
| t3 | `a` | `a\n` | edge - single char: a |
| t4 | `` | `\n` | empty: empty line |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
