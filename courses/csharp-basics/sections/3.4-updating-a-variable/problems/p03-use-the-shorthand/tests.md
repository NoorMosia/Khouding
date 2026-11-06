# Hidden tests, p03-use-the-shorthand

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n4` | `Enter x:\nEnter y:\n14\n` | 14 |
| t2 | `0\n0` | `Enter x:\nEnter y:\n0\n` | 0 |
| t3 | `-5\n5` | `Enter x:\nEnter y:\n0\n` | 0 |
| t4 | `100\n23` | `Enter x:\nEnter y:\n123\n` | 123 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
