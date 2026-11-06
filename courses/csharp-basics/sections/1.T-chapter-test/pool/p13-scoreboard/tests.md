# Hidden tests, p13-scoreboard

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `SCOREBOARD\n\nLions	2\nBears	3\nTotal goals:	5\n` | no-input; heading + blank line + tab-aligned rows + computed total |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
