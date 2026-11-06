# Problem 07, Read then a closing line (language-independent design)

**Sub-skill:** a read value framed by surrounding fixed output.
**Difficulty:** 1

## Statement (student-facing)
Prompt `What is your name?` on its own line and read the name. Print the name, then print a fixed closing
line: `Welcome aboard.`

## I/O contract
- **Input:** one line (a name).
- **Output:** the prompt, then the name, then `Welcome aboard.`

## Why it resists a trivial answer
The name varies, so it must be read and printed; the fixed closing line must also appear, in order. A small
step toward building a complete piece of output around input.
