# Hidden tests, p02-join-two-read-words

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Hello\nthere` | `Enter the first word:\nEnter the second word:\nHello there\n` | typical |
| t2 | `good\nmorning` | `Enter the first word:\nEnter the second word:\ngood morning\n` | different words |
| t3 | `one\ntwo` | `Enter the first word:\nEnter the second word:\none two\n` | short words |
| t4 | `sea\nbreeze` | `Enter the first word:\nEnter the second word:\nsea breeze\n` | another pair |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
