# Hidden tests, p08-type-resolution

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7\n1` | `Enter a number and a flag (0 or 1):\nint 7\nbool True\n` | int 7 / bool True |
| t2 | `0\n0` | `Enter a number and a flag (0 or 1):\nint 0\nbool False\n` | int 0 / bool False |
| t3 | `-3\n1` | `Enter a number and a flag (0 or 1):\nint -3\nbool True\n` | int -3 / bool True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
