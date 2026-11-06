# Problem 09, Fix the stray semicolon (language-independent design)

**Sub-skill:** debug the stray-semicolon-after-`if` trap.
**Difficulty:** 2

## Statement (student-facing)
This program should print `big` only when the number is over 100, but it prints `big` every time. There is a
stray semicolon right after the condition. Remove it so the block is guarded.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `big` only when `n > 100`.

## The planted bug
`if (n > 100);` ends the `if` with an empty statement (the `;`), so the following `{ ... }` is an ordinary
block that always runs. The compiler warns:

```
warning CS0642: Possible mistaken empty statement
```

The fix is to delete the stray `;` so the block becomes the `if`'s body.

## Why it resists a trivial answer
The buggy starter prints `big` on every case, so it fails the skip cases (`7`, `100`). Only removing the
semicolon makes `big` conditional, matching run and skip across the varied inputs.
