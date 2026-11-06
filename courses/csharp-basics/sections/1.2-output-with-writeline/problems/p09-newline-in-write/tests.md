# Hidden tests, p09-newline-in-write

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `First\nSecond` | no-input; two lines from one Write via \n |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
