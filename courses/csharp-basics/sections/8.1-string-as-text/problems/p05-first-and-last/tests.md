# Hidden tests, p05-first-and-last

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `h\no\n` | h then o |
| t2 | `x` | `x\nx\n` | edge - single char: x then x |
| t3 | `program` | `p\nm\n` | p then m |
| t4 | `ab` | `a\nb\n` | a then b |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
