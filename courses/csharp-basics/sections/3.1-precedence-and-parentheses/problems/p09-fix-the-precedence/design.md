# Problem 09, Fix the precedence (language-independent design)

**Sub-skill:** debug a missing-parentheses precedence bug.
**Difficulty:** 2

## Statement (student-facing)
Each person pays the base price plus an extra amount, and there are several people, so the total is
`(base price + extra) * people`. The starter is missing the parentheses, so it computes
`base price + extra * people` and prints the wrong total. Add the parentheses so it computes the right total.

## I/O contract
- **Input:** three lines, each a whole number: base price, extra per person, number of people.
- **Output:** the three prompts, then the correct total on its own line.

## The planted bug
Without parentheses, `*` binds before `+`, so `basePrice + extra * people` multiplies only `extra` by
`people`. The program compiles and runs with no error; it just prints the wrong number. The fix is
`(basePrice + extra) * people`.

## Why it resists a trivial answer
There is no compiler message to chase; the starter silently computes the wrong value. The varied inputs make
the buggy and correct results differ on every case, so only the correctly parenthesized formula passes.
