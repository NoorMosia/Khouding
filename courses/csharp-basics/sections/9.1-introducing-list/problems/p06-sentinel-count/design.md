# Problem 06, Sentinel build count (language-independent design)

**Sub-skill:** build a list by reading until a sentinel ("stop"), print Count.
**Difficulty:** 2

## Statement (student-facing)
Read integers one per line until you read the word "stop". Add each integer to a list. Print the final count.

## I/O contract
- **Input:** one or more integers, then "stop".
- **Output:** one line, the count of integers added.

## Why it resists a trivial answer
The count depends on how many integers precede "stop". Cases vary it incl. zero values before stop.
