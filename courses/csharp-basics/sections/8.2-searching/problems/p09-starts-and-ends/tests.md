# Hidden tests, p09-starts-and-ends

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `report.txt\nrep\n.txt` | `True\n` | both: True |
| t2 | `report.txt\nrep\n.csv` | `False\n` | prefix ok, suffix no: False |
| t3 | `report.txt\nlog\n.txt` | `False\n` | prefix no: False |
| t4 | `report.txt\nlog\n.csv` | `False\n` | neither: False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
