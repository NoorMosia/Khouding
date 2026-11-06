# Hidden tests, p04-add-a-line-at-the-end

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `Step one.\nStep two.\nStep three.\nDone.\n` | no-input; fourth line appended at the end |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
