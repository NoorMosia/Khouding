# Problem 04, Direction code (language-independent design)

**Sub-skill:** a code-to-word lookup with a string `switch`.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a direction code (N, E, S, W):` on its own line and read the code as text. Print the full word:
`N` is `North`, `E` is `East`, `S` is `South`, `W` is `West`. For any other code print `unknown`.

## I/O contract
- **Input:** one line of text.
- **Output:** the prompt, then one of `North`, `East`, `South`, `West`, `unknown`.

## Why it resists a trivial answer
Cases hit all four codes and an unmatched code that must reach `default`, so a switch missing a case or the
default fails.
