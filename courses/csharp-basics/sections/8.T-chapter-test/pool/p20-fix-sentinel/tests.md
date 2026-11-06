# Hidden tests, p20-fix-sentinel

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world\nworld` | `found at 6\n` | found at 6 |
| t2 | `hello world\nxyz` | `not found\n` | not found |
| t3 | `abcabc\nabc` | `found at 0\n` | found at 0 |
| t4 | `test\nz` | `not found\n` | not found |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
