# Problem 08, Intake form (language-independent design)

**Sub-skill:** integrative (light): several prompts and reads, printed as a headed block.
**Difficulty:** 2

## Statement (student-facing)
A tiny intake form. Prompt for and read two fields: `Name:` then `Department:`. Then print a block: the
fixed header line `--- Entry ---`, then the name, then the department, each on its own line.

## I/O contract
- **Input:** two lines: name, then department.
- **Output:** the two prompts, then `--- Entry ---`, then the name, then the department.

## Why it resists a trivial answer
Combines prompting, two reads held in variables, and a fixed header framing the output. Varying inputs mean
only a program that reads and prints both correctly, in the headed block, passes. The calm close to 2.1.
