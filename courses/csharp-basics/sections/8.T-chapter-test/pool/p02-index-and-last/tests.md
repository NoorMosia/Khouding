# Hidden tests, p02-index-and-last

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello\n2` | `l\no\n` | l then o |
| t2 | `hello\n0` | `h\no\n` | h then o |
| t3 | `abcdef\n3` | `d\nf\n` | d then f |
| t4 | `x\n0` | `x\nx\n` | single char: x then x |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
