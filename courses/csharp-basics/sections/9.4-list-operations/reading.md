# List operations

## The same patterns, the same container

Chapter 7.3 showed how to compute a result from an array by looping: sum, average, max, min, count-matching,
search. Every one of those patterns works on a list. The container changed; the loops did not.

## Contains and IndexOf

A list also provides two operations directly as methods you do not need to write yourself:

`list.Contains(x)` returns `true` if `x` is anywhere in the list, `false` otherwise.
`list.IndexOf(x)` returns the 0-based index of the first occurrence of `x`, or `-1` if `x` is absent. The
`-1` sentinel is the same one used in 7.3 array search and 8.2 string search.

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        var list = new List<int> { 10, 20, 30, 20 };
        Console.WriteLine(list.Contains(20));
        Console.WriteLine(list.Contains(99));
        Console.WriteLine(list.IndexOf(20));
        Console.WriteLine(list.IndexOf(99));
    }
}
```

The output is:

```
True
False
1
-1
```

These are direct library calls on `List<T>`. With a plain array in Chapter 7.3 you had to write a loop; a
list provides them ready-made.

## Sum and average

Accumulate exactly as in 7.3:

```csharp
var list = new List<int> { 10, 20, 30 };
int sum = 0;
foreach (int x in list) sum = sum + x;
double avg = (double)sum / list.Count;
Console.WriteLine(sum);
Console.WriteLine(avg);
```

The output is:

```
60
20
```

`(double)sum / list.Count` for the average. An empty list (Count = 0) cannot be averaged; problems state
`n >= 1` where needed.

## Max and min: seed from list[0]

The same seeding rule from 7.3 applies:

```csharp
var list = new List<int> { 4, 9, 2, 7 };
int max = list[0];
for (int i = 1; i < list.Count; i++)
{
    if (list[i] > max) max = list[i];
}
Console.WriteLine(max);
```

The output is:

```
9
```

Seed `max` from `list[0]`, not from 0. If every element is negative, a seed of 0 would wrongly win. The same
fix problem that appeared in 7.3 appears here.

## Pointing back

All of these are the patterns from 7.3. The only changes are `list.Count` (replacing `a.Length`), and for
search and contains you now use the list's built-in methods rather than writing the loop yourself. If you
need a refresher on why any of these loops work, the 7.3 reading is the same content.

## When it goes wrong

The mistakes here are logic errors, not compile errors:

- Integer division instead of floating-point for the average: `sum / list.Count` truncates. Cast first:
  `(double)sum / list.Count`.
- Max seeded at 0 instead of `list[0]`: wrong for all-negative lists. There is no compiler error; the
  program runs and prints the wrong answer.

Check your result against a fractional case and an all-negative case.

## What you'll practise

Sum, average, max, min, count above a threshold, conditional sum, range, count-of-max, Contains, IndexOf
with the -1 sentinel, and fixing the seed-at-0 bug. Twelve reps on computing a result from a list. Next is
passing a list to a method, where the reference behaviour ties this chapter back to Chapter 7.4.
