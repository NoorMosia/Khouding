# Hidden tests, p08-index-of-char

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello\nl` | `2\n` | first l at 2 |
| t2 | `hello\nh` | `0\n` | at 0 |
| t3 | `hello\nz` | `-1\n` | absent: -1 |
| t4 | `banana\na` | `1\n` | first a at 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
