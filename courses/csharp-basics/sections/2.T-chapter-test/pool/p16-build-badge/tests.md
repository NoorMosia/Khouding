# Hidden tests, p16-build-badge

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\nBlue\n12` | `Enter the name:\nEnter the team:\nEnter the seat number:\nAda, Blue, seat 12\n` | typical |
| t2 | `Grace\nRed\n1` | `Enter the name:\nEnter the team:\nEnter the seat number:\nGrace, Red, seat 1\n` | seat one |
| t3 | `Al\nGreen\n0` | `Enter the name:\nEnter the team:\nEnter the seat number:\nAl, Green, seat 0\n` | seat zero |
| t4 | `Mary Jones\nGold Team\n108` | `Enter the name:\nEnter the team:\nEnter the seat number:\nMary Jones, Gold Team, seat 108\n` | values with spaces |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
