# Hidden tests, p02-index-of

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world\nworld` | `6\n` | index 6 |
| t2 | `hello world\nhello` | `0\n` | at start: 0 |
| t3 | `hello world\nxyz` | `-1\n` | absent: -1 |
| t4 | `abcabc\nbc` | `1\n` | first occurrence: 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
