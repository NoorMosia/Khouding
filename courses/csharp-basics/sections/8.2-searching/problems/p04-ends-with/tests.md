# Hidden tests, p04-ends-with

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `report.txt\n.txt` | `True\n` | True |
| t2 | `report.txt\n.csv` | `False\n` | False |
| t3 | `data.TXT\n.txt` | `False\n` | case differs: False |
| t4 | `notes\nnotes` | `True\n` | whole string is a suffix: True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
