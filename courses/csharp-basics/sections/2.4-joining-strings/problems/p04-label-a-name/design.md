# Problem 04, Label a name (language-independent design)

**Sub-skill:** join a literal label to a read value with `+` for output.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter your name:` on its own line and read it. Using `+`, print the label `Name: ` joined to the name.

## I/O contract
- **Input:** one line holding a name.
- **Output:** the prompt, then `Name: <name>` on its own line.

## Why it resists a trivial answer
The name varies, so the value must be joined in. The label includes a trailing space, so the join has to
preserve it.
