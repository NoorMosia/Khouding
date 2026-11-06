# Exercises draft, 7.2 Iterating over an array

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Visit every element of an array with a loop.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section.

## Scope (READ FIRST)
- **IN:** the index-based walk `for (int i = 0; i < a.Length; i++)` using `a[i]` (needed when the position
  matters or to write elements); `foreach (int x in a)` as the cleaner read-only walk when only the value
  matters; the count-then-values input pattern (read `n`, fill `a`, then loop). **`foreach` is read-only**
  (assigning the loop variable does not change the array; to modify, use the indexed `for`), NAMED. Filter and
  map as **loop shapes** (print only elements meeting a test; print each transformed), NOT library calls.
- **OUT:** operations that compute a single result like sum/max (7.3, though a sum bridge is fine); arrays as
  method params (7.4); 2D (7.5); LINQ / `Array` methods. No jagged arrays.

## Grading approach
- `stdout-match`, input via stdin. **Vary array length across cases incl. 0 (loop runs zero times, prints
  nothing) and 1.** Strict output. Oracle CLI generates expecteds. Solutions stay in bounds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | read n then n values; print each on its own line (index for) | basic for walk | ● |
| p02 | same, using foreach | foreach walk | ● |
| p03 | print each element with its 1-based position (needs the index) | why you need i | ●● |
| p04 | print elements in reverse order (index from Length-1 down) | reverse index | ●● |
| p05 | print only the elements greater than 0 (filter shape) | filter as a loop | ●● |
| p06 | print each element doubled (map shape) | map as a loop | ●● |
| p07 | print each element and a running index-and-value line | index + value | ●● |
| p08 | sum the elements with a loop and print the total (bridge to 7.3) | accumulate | ●● |
| p09 | print every other element (step the index by 2) | stepped index | ●● |
| p10 | foreach that counts how many elements equal a read target | foreach + count | ●● |
| p11 | fix a bug: loop bound uses <= a.Length (off-by-one, out of range) | debug: bound | ●● |
| p12 | model a scenario: read a list, print a filtered+labelled view | integrative capstone | ●●● |

**Escalation:** p01-p02 the two walks; p03-p04 index-dependent (positions, reverse); p05-p06 filter/map
shapes; p07-p10 index+value, sum bridge, stepped, foreach count; p11 the off-by-one bound; p12 capstone.

## Per-problem intent (bones)
- **p01** read n, fill `a`, `for (i=0; i<a.Length; i++) print a[i]`. Length 0 -> nothing.
- **p02** same output via `foreach (int x in a) print x`.
- **p03** print `"<pos>: <value>"` with pos = i+1 (1-based); needs the index.
- **p04** print from `a[a.Length-1]` down to `a[0]`.
- **p05** print only elements `> 0` (filter); cases with none/some/all passing.
- **p06** print each `a[i] * 2` (map).
- **p07** print `i` and `a[i]` per line.
- **p08** sum with a loop, print the total (introduces the accumulate-over-array habit for 7.3).
- **p09** print `a[0], a[2], a[4], ...` (index += 2).
- **p10** read a target, `foreach` count equal elements, print the count.
- **p11** starter loops `i <= a.Length` (throws at the last pass); fix to `< a.Length`. Author so the FIX is
  clean; the committed solution stays in bounds.
- **p12** capstone: read a list, print (say) the positives with 1-based labels, or each transformed to spec.

## Notes
- **Zero-iteration (length-0) case required** where a loop can run zero times; also test length 1.
- **`foreach` is read-only** (state it); modifying elements needs the indexed `for`.
- **Filter/map are LOOP SHAPES here**, not LINQ (the Ch.5 reminder: the LINQ operators are a later course).
- Stay in bounds in every committed solution. Country-neutral. Terse statements. Prompts on their own line.
