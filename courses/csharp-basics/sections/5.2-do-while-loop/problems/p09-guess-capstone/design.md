# Problem 09, Guess capstone (language-independent design)

**Sub-skill:** integrative, a `do-while` that always reads once and counts passes until a match.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter the secret, then guesses:` on its own line. Read a secret whole number (line 1). Then, using a
`do-while`, read a guess each pass and count it, repeating while the guess does not equal the secret. Print how
many guesses were made. The input always ends with a guess equal to the secret.

## I/O contract
- **Input:** the first line is the secret; then one or more guesses, one per line, the last equal to the
  secret.
- **Output:** the prompt, then the number of guesses on one line.

## Why it resists a trivial answer
At least one guess is always read (the guaranteed pass), and the count depends on how many guesses it took.
Cases include a correct first guess (count `1`), several guesses, and repeated wrong guesses, so a plain
`while` (which would need a guess before the loop) or a miscount fails.

## Note
Because the matching guess always arrives, the loop terminates on every test. Count the guess inside the body
before testing it, so the matching guess is included in the count.
