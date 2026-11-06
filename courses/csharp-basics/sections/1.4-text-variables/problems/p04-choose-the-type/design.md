# Problem 04, Choose the type (language-independent design)

**Sub-skill:** choose `string` vs `char` for a described value.
**Difficulty:** 1

## Statement (student-facing)
For each described value, decide whether you would store it in a `string` or a `char`. Print one type name
per line, in order:

1. a person's middle initial
2. a surname
3. a letter grade (like A or B)
4. a full sentence

Print exactly:

```
char
string
char
string
```

## I/O contract
- **Input:** none.
- **Output:** four lines, the chosen type for each value in order.

## Why this problem (grading note)
This tests the *decision*, so it is a fixed-output problem (no input), same shape as 1.3's choose-the-type.
One character means `char`; a run of characters means `string`.
