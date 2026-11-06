# Hidden tests, p05-reverse-two-lines

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `one\ntwo` | `Enter the first word:\nEnter the second word:\ntwo\none\n` | normal |
| t2 | `red\nblue` | `Enter the first word:\nEnter the second word:\nblue\nred\n` | colours |
| t3 | `start\nfinish` | `Enter the first word:\nEnter the second word:\nfinish\nstart\n` | another pair |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
