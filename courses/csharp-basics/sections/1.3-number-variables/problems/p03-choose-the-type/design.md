# Problem 03, Choose the type (language-independent design)

**Sub-skill:** choose `int` vs `double` for a described value.
**Difficulty:** 1

## Statement (student-facing)
For each described value below, decide whether you would store it in an `int` or a `double`. Print one type
name per line, in order:

1. the number of students in a class
2. a person's height in metres
3. the price of a coffee
4. the number of days in a week

Print exactly:

```
int
double
double
int
```

## I/O contract
- **Input:** none.
- **Output:** four lines, the chosen type for each value in order.

## Why this problem (grading note)
This tests the *decision*, not syntax, so it is a fixed-output problem (no input). Deciding the type from a
value at runtime would need logic beyond this section, so the choice is made by the student while reading.
The one justified fixed-output problem in an otherwise input-driven family.
