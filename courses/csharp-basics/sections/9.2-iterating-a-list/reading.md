# Iterating a list

## Everything from Chapter 7.2 carries over

The index walk and `foreach` from arrays apply directly to a `List<T>`. The only change is `list.Count`
where you used to write `a.Length`:

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        var list = new List<int>();
        list.Add(10);
        list.Add(20);
        list.Add(30);

        for (int i = 0; i < list.Count; i++)
        {
            Console.WriteLine(list[i]);
        }
    }
}
```

The output is:

```
10
20
30
```

The condition is `i < list.Count`, not `<=`. When the count is 0, the condition is false from the start and
the loop body never runs.

## foreach

`foreach` works the same way on a list:

```csharp
foreach (int x in list)
{
    Console.WriteLine(x);
}
```

The output is:

```
10
20
30
```

`foreach` is read-only on a list just as on an array: assigning to `x` does not change the list. Use the
indexed `for` when you need to write elements.

## Filter and map shapes

The same loop shapes from 7.2 carry over unchanged. Print only the positives:

```csharp
foreach (int x in list)
{
    if (x > 0)
    {
        Console.WriteLine(x);
    }
}
```

Print each doubled:

```csharp
foreach (int x in list)
{
    Console.WriteLine(x * 2);
}
```

## When it goes wrong

The off-by-one bound `i <= list.Count` compiles and then crashes at runtime with the same exception as
indexing one past the end:

```
Unhandled exception. System.ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than the size of the collection. (Parameter 'index')
```

Use `i < list.Count`. The last valid index is `list.Count - 1`.

## What you'll practise

Walking a list with both loop forms, printing with 1-based positions, printing in reverse, filter and map
shapes, summing, counting matches, stepping the index, and fixing an off-by-one bound. Twelve reps on
visiting every element of a list. The patterns are the same as Chapter 7.2; the container is different.
Next is modifying a list while building it: adding, removing, and inserting elements.
