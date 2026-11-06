# Hidden tests, p09-compute-in-branch

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `0` | `Enter the quantity:\nnothing to pack\n` | zero branch -> nothing to pack |
| t2 | `10` | `Enter the quantity:\n1\n` | exactly one full box |
| t3 | `11` | `Enter the quantity:\n2\n` | partial box rounds up to 2 |
| t4 | `95` | `Enter the quantity:\n10\n` | rounds up to 10 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
