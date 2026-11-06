# Hidden tests, p09-replace

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world\nworld\nthere` | `hello there\n` | hello there |
| t2 | `aabbaa\naa\nx` | `xbbx\n` | xbbx |
| t3 | `hello\nz\ny` | `hello\n` | absent: hello |
| t4 | `a b c\n \n-` | `a-b-c\n` | a-b-c |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
