# Hidden tests, p08-trim-show

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `  hello  ` | `[hello]\n` | [hello] |
| t2 | `  leading` | `[leading]\n` | [leading] |
| t3 | `trailing  ` | `[trailing]\n` | [trailing] |
| t4 | `clean` | `[clean]\n` | [clean] |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
