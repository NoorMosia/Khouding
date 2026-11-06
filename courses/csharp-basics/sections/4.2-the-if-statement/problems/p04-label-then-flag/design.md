# Problem 04, Label then flag (language-independent design)

**Sub-skill:** what is inside the `if` versus outside it.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the balance:` on its own line and read it. Always print `Checked`. Then, only if the balance is
below 0, also print `overdrawn`.

## I/O contract
- **Input:** one line, a whole number (the balance).
- **Output:** the prompt, then `Checked` every time, then `overdrawn` only when `balance < 0`.

## Why it resists a trivial answer
`Checked` sits outside the `if` and prints on every case; `overdrawn` sits inside and only prints when the
condition holds. A student who puts `Checked` inside the `if` fails the skip cases (where it should still
print), and the zero case (not `< 0`) confirms the strict comparison.
