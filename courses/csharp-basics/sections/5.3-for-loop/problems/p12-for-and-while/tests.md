# Hidden tests, p12-for-and-while

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3` | `Enter a count:\n1\n2\n3\n---\n1\n2\n3\n` | 1 2 3 / --- / 1 2 3 |
| t2 | `1` | `Enter a count:\n1\n---\n1\n` | 1 / --- / 1 |
| t3 | `0` | `Enter a count:\n---\n` | empty / --- / empty -> just the --- line |
| t4 | `4` | `Enter a count:\n1\n2\n3\n4\n---\n1\n2\n3\n4\n` | 1..4 twice around --- |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
