# Hidden tests, p11-fix-quoting-char-to-string

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `Sam\n` | no-input; fix 'Sam' to "Sam" so a string compiles and prints Sam |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
