# Hidden tests, p04-lines-with-word

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `cat` | `the cat sat on the mat\na cat chased a dog\n` | two cat lines |
| t2 | `park` | `the dog ran in the park\nbirds flew over the park\n` | two park lines |
| t3 | `the` | `the cat sat on the mat\nthe dog ran in the park\nbirds flew over the park\n` | four lines with 'the' |
| t4 | `zebra` | `` | no match: nothing |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
