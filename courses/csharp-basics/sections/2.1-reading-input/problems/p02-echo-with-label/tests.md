# Hidden tests, p02-echo-with-label

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `Enter a word:\nYou entered:\nhello\n` | a word |
| t2 | `yes` | `Enter a word:\nYou entered:\nyes\n` | short word |
| t3 | `orange` | `Enter a word:\nYou entered:\norange\n` | another word |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
