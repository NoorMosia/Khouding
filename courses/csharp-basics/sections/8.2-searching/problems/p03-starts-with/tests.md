# Hidden tests, p03-starts-with

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `report.txt\nrep` | `True\n` | True |
| t2 | `report.txt\nlog` | `False\n` | False |
| t3 | `Hello\nhe` | `False\n` | case differs: False |
| t4 | `abc\nabc` | `True\n` | whole string is a prefix: True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
