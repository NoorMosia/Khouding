# Hidden tests, p03-position

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n7\n2\n7\n9\n7` | `Enter count, target, then values:\n2\n` | first 7 at position 2 |
| t2 | `3\n5\n5\n1\n2` | `Enter count, target, then values:\n1\n` | match at position 1 |
| t3 | `3\n8\n1\n2\n3` | `Enter count, target, then values:\n0\n` | absent -> 0 |
| t4 | `4\n9\n1\n2\n3\n9` | `Enter count, target, then values:\n4\n` | match at position 4 (last) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
