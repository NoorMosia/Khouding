# Exercises draft, 6.5 Overloading

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Several methods can share a name if their parameter lists differ; C# picks the match by the arguments.

## Size & completion
- **10 problems**, lights at **6** (~60%). Moderate.

## Scope (READ FIRST)
- **IN:** overloading = same method name, **different parameter lists** (different count or different types);
  the compiler resolves the call to the matching overload from the arguments; e.g. `Add(int, int)` and
  `Add(int, int, int)`, or `Describe(int)` and `Describe(string)`. Why it helps: one clear name for the same
  idea on different inputs.
- **OUT:** optional/default parameters; `params`; differing only by return type (not allowed, name it);
  generics; `ref`/`out`. Parameters (6.2) and returns (6.3) are assumed. All methods still `static`; `Main`
  drives the calls.

## Grading approach
- `stdout-match`, input via stdin. `Main` makes calls that resolve to different overloads (arguments often
  read from stdin), and prints the results. **Cases exercise each overload** so a single-overload answer
  fails. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | Add(int,int) and Add(int,int,int); Main calls both | overload by count | ●● |
| p02 | Max(int,int) and Max(int,int,int) | overload by count + logic | ●● |
| p03 | Describe(int) and Describe(string) print different things | overload by type | ●● |
| p04 | Area(int) (square) and Area(int,int) (rectangle) | count overload, geometry | ●● |
| p05 | a two-arg and three-arg sum, Main reads which to use | resolve from input | ●● |
| p06 | trace: given calls, say which overload runs (then produce its output) | resolution | ●● |
| p07 | add a NEW overload to an existing method | extend | ●● |
| p08 | overload differing by type where the two print distinctly | type resolution | ●● |
| p09 | fix a bug: a call matches no overload (wrong arg count/type) | debug: no match | ●●● |
| p10 | model a scenario: an overloaded helper Main calls several ways | integrative capstone | ●●● |

**Escalation:** p01-p02 overload by count; p03-p04 overload by type / by count; p05-p06 resolve from input and
trace resolution; p07-p08 extend and type-resolve; p09 the no-matching-overload bug; p10 capstone.

## Per-problem intent (bones)
- **p01** `Add(int,int)` and `Add(int,int,int)` both return/print a sum; `Main` calls both with read values.
- **p02** `Max` for two vs three arguments.
- **p03** `Describe(int)` prints one message, `Describe(string)` another; `Main` calls each.
- **p04** `Area(int side)` vs `Area(int w, int h)`.
- **p05** `Main` reads a mode or an argument count and calls the matching overload.
- **p06** given a set of calls, the program resolves and prints each overload's output (trace made concrete).
- **p07** starter has one overload; add a second (stated signature) and the call that uses it.
- **p08** `Print(int)` vs `Print(bool)` (or `string`) to show type-based resolution.
- **p09** starter calls an overloaded method with arguments matching NO overload (e.g. wrong count); fix the
  call OR add the overload, per the stated requirement. (Confirm the real compiler message when authoring.)
- **p10** capstone: an overloaded helper exercised several ways by `Main`.

## Notes
- **Overloads differ by parameter list (count or types), never by return type alone** (name that it is not
  allowed; a return-type-only "overload" is a compile error).
- **A call matching no overload is a COMPILE error** (e.g. CS1501 no overload takes N arguments, or CS1503
  argument type mismatch); verify and quote the real message when authoring p09 and the cheatsheet.
- `Main` drives the calls and prints. All methods `static`. Country-neutral. Terse statements.
