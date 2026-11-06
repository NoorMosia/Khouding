# Hidden tests, p02-first-char

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `h\n` | h |
| t2 | `apple` | `a\n` | a |
| t3 | `z` | `z\n` | edge - single char: z |
| t4 | `Ok then` | `O\n` | O (capital) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
