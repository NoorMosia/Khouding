# Hidden tests, p13-first-and-last-n

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world\n3` | `hel\nrld\n` | hel then rld |
| t2 | `programming\n4` | `prog\nming\n` | prog then ming |
| t3 | `abcdef\n2` | `ab\nef\n` | ab then ef |
| t4 | `hello\n1` | `h\no\n` | h then o |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
