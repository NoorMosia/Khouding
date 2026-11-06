# Exercises draft, 7.1 Declaring and accessing arrays

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Create a fixed-size collection of one type and read or write its elements by index.

## Size & completion
- **10 problems**, lights at **6** (~60%). Moderate (first arrays, no iteration yet beyond single accesses).

## Scope (READ FIRST)
- **IN:** `int[] a = new int[n]` (n slots, default 0); the literal form `int[] a = { 10, 20, 30 };`; zero-based
  indexing `a[0]`; assigning `a[2] = 7;`; `a.Length`; valid indices `0..Length-1`. `IndexOutOfRangeException`
  NAMED (going outside throws) without building a throwing problem. Element types kept simple (`int[]`,
  sometimes `string[]`).
- **OUT:** iteration/loops over the array (7.2); operations like sum/max (7.3); arrays as method params (7.4);
  2D (7.5); `List<T>` and resizing (Ch.9); library methods (`.Sort()` etc.). No jagged arrays.

## Grading approach
- `stdout-match`, input via stdin. **Motivation-first reading** (standing style): show separate variables,
  then the array as the fix. Vary the size and the accessed index across cases (incl. length 1). Every
  committed solution stays IN BOUNDS. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | make an array of a read size n, print a.Length | new int[n] + Length | ● |
| p02 | build a 3-element array from the literal form, print a[1] | literal + index | ● |
| p03 | read 3 numbers into an array, print a chosen index | fill + index read | ●● |
| p04 | assign one element then print the whole-slot values individually | assign by index | ●● |
| p05 | print the first and last element (a[0], a[Length-1]) | first/last | ●● |
| p06 | read a size n and an index i, print the default value at a[i] (0) | default value | ●● |
| p07 | overwrite a[i] with a read value, print before/after that slot | write then read | ●● |
| p08 | swap two elements by index (via a temp) and print them | index swap | ●● |
| p09 | model a small fixed record as a string[] (set + read fields) | string[] fields | ●● |
| p10 | fix a bug: reads a[Length] (off-by-one) -> use a[Length-1] | debug: bounds | ●● |

**Escalation:** p01-p02 create + length + literal; p03-p05 fill and read specific indices (incl. first/last);
p06-p08 defaults, write-then-read, swap; p09 a string[] record; p10 the off-by-one bounds fix.

## Per-problem intent (bones)
- **p01** read n, `int[] a = new int[n];` print `a.Length` (equals n).
- **p02** `int[] a = { 10, 20, 30 };` print `a[1]` (20).
- **p03** read 3 numbers into `a[0..2]`, read an index (0-2), print `a[index]`.
- **p04** set `a[0]`, `a[1]`, `a[2]` from reads; print each on its own line.
- **p05** read 4 numbers into an array; print `a[0]` then `a[a.Length-1]`.
- **p06** read n (>=1) and i (in range); a fresh `int[n]`; print `a[i]` (0, the default).
- **p07** build an array, read i and a value, print `a[i]` (old), assign, print `a[i]` (new).
- **p08** read 2 numbers into a[0], a[1]; swap via temp; print a[0] then a[1].
- **p09** `string[] person = new string[2];` set name/role from reads; print them.
- **p10** starter prints `a[a.Length]` (throws / off-by-one); fix to `a[a.Length-1]`. (Author so the FIX is a
  clean in-bounds access; never commit a throwing solution.)

## Notes
- **Stay IN BOUNDS in every solution.** `IndexOutOfRangeException` is NAMED in the reading, never fed as a
  committed case. p10 is a fix-to-correct-bounds, not a throwing demo.
- **Zero-based indexing** is the recurring trap; the first element is `a[0]`, the last is `a[a.Length-1]`.
- Vary size/index across cases (incl. length 1). Country-neutral. Terse statements. Prompts on their own line.
