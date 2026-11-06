# Hidden tests, p04-area-overloads

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n3\n5` | `Enter side, width, height:\n16\n15\n` | 16 then 15 |
| t2 | `1\n1\n1` | `Enter side, width, height:\n1\n1\n` | 1 then 1 |
| t3 | `0\n6\n7` | `Enter side, width, height:\n0\n42\n` | 0 then 42 |
| t4 | `10\n2\n9` | `Enter side, width, height:\n100\n18\n` | 100 then 18 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
