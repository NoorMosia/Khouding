# Hidden tests, p04-label-then-flag

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `-50` | `Enter the balance:\nChecked\noverdrawn\n` | Checked then overdrawn |
| t2 | `0` | `Enter the balance:\nChecked\n` | Checked only (0 is not < 0) |
| t3 | `100` | `Enter the balance:\nChecked\n` | Checked only |
| t4 | `-1` | `Enter the balance:\nChecked\noverdrawn\n` | Checked then overdrawn (just below) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
