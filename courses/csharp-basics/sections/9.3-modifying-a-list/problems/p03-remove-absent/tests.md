# Hidden tests, p03-remove-absent

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n1\n2\n3\n9` | `False\n3\n` | False then 3 |
| t2 | `3\n1\n2\n3\n2` | `True\n2\n` | True then 2 (present case for contrast) |
| t3 | `0\n5` | `False\n0\n` | False then 0 (empty list) |
| t4 | `2\n7\n8\n0` | `False\n2\n` | False then 2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
