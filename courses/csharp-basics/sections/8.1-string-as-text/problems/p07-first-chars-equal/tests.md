# Hidden tests, p07-first-chars-equal

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `apple\nant` | `True\n` | both a: True |
| t2 | `apple\nbanana` | `False\n` | a vs b: False |
| t3 | `Ace\nace` | `False\n` | A vs a: False (case matters) |
| t4 | `x\nxylophone` | `True\n` | both x: True |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
