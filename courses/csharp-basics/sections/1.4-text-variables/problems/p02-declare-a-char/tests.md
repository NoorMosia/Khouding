# Hidden tests, p02-declare-a-char

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `A` | `A\n` | uppercase letter |
| t2 | `z` | `z\n` | lowercase letter |
| t3 | `7` | `7\n` | a digit as a char |
| t4 | `?` | `?\n` | punctuation |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
