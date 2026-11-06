# Hidden tests, p08-two-factor-gate

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `30\n1` | `Enter age and membership (0 or 1):\nin\n` | adult and member -> in |
| t2 | `30\n0` | `Enter age and membership (0 or 1):\nout\n` | adult but not member -> out |
| t3 | `16\n1` | `Enter age and membership (0 or 1):\nout\n` | member but underage -> out |
| t4 | `16\n0` | `Enter age and membership (0 or 1):\nout\n` | neither -> out |
| t5 | `18\n1` | `Enter age and membership (0 or 1):\nin\n` | age edge, inclusive, and member -> in |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
