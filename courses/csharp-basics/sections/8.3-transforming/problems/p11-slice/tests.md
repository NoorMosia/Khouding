# Hidden tests, p11-slice

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world\n3\n5` | `lo wo\n` | lo wo |
| t2 | `programming\n0\n4` | `prog\n` | prog |
| t3 | `abcdef\n2\n3` | `cde\n` | cde |
| t4 | `hello\n1\n3` | `ell\n` | ell |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
