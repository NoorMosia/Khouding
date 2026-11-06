# Hidden tests, p06-length-then-middle

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `5\nl\n` | len 5, middle index 2 -> l |
| t2 | `test` | `4\ns\n` | len 4, middle index 2 -> s |
| t3 | `a` | `1\na\n` | edge - len 1, index 0 -> a |
| t4 | `abcdef` | `6\nd\n` | len 6, index 3 -> d |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
