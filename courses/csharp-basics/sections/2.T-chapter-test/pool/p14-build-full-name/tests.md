# Hidden tests, p14-build-full-name

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\nLovelace` | `Enter your first name:\nEnter your last name:\nAda Lovelace\n` | typical |
| t2 | `Grace\nHopper` | `Enter your first name:\nEnter your last name:\nGrace Hopper\n` | different pair |
| t3 | `Al\nKhwarizmi` | `Enter your first name:\nEnter your last name:\nAl Khwarizmi\n` | another pair |
| t4 | `Mary\nSomerville` | `Enter your first name:\nEnter your last name:\nMary Somerville\n` | longer surname |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
