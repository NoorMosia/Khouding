# Problem 03, Build a full name (language-independent design)

**Sub-skill:** the headline skill, building a new `string` from pieces and storing it in a variable.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter your first name:` on its own line and read it. Prompt `Enter your last name:` on its own line and
read it. Build a single `string` variable called `fullName` that joins the first name, a space, and the last
name. Then print `fullName`.

## I/O contract
- **Input:** two lines: a first name, then a last name.
- **Output:** the two prompts, then the full name (first, space, last) on its own line.

## Why it resists a trivial answer
The names vary per case. The task is specifically to build and store the joined string, then print the
variable, which is the dual role that sets `+` apart from interpolation-for-output.
