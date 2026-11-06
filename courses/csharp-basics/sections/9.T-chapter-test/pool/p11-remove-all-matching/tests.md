# Hidden tests, p11-remove-all-matching

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n1\n2\n2\n3\n2\n2` | `1\n3\n` | 1 3 |
| t2 | `3\n1\n2\n3\n9` | `1\n2\n3\n` | 1 2 3 |
| t3 | `4\n5\n5\n5\n5\n5` | `` | nothing |
| t4 | `3\n1\n2\n1\n1` | `2\n` | 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
