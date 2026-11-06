# Hidden tests, p01-length-and-first

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `5\nh\n` | 5 then h |
| t2 | `a` | `1\na\n` | single char: 1 then a |
| t3 | `Hello World` | `11\nH\n` | 11 then H |
| t4 | `programming` | `11\np\n` | 11 then p |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
