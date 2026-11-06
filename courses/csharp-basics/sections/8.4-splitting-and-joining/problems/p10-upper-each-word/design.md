# Problem 10, Upper-case each word (language-independent design)

**Sub-skill:** transform each piece of the `string[]`, then join back.
**Difficulty:** 3

## Statement (student-facing)
Read a line of space-separated words. Upper-case each word and print them joined by a single space.

## I/O contract
- **Input:** one line with space-separated words.
- **Output:** one line, each word upper-cased, rejoined with a space.

## Why it resists a trivial answer
The output depends on the input content. Cases vary case and word count.

## Note
Split, apply `ToUpper()` to each element, join with `" "`. Use the returned value from `ToUpper` (store it
back into the array slot).
