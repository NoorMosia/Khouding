# Hidden tests, p15-fix-type

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `Tea\n1.75\n` | no-input; fix the wrong type so it compiles and prints Tea then 1.75 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
