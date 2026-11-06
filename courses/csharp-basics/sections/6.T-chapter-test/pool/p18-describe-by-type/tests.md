# Hidden tests, p18-describe-by-type

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\nhi` | `Enter a number and a word:\nnumber: 5\ntext: hi\n` | number: 5 / text: hi |
| t2 | `0\nok` | `Enter a number and a word:\nnumber: 0\ntext: ok\n` | number: 0 / text: ok |
| t3 | `-3\nyes` | `Enter a number and a word:\nnumber: -3\ntext: yes\n` | number: -3 / text: yes |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
