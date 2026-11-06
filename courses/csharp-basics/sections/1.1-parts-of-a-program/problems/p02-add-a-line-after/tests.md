# Hidden tests, p02-add-a-line-after

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `Good morning.\nHave a great day.\n` | no-input; second line appended after the existing one |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
