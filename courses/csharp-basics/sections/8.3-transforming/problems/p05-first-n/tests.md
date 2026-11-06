# Hidden tests, p05-first-n

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello\n3` | `hel\n` | hel |
| t2 | `hello\n5` | `hello\n` | full: hello |
| t3 | `hello\n0` | `\n` | edge - 0 chars: empty |
| t4 | `programming\n4` | `prog\n` | prog |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
