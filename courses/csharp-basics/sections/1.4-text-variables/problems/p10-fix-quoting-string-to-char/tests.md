# Hidden tests, p10-fix-quoting-string-to-char

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `A\n` | no-input; fix "A" to 'A' so a char compiles and prints A |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
