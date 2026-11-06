# Hidden tests, p05-starts-ends

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `report.txt\nrep\n.txt` | `True\n` | True |
| t2 | `report.txt\nrep\n.csv` | `False\n` | False |
| t3 | `report.txt\nlog\n.txt` | `False\n` | False |
| t4 | `hello\nhello\nhello` | `True\n` | whole string: True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
