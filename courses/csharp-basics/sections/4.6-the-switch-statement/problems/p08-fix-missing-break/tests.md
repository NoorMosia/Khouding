# Hidden tests, p08-fix-missing-break

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1` | `Enter a size code (1-3):\nsmall\n` | small |
| t2 | `2` | `Enter a size code (1-3):\nmedium\n` | medium |
| t3 | `3` | `Enter a size code (1-3):\nlarge\n` | large |
| t4 | `4` | `Enter a size code (1-3):\nunknown\n` | unknown size (default) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
