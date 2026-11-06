# Hidden tests, p06-from-index

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello\n2` | `llo\n` | llo |
| t2 | `hello\n0` | `hello\n` | whole: hello |
| t3 | `hello\n5` | `\n` | edge - from end: empty |
| t4 | `programming\n7` | `ming\n` | ming |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
