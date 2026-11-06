# Hidden tests, p12-capitalise-first

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `Hello\n` | Hello |
| t2 | `world` | `World\n` | World |
| t3 | `already` | `Already\n` | Already |
| t4 | `a` | `A\n` | edge - single char: A |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
