# Hidden tests, p07-yes-no

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world\nworld` | `yes\n` | yes |
| t2 | `hello world\nmars` | `no\n` | no |
| t3 | `abc\na` | `yes\n` | yes |
| t4 | `abc\nd` | `no\n` | no |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
