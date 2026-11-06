# Hidden tests, p04-read-two-lines

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\nLovelace` | `Enter your first name:\nEnter your last name:\nAda\nLovelace\n` | two names |
| t2 | `Grace\nHopper` | `Enter your first name:\nEnter your last name:\nGrace\nHopper\n` | different names |
| t3 | `Al\nKhwarizmi` | `Enter your first name:\nEnter your last name:\nAl\nKhwarizmi\n` | another pair |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
