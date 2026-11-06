# Problem 09, Adjust the score (language-independent design)

**Sub-skill:** integrative capstone; a variable updated across several steps with the compound family.
**Difficulty:** 3

## Statement (student-facing)
Read a starting score, a bonus, a penalty, and a multiplier (each prompted on its own line). Update the score
in this order: add the bonus (`+=`), subtract the penalty (`-=`), then multiply by the multiplier (`*=`).
Print the final score.

## I/O contract
- **Input:** four lines, each a whole number: starting score, bonus, penalty, multiplier.
- **Output:** the four prompts, then the final score on its own line.

## Why it resists a trivial answer
The order of updates matters: `((score + bonus) - penalty) * multiplier`. The times-zero case and a case that
lands on zero mid-way defeat a copied literal, and all four inputs vary, so the student must apply each update
in sequence.
