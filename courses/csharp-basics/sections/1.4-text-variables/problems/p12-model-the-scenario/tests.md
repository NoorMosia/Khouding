# Hidden tests, p12-model-the-scenario

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `ada99\nA` | `Profile\nada99\nA\n` | normal; tier A |
| t2 | `sam the cat\nB` | `Profile\nsam the cat\nB\n` | username with spaces |
| t3 | `x\nC` | `Profile\nx\nC\n` | single-char username |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
