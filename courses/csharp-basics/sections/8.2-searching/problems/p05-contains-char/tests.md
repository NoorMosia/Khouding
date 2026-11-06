# Hidden tests, p05-contains-char

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello\ne` | `True\n` | present: True |
| t2 | `hello\nz` | `False\n` | absent: False |
| t3 | `Hello\nh` | `False\n` | case differs: False |
| t4 | `a b c\n ` | `True\n` | space present: True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
