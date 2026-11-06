# Problem 07, Adult test (language-independent design)

**Sub-skill:** `>=` in a realistic setting, boundary matters.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter your age:` on its own line and read it. Print whether the person is an adult (`age >= 18`), where
18 counts as an adult.

## I/O contract
- **Input:** one line, a whole number (the age).
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
The exact-18 case is `True`; a student who used `>` would wrongly get `False` there. The varied ages pin the
boundary.
