# Problem 10, Account lock (language-independent design)

**Sub-skill:** integrative capstone; an unconditional line plus one guarded line from read values.
**Difficulty:** 3

## Statement (student-facing)
Read the number of attempts and the limit (each prompted on its own line). Always print `Attempts recorded`.
Then, only if the attempts are over the limit, also print `account locked`.

## I/O contract
- **Input:** two lines, each a whole number: attempts, then limit.
- **Output:** the two prompts, then `Attempts recorded` every time, then `account locked` only when
  `attempts > limit`.

## Why it resists a trivial answer
`Attempts recorded` is unconditional (outside the `if`); `account locked` is guarded (inside). Equal is not
over (`>` strict, so attempts equal to the limit does not lock), and the over/under cases pin the guard. A
student who guards the first line or drops the strictness fails.
