# Problem 12, Model the scenario (language-independent design)

**Sub-skill:** integrative: choose text types, use a `const string`, a `string`, and a `char`, print to spec.
**Difficulty:** 3

## Statement (student-facing)
A user profile has a fixed heading, a username, and a single-character tier code. Declare a `const string`
heading holding `Profile`. Read the username on the first line (it may contain spaces) into a `string`.
Read the tier code on the second line (one character) into a `char`.

Print three lines: the heading, then the username, then the tier code.

## I/O contract
- **Input:** two lines: the username, then a one-character tier code.
- **Output:** three lines: `Profile`, the username, the tier code.

## Why it resists a trivial answer
Pulls the section together: a `const string` for the fixed heading, a `string` for the free-text username
(which can contain spaces), and a `char` for the single-character tier. Varied cases only pass if each type
is chosen and read correctly. (Each value prints on its own line; joining them is a later section.)
