# Hidden tests, p05-reassign-a-string

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `draft\npublished` | `published\n` | normal; draft overwritten by published |
| t2 | `yes\nno` | `no\n` | short words |
| t3 | `first\nfirst` | `first\n` | reassigned to the same value |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
