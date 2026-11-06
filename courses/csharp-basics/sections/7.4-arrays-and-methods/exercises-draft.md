# Exercises draft, 7.4 Arrays and methods

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Pass an array to a method; because an array is a reference, the method can change its elements and the caller
sees it.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section.

## Scope (READ FIRST)
- **IN:** an array parameter `static void Double(int[] a)`; calling `Double(nums)`; the method's parameter and
  the caller's variable refer to the **same** array, so mutating an element is visible after the call. **The
  deliberate contrast with 6.4:** a plain `int` is copied (caller unchanged), an array is shared by reference
  (caller changed), shown side by side. A method can **return an array** it builds. Methods that compute over
  an array (sum, max) take `int[]` and return a value (ties to 7.3). **Light subtlety:** reassigning the
  parameter to a `new` array does NOT affect the caller (only element changes do); NAMED, not drilled.
- **OUT:** 2D (7.5); `ref`/`out` (out of course); `List<T>` (Ch.9); jagged arrays. Methods stay `static`;
  `Main` drives I/O.

## Grading approach
- `stdout-match`, input via stdin. The reference observable is the point: a method mutates the array, `Main`
  prints the changed array. **Vary contents/length (incl. 0 and 1).** Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | a method that sums an int[] and returns the total; Main prints it | array param + return value | ● |
| p02 | a method that returns the max of an int[] | compute over array param | ●● |
| p03 | a method that doubles every element; Main prints the changed array | the reference observable | ●● |
| p04 | a method that adds a read amount to every element (in place) | mutate via reference | ●● |
| p05 | the value-vs-reference contrast: an int param unchanged, an int[] changed | the 6.4 contrast | ●●● |
| p06 | build-and-return an array of 1..n | return an array | ●● |
| p07 | a method that fills an array with a read value and returns it | create + return | ●● |
| p08 | a method counting elements over a threshold (array + int params) | array + scalar params | ●● |
| p09 | a method that returns a NEW array of each element doubled (caller's unchanged) | return new vs mutate | ●●● |
| p10 | a method that reverses an array in place; Main prints it | in-place mutation | ●●● |
| p11 | fix a bug: method meant to change the array reassigns the parameter instead | debug: reassign vs mutate | ●●● |
| p12 | model a scenario: Main reads an array, methods compute + transform, prints | integrative capstone | ●●● |

**Escalation:** p01-p02 array-in, value-out (safe, ties to 7.3); p03-p05 the reference observable and the
value-vs-reference contrast; p06-p07 returning/creating arrays; p08 mixed params; p09-p10 new-vs-mutate and
in-place reverse; p11 the reassign-vs-mutate bug; p12 capstone.

## Per-problem intent (bones)
- **p01** `static int Sum(int[] a)` returns the total; `Main` reads, calls, prints.
- **p02** `static int Max(int[] a)` returns the max (seed from a[0]); n >= 1.
- **p03** `static void DoubleAll(int[] a)` does `a[i] *= 2`; `Main` prints the array after the call (changed).
- **p04** `static void AddAll(int[] a, int amount)`; mutate each; print after.
- **p05** two methods: `Bump(int x)` (x++ inside, caller's int unchanged) and `Bump(int[] a)` (a[0]++ inside,
  caller's array changed); print both results to show the contrast.
- **p06** `static int[] Range(int n)` returns `{1,2,...,n}`; Main prints it.
- **p07** `static int[] Filled(int n, int v)` returns an n-array of v; Main prints it.
- **p08** `static int CountOver(int[] a, int t)` returns the count; Main prints it.
- **p09** `static int[] Doubled(int[] a)` returns a NEW array (original unchanged); print both the returned
  array and the original (unchanged) to show the difference from p03.
- **p10** `static void Reverse(int[] a)` reverses in place (swap ends inward); Main prints after.
- **p11** starter's method does `a = new int[...]` / reassigns the parameter, so the caller sees no change;
  fix to mutate elements of the passed array. (Confirm the observable: caller unchanged in the buggy version.)
- **p12** capstone: read an array, call a compute method (sum/max) and a transform method (double in place),
  print results.

## Notes
- **The reference observable is the teaching point** and the deliberate contrast with 6.4 (by-value). p05
  shows both in one program; p09 vs p03 shows mutate-in-place vs return-a-new-array.
- **Reassigning the parameter does not affect the caller** (only element mutation does); this is exactly
  p11's bug. Name it in the reading, drill it once here.
- Vary contents/length (incl. 0 and 1). Stay in bounds. Country-neutral. Terse statements. `Main` drives I/O.
