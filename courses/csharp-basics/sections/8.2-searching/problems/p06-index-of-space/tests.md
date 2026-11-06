# Hidden tests, p06-index-of-space

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world` | `5\n` | space at 5 |
| t2 | `nospace` | `-1\n` | no space: -1 |
| t3 | ` leading` | `0\n` | space at 0 |
| t4 | `a b c` | `1\n` | first space at 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
