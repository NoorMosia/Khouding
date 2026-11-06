# Hidden tests, p10-at-start

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world\nhello` | `True\n` | at start: True |
| t2 | `hello world\nworld` | `False\n` | later (index 6): False |
| t3 | `hello world\nxyz` | `False\n` | absent (-1): False |
| t4 | `abcabc\nabc` | `True\n` | at start: True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
