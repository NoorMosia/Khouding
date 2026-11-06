# Hidden tests, p03-echo-a-line

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `good morning` | `Type a message:\ngood morning\n` | a line with a space |
| t2 | `ok` | `Type a message:\nok\n` | short |
| t3 | `the quick brown fox` | `Type a message:\nthe quick brown fox\n` | several words |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
