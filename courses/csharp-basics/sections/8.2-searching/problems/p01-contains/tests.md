# Hidden tests, p01-contains

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world\nworld` | `True\n` | present: True |
| t2 | `hello world\nxyz` | `False\n` | absent: False |
| t3 | `Hello\nhello` | `False\n` | case differs: False |
| t4 | `abcabc\nbca` | `True\n` | present mid: True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
