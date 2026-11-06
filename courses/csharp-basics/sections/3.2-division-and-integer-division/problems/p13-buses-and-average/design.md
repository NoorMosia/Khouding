# Problem 13, Buses and average (language-independent design)

**Sub-skill:** integrative capstone; choose integer division for one result and decimal for another in the
same program.

**Difficulty:** 3

## Statement (student-facing)
A group of passengers is assigned to buses. Read the number of passengers and the number of buses (each
prompted on its own line, each a whole number). Print two lines:
1. the passengers per bus as a whole number of complete seats filled per bus: `passengers / buses` (integer).
2. the average passengers per bus as a decimal: `(double)passengers / buses`.

## I/O contract
- **Input:** two lines, each a whole number: passengers, then buses.
- **Output:** the two prompts, then the integer result, then the decimal average, each on its own line.

## Why it resists a trivial answer
The two lines need different kinds of division from the same inputs: integer for the whole count, decimal for
the average. A student who uses one kind for both fails one line. Values are chosen so the decimal average
prints cleanly.
