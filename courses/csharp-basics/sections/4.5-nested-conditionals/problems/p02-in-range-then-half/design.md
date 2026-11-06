# Problem 02, In range, which half (language-independent design)

**Sub-skill:** nest only inside the in-range branch; the out case is the outer else.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read a whole number. If it is in the range 1 to 100 inclusive,
print `low half` when it is 50 or less, otherwise `high half`. If it is outside 1 to 100, print `out`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `low half`, `high half`, `out`.

## Why it resists a trivial answer
The half split only happens inside the range. Cases hit both halves, the midpoint edge at 50, and the out
branch on each side, so each leaf is exercised.
