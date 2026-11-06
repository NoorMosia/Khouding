# Hidden tests, p18-file-with-word

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `cat` | `the cat sat on the mat\na cat chased a bird\n` | two lines |
| t2 | `the` | `the cat sat on the mat\nthe dog ran in the park\nbirds flew over the lake\n` | four lines |
| t3 | `zebra` | `` | no match: nothing |
| t4 | `park` | `the dog ran in the park\n` | one line |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
