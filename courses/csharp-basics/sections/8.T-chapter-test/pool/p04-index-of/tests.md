# Hidden tests, p04-index-of

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world\nhello` | `0\n` | 0 |
| t2 | `hello world\nworld` | `6\n` | 6 |
| t3 | `hello world\nxyz` | `-1\n` | -1 |
| t4 | `abcabc\nabc` | `0\n` | first: 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
