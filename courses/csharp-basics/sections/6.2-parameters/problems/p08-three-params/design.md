# Problem 08, Three parameters (language-independent design)

**Sub-skill:** a method with three parameters.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `Report` that takes a `string label` and two `int` values `a` and `b`, and
prints the line `<label>: <a> + <b> = <sum>` (for example `sum: 4 + 6 = 10`). In `Main`, prompt
`Enter label and two numbers:` on its own line, read the label (line 1) and the two numbers (lines 2 and 3),
and call `Report`.

## I/O contract
- **Input:** line 1 the label, lines 2 and 3 whole numbers.
- **Output:** the prompt, then the formatted line.

## Why it resists a trivial answer
Three parameters combine into one formatted line that shows both the inputs and the computed sum. Cases vary
all three, so each parameter must be placed correctly.

## Note
Build the line with interpolation, for example `$"{label}: {a} + {b} = {a + b}"`.
