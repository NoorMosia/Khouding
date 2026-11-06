# Problem 05, Value versus reference contrast (language-independent design)

**Sub-skill:** the three-way int/array/list contrast shown side by side.
**Difficulty:** 3

## Statement (student-facing)
Write `static void BumpValue(int x)` (x++, caller int unchanged) and `static void BumpElement(List<int> list)` (list[0]++, caller list changed). In `Main`, read an int `n` and a single value into a 1-element list. Call both. Print `n`, then `list[0]`.
