# Problem 11, Fix the row ending (language-independent design)

**Sub-skill:** fix a `Write`/`WriteLine` mistake that breaks the row structure.
**Difficulty:** 3

## Statement (student-facing)
The program should print an `n`-by-`m` block of `*`: `n` rows of `m` stars each. It currently puts every star
on its own line, because it ends the line inside the inner loop. Fix it so each row holds `m` stars and the
line ends once per row.

## The planted bug
The inner loop uses `Console.WriteLine("*")`, which ends the line after every star, so the grid collapses into
one star per line. The fix is `Console.Write("*")` inside the inner loop and a single `Console.WriteLine()`
after it.

## I/O contract
- **Input:** two lines, `n` (rows) then `m` (cols).
- **Output:** the prompt, then `n` rows of `m` stars.

## Why it resists a trivial answer
No compiler message; the row structure is wrong. Cases with `m > 1` (like 2-by-3) make the buggy output (six
separate lines) differ clearly from the correct block, so only the restructured loop passes.
