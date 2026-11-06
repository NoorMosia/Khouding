# Exercises draft, 9.5 Lists and methods

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Pass a list to a method: the method and the caller share the same list, so mutations are visible.

## Size & completion
- **10 problems**, lights at **6** (~60%). Full section (moderate: ties 7.4 and 6.4 explicitly).

## Scope (READ FIRST)
- **IN:** `static void DoSomething(List<int> list)` (a method that receives a list and mutates it; the
  caller sees the changed list, same reference behaviour as 7.4 arrays). `static List<int> Build(int n)` (a
  method that creates and returns a new list). Mixed: a method that computes a value from a list (sum, max)
  and returns it. **Reassigning the parameter** (`list = new List<int>()`) does NOT affect the caller (named,
  drilled once as the fix problem). **The consolidation beat**: plain `int` copied (Ch.6.4), array shared
  (Ch.7.4), `List<T>` shared (Ch.9.5): three versions of the same observable, same teaching shape.
- **OUT:** LINQ, `List.Sort()`, `Dictionary`, overloading on list types. `Main` drives I/O; all helpers are
  `static` in `Program`.

## Grading approach
- `stdout-match`, input via stdin. Vary list size (incl. 0 and 1). Reference observable is the point:
  methods that add/remove/change list elements, and the caller prints the result. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | a method that sums a List<int> and returns the total | list param + return value | ● |
| p02 | a method that returns the max of a List<int> (seed from list[0]) | compute over list param | ●● |
| p03 | a method that doubles every element in place; Main prints the changed list | reference observable | ●● |
| p04 | a method that removes all negatives from the list; Main prints remaining | mutation visible | ●● |
| p05 | value-vs-reference contrast: int param unchanged, list element changed | the 6.4/7.4/9.5 contrast | ●●● |
| p06 | build-and-return a List<int> of 1..n | return a list | ●● |
| p07 | a method that appends a read count of zeros to a list; caller sees additions | Add inside method | ●●● |
| p08 | a method that counts elements above a threshold (list + int params, returns int) | mixed params | ●● |
| p09 | a method returns a NEW list of each element doubled (caller original unchanged) | return new vs mutate | ●●● |
| p10 | fix a bug: method reassigns the parameter instead of mutating elements | debug: reassign vs mutate | ●●● |

**Escalation:** p01-p02 list-in, value-out (safe, ties 9.4); p03-p04 the reference observable (mutation
visible); p05 the three-way contrast; p06 build-and-return; p07 Add inside a method; p08 mixed params;
p09 return-new vs mutate-in-place; p10 the reassign-the-parameter bug.

## Per-problem intent (bones)
- **p01** `static int Sum(List<int> list)` returns total; `Main` reads, calls, prints.
- **p02** `static int Max(List<int> list)` seeded from `list[0]`; n >= 1.
- **p03** `static void DoubleAll(List<int> list)` does `list[i] *= 2`; `Main` prints after call (changed).
- **p04** `static void RemoveNegatives(List<int> list)` removes all < 0 (backward loop); `Main` prints remaining.
- **p05** two methods: `Bump(int x)` (x++ inside, caller int unchanged) and `Bump(List<int> list)` (list[0]++
  inside, caller list changed); print both results.
- **p06** `static List<int> Range(int n)` returns a list of 1..n; `Main` prints it.
- **p07** `static void AppendZeros(List<int> list, int count)` adds `count` zeros via `Add`; `Main` prints
  `list.Count` before and after.
- **p08** `static int CountOver(List<int> list, int threshold)` returns the count; `Main` prints it.
- **p09** `static List<int> Doubled(List<int> list)` returns a NEW list (original unchanged); `Main` prints
  both the returned list and the original (unchanged) to show the difference from p03.
- **p10** starter's method does `list = new List<int>()` (reassigns the parameter; caller sees no change);
  fix to iterate and mutate elements. Confirm the observable: caller unchanged in the buggy version.

## Notes
- **The reference observable is the point**: mutations to list elements and additions/removals are visible to
  the caller; only reassigning the parameter is not. Same rule as 7.4 arrays.
- **p05 is the three-way consolidation**: int (copied, 6.4), array (shared, 7.4), list (shared, 9.5) in one
  program; the teaching conclusion is: value types are copied, reference types are shared.
- **p09 vs p03**: mutating in place vs returning a new list; the observable difference shown by printing both.
- Vary list size incl. 0 and 1. `Main` drives I/O. Country-neutral. Terse statements.

## Reading closing beat: building a list from a file (no extra problems)

The reading.md for 9.5 ends with a short section titled something like **"Reading from a file into a list"**
(one beat, no new problems). It shows the natural combination of 8.6 `StreamReader` + `ReadLine` loop + 9.1
`Add`:

```csharp
var numbers = new List<int>();
using (var reader = new StreamReader("data.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null)
    {
        numbers.Add(int.Parse(line));
    }
}
Console.WriteLine(numbers.Count);
```

And the write direction (iterate a list, write each element to a file with `StreamWriter`), also one snippet.
The tone is: "you have all the pieces from 8.6 and 9.1; this is just what it looks like when you combine them."
No `Output:` block is needed for the StreamReader snippet in isolation (it is non-runnable without a file);
but if a short runnable stand-alone example fits, include it with its Output: block as usual.

**This is a reading-only beat: no new problems are added to 9.5.** The 8.6 problems already drilled file I/O;
here the point is just showing the connection. The cheatsheet gets a small **"Files + lists"** block with the
two patterns side by side.

Also note in the 9.T pool, one pool variant in family A or D may use the file+list combination as its scenario
(read numbers from a provided file into a list, then compute; same `asset_files` mechanism as 8.6). If used,
keep it to one or two pool problems and use the same Flavor A grading (answers to stdout).

