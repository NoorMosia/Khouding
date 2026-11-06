# Hidden tests, p06-nonempty-all-letters

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `True\n` | True |
| t2 | `hello1` | `False\n` | has digit: False |
| t3 | `` | `False\n` | empty: False |
| t4 | `ABC` | `True\n` | uppercase letters: True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
