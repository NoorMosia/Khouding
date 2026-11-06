# Pool p13, Shipping cost (family C, combining & nesting)

**Integrates:** 4.5 with Chapter 3 arithmetic inside branches.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter weight and zone:` on its own line. Read a weight (line 1) and a zone (line 2). The base cost is
5 when the weight is 5 or less, otherwise 10. Add 3 to the cost when the zone is not 1. Print the final cost.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then the cost as a whole number.

## Why it resists a trivial answer
The cost is computed from two factors: a weight band and a zone surcharge. Cases reach each weight band and
each zone plus the weight edge at 5, so a dropped branch or a wrong base fails.
