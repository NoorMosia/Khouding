# Problem 07, A const label (language-independent design)

**Sub-skill:** `const` works for text too (`const string`).
**Difficulty:** 2

## Statement (student-facing)
Declare a `const string` holding the fixed label `Name:`. Read a name from input. Print the label on its
own line, then the name on its own line:

```
Name:
<the name you read>
```

## I/O contract
- **Input:** one line, a name.
- **Output:** two lines: the fixed label `Name:`, then the name.

## Why it resists a trivial answer
The label is fixed, but the name varies per case, so the second line can only be right if the program reads
and prints the input. The label is a `const string`: fixed text that should not change. (Print the two on
separate lines; joining them into one is a later section.)
