# Problem 03, Greet by name (language-independent design)

**Sub-skill:** a `string` parameter.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `Greet` that takes one `string` parameter `name` and prints `Hello, ` followed
by the name and a `!` (for example `Hello, Ada!`). In `Main`, prompt `Enter a name:` on its own line, read the
name, and pass it to `Greet`.

## I/O contract
- **Input:** one line of text (the name).
- **Output:** the prompt, then `Hello, <name>!`.

## Why it resists a trivial answer
The greeting embeds the argument. Cases use different names, so a hardcoded greeting fails.

## Note
Build the greeting with interpolation or `+`, for example `$"Hello, {name}!"`.
