# Problem 10, Fix the missing dollar sign (language-independent design)

**Sub-skill:** debug the signature interpolation mistake, a missing `$` prefix.
**Difficulty:** 2

## Statement (student-facing)
This program should greet the user by name, but it prints `Hello, {name}` with the braces showing instead of
the actual name. The string is missing its `$` prefix, so it is not interpolated. Add the `$` so the hole is
filled with the name that was read.

## I/O contract
- **Input:** one line holding a name.
- **Output:** the prompt, then `Hello, <name>` on its own line.

## The planted bug
`Console.WriteLine("Hello, {name}")` has no `$`, so C# treats it as ordinary text and prints the braces
literally. This compiles and runs with no error or warning; it is a silent wrong-output bug. The fix is the
`$` prefix: `$"Hello, {name}"`.

## Why it resists a trivial answer
The starter prints the same literal `Hello, {name}` for every input, so it fails every varied case. Only the
interpolated version, which fills the hole with the read name, passes.
