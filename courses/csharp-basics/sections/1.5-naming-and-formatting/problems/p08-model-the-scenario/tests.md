# Hidden tests, p08-model-the-scenario

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Notebook\n3\n2.5` | `Notebook\n7.5\n` | normal; total 7.5 |
| t2 | `Pen\n10\n1.25` | `Pen\n12.5\n` | total 12.5 |
| t3 | `Eraser\n0\n0.99` | `Eraser\n0\n` | edge - zero quantity; total 0 |
| t4 | `Marker\n4\n2` | `Marker\n8\n` | whole price; total 8 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
