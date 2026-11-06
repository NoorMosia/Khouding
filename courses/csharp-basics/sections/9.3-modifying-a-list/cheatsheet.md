# Cheatsheet, 9.3 Modifying a list

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## The modification methods
```csharp
list.Add(x);           // append x; Count += 1
bool ok = list.Remove(x);   // remove first x; Count -= 1; returns false if absent
list.RemoveAt(i);      // remove index i; elements above shift down; Count -= 1
list.Insert(i, x);     // insert x at i; elements at i+ shift up; Count += 1
list.Clear();          // remove all; Count = 0
```

## What each does to Count and indexes

| Method | Count | Indexes above position |
|--------|-------|------------------------|
| `Add` | +1 | unchanged (appends) |
| `Remove(x)` | -1 | elements above removed position shift DOWN |
| `RemoveAt(i)` | -1 | elements above i shift DOWN |
| `Insert(i, x)` | +1 | elements at i and above shift UP |
| `Clear` | = 0 | all gone |

## Remove returns a bool
```csharp
bool found = list.Remove(99);   // false if 99 not present; list unchanged
```

## Safe removal in a loop (backward)
```csharp
// Remove all negatives safely:
for (int i = list.Count - 1; i >= 0; i--)
{
    if (list[i] < 0) list.RemoveAt(i);
}
```
Forward loops skip elements after a removal (stale index). Backward loops are safe.

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `System.ArgumentOutOfRangeException` (runtime) | `RemoveAt` or `Insert` index out of range | stay in `0 .. Count-1` (or `0 .. Count` for `Insert`) |
| (no error) removal loop skips elements | forward loop with `RemoveAt` (stale index) | use a backward loop |
