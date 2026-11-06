# Hidden tests, p06-at-least-one-attempt

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter attempts:\n5\n` | 5 attempts |
| t2 | `1` | `Enter attempts:\n1\n` | 1 attempt |
| t3 | `0` | `Enter attempts:\n1\n` | zero requested, but at least one made -> 1 |
| t4 | `-3` | `Enter attempts:\n1\n` | negative requested -> still 1 |
| t5 | `3` | `Enter attempts:\n3\n` | 3 attempts |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
