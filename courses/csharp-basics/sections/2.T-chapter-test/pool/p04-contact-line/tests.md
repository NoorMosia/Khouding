# Hidden tests, p04-contact-line

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\nada@example.org` | `Enter the name:\nEnter the email:\nAda can be reached at ada@example.org\n` | typical |
| t2 | `Grace\ngrace@example.org` | `Enter the name:\nEnter the email:\nGrace can be reached at grace@example.org\n` | different values |
| t3 | `Al\nal@example.org` | `Enter the name:\nEnter the email:\nAl can be reached at al@example.org\n` | short name |
| t4 | `Mary Jones\nmj@example.org` | `Enter the name:\nEnter the email:\nMary Jones can be reached at mj@example.org\n` | name with a space |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
