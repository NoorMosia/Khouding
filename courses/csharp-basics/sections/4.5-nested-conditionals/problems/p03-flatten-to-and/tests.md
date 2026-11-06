# Hidden tests, p03-flatten-to-and

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1\n1` | `Enter ticket and id (0 or 1):\nenter\n` | both -> enter |
| t2 | `1\n0` | `Enter ticket and id (0 or 1):\n` | ticket only -> no output |
| t3 | `0\n1` | `Enter ticket and id (0 or 1):\n` | id only -> no output |
| t4 | `0\n0` | `Enter ticket and id (0 or 1):\n` | neither -> no output |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
