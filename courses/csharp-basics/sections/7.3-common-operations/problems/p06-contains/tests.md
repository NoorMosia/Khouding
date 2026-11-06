# Hidden tests, p06-contains

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n10\n20\n30\n40\n30` | `True\n` | present: True |
| t2 | `3\n1\n2\n3\n9` | `False\n` | absent: False |
| t3 | `0\n5` | `False\n` | edge - length 0: False |
| t4 | `1\n7\n7` | `True\n` | single element matches: True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
