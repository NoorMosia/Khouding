# Hidden tests, p07-write-then-read

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n20\n30\n1\n99` | `20\n99\n` | overwrite middle |
| t2 | `10\n20\n30\n0\n5` | `10\n5\n` | overwrite first |
| t3 | `10\n20\n30\n2\n-7` | `30\n-7\n` | overwrite last |
| t4 | `1\n2\n3\n1\n2` | `2\n2\n` | new equals old-neighbour value |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
