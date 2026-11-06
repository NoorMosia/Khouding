# Hidden tests, p05-all-digits

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `12345` | `True\n` | True |
| t2 | `123a5` | `False\n` | one letter: False |
| t3 | `hello` | `False\n` | no digits: False |
| t4 | `` | `True\n` | empty: True (no character fails) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
