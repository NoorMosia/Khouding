# Hidden tests, p10-checkerboard

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n3` | `Enter rows and cols:\n#.#\n.#.\n#.#\n` | #.#/.#./#.# |
| t2 | `1\n4` | `Enter rows and cols:\n#.#.\n` | one row #.#. |
| t3 | `4\n1` | `Enter rows and cols:\n#\n.\n#\n.\n` | one column #/./#/. |
| t4 | `2\n3` | `Enter rows and cols:\n#.#\n.#.\n` | #.#/.#. |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
