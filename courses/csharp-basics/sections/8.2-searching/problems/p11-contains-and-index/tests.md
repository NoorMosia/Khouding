# Hidden tests, p11-contains-and-index

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world\nworld` | `True\n6\n` | True then 6 |
| t2 | `hello world\nxyz` | `False\n-1\n` | False then -1 |
| t3 | `abcabc\nabc` | `True\n0\n` | True then 0 |
| t4 | `hi\nbye` | `False\n-1\n` | False then -1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
