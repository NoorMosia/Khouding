# Problem 07, Present, yes or no (language-independent design)

**Sub-skill:** `Contains` driving an `if`/`else`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then read a substring. Print `yes` if the line contains the substring, otherwise `no`.
Use lowercase `yes` and `no`.

## I/O contract
- **Input:** two lines: the text, then the substring.
- **Output:** one line, `yes` or `no`.

## Why it resists a trivial answer
The output depends on both inputs. Cases cover present and absent, so a fixed answer fails.

## Note
Output the exact words `yes` / `no` (lowercase), not the `bool` `True`/`False`.
