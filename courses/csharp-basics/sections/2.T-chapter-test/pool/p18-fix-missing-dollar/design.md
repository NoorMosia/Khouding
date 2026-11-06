# Pool p18, Fix the missing dollar sign (family E, fix the broken program)

**Integrates:** 2.1 (read), 2.3 (interpolation), debug.
**Difficulty:** 2

## Statement (student-facing)
This program should greet the user by name, but it prints `Hello, {name}` with the braces showing. The string
is missing its `$` prefix, so it is not interpolated. Add the `$`.

## I/O contract
- **Input:** one line holding a name.
- **Output:** the prompt, then `Hello, <name>` on its own line.

## The planted bug
`Console.WriteLine("Hello, {name}")` has no `$`, so C# treats it as ordinary text and prints the braces
literally. It compiles and runs with no error, a silent wrong-output bug. The fix is `$"Hello, {name}"`.

## Why it resists a trivial answer
The starter prints the same literal `Hello, {name}` for every input, so it fails every varied case. Only the
interpolated version passes.
