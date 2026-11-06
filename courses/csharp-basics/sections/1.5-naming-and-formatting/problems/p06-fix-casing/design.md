# Problem 06, Fix the casing convention (language-independent design)

**Sub-skill:** camelCase for locals, PascalCase for constants.
**Difficulty:** 2

## Statement (student-facing)
This program works, but its casing breaks convention: the local is in PascalCase and the `const` is in
camelCase. Fix the casing so the local is camelCase and the `const` is PascalCase. Keep the meaning; the
output must not change. It reads a number of weeks and prints the number of days.

## I/O contract
- **Input:** one line, a whole number of weeks.
- **Output:** weeks times 7.

## Why it resists a trivial answer
The output is computed from the input, so varied inputs (including zero) keep the program honest. The
casing fix does not change the result; it brings the names in line with convention. The quiz reinforces
which casing belongs to locals vs constants.

## Note
Casing alone does not affect whether the program compiles or what it prints, so the exact-output grade
confirms the program still works; the convention judgment is reinforced in the quiz. (This is a known limit
of output-only grading for style, noted in the section draft.)
