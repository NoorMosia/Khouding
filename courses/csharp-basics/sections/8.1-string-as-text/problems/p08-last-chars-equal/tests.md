# Hidden tests, p08-last-chars-equal

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `cats\ndogs` | `True\n` | both s: True |
| t2 | `cat\ndog` | `False\n` | t vs g: False |
| t3 | `go\nyo` | `True\n` | both o: True |
| t4 | `a\nbcd` | `False\n` | a vs d: False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
