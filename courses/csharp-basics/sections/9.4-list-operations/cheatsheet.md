# Cheatsheet, 9.4 List operations

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Built-in query methods
```csharp
bool has = list.Contains(x);   // true if x is anywhere in the list
int  at  = list.IndexOf(x);    // 0-based index of first x, or -1 if absent
```

## Aggregate loops (same as 7.3)
```csharp
// Sum (empty list -> 0)
int sum = 0;
foreach (int x in list) sum = sum + x;

// Average (n >= 1; cast before dividing)
double avg = (double)sum / list.Count;

// Max (n >= 1; seed from list[0])
int max = list[0];
for (int i = 1; i < list.Count; i++) { if (list[i] > max) max = list[i]; }
// Min: same with  <
```

## Empty-list rules
| Operation | Empty list (Count = 0) |
|-----------|------------------------|
| sum, count | defined: 0 |
| max, min, average, range | undefined: require Count >= 1 |

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| (no error) average prints a whole number | integer division: `sum / list.Count` | cast: `(double)sum / list.Count` |
| (no error) max is wrong for all-negative | `max` seeded at 0 | seed `max = list[0]`, loop from index 1 |

These are logic bugs; the program compiles and runs but prints the wrong answer.
