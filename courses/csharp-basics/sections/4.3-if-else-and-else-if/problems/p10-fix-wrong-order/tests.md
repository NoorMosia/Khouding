# Hidden tests, p10-fix-wrong-order

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `95` | `Enter the score:\nhigh\n` | high (buggy loosest-first would print mid) |
| t2 | `90` | `Enter the score:\nhigh\n` | high (boundary) |
| t3 | `50` | `Enter the score:\nmid\n` | mid (boundary) |
| t4 | `20` | `Enter the score:\nlow\n` | low (final else) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
