# Cheatsheet, 7.3 Common array operations

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Sum (length 0 gives 0)
```csharp
int sum = 0;
foreach (int x in a) { sum = sum + x; }
```

## Average (needs n >= 1; cast to double)
```csharp
double average = (double)sum / a.Length;   // NOT sum / a.Length (integer division)
```

## Max / Min (seed from a[0], not 0; needs n >= 1)
```csharp
int max = a[0];
for (int i = 1; i < a.Length; i++) { if (a[i] > max) max = a[i]; }
// min: same with  <  instead of  >
```

## Count matching (length 0 gives 0)
```csharp
int count = 0;
foreach (int x in a) { if (x > threshold) count = count + 1; }
```

## Contains / index-of (first match, else -1)
```csharp
int found = -1;
for (int i = 0; i < a.Length; i++) { if (a[i] == target) { found = i; break; } }
// contains = (found != -1)
```

## Which rule for the empty array?
| Operation | Empty array (length 0) |
|-----------|------------------------|
| sum, count | defined: 0 |
| max, min, average, range | undefined: require n >= 1 |

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| (no error) average comes out whole, e.g. `3` not `3.5` | integer division: `sum / a.Length` | cast: `(double)sum / a.Length` |
| (no error) max is wrong for all-negative input | `max` seeded at `0` | seed `max = a[0]`, loop from index 1 |

These are logic bugs, not compiler errors: the program runs and prints a wrong answer. Test a fractional case
and an all-negative case to catch them.
