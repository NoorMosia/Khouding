# Problem 07, Clean up the layout (language-independent design)

**Sub-skill:** formatting for readability (and reading a crammed program well enough to fix it).
**Difficulty:** 2

## Statement (student-facing)
This program is crammed onto two lines and does not compile (a statement is missing its semicolon). Fix it
so it compiles, and lay it out cleanly: one statement per line, the body of each block indented one step.
It should print:

```
5
```

## The planted bug
Everything is jammed together, and the `int sum = a + b` line is missing its closing semicolon. Reading the
mess is exactly why clean layout matters.

## Why it resists a trivial answer
The starter does not compile (missing semicolon), so it fails until fixed. The exact-output grade confirms
the fix. Indentation itself does not change output, so the *layout* judgment is reinforced in the quiz, but
the compile fix forces the student to read and untangle the crammed code first.
