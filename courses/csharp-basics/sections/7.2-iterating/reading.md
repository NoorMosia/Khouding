# Iterating over an array

## The problem: naming every index by hand

An array holds many values, but so far you have reached them one index at a time. To print a 3-slot array you
wrote three lines:

```csharp
int[] a = { 10, 20, 30 };
Console.WriteLine(a[0]);
Console.WriteLine(a[1]);
Console.WriteLine(a[2]);
```

The output is:

```
10
20
30
```

That only works because you knew the length was 3. If the length is read at runtime, you cannot write the
right number of lines in advance. You need a loop that visits every slot, whatever the length.

## The index walk

A `for` loop counting from 0 up to `a.Length - 1` touches every valid index. The counter `i` is the index:

```csharp
int[] a = { 10, 20, 30 };
for (int i = 0; i < a.Length; i++)
{
    Console.WriteLine(a[i]);
}
```

The output is:

```
10
20
30
```

The condition is `i < a.Length`, not `i <= a.Length`. When `i` reaches `a.Length` the loop stops, because the
last valid index is `a.Length - 1`. This one loop prints a 3-element array or a 300-element array without
changing. If the array has length 0, the condition is false on the first check and the loop body never runs.

## foreach: when you only need the value

Often you do not care about the position, only the values in order. `foreach` walks the array and hands you
each element directly, no index:

```csharp
int[] a = { 10, 20, 30 };
foreach (int x in a)
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

`x` takes each element's value in turn. There is no counter and no `a[i]`, so there is nothing to get wrong
about bounds. Reach for `foreach` when you just need to read each value start to end.

## foreach is read-only

`foreach` gives you a copy of each value, not the slot itself. Assigning to the loop variable does not change
the array, and the compiler does not even allow it:

```csharp
int[] a = { 1, 2, 3 };
foreach (int x in a)
{
    x = x * 2;      // not allowed
}
```

When you need to change elements, or you need the position, use the indexed `for` and write through `a[i]`:

```csharp
int[] a = { 1, 2, 3 };
for (int i = 0; i < a.Length; i++)
{
    a[i] = a[i] * 2;
}
Console.WriteLine(a[0]);
Console.WriteLine(a[2]);
```

The output is:

```
2
6
```

So: `foreach` to read, indexed `for` to write or when the index itself matters.

## Printing a subset: the filter shape

To print only some elements, loop over all of them and guard the print with an `if`. This is a filter written
as a loop:

```csharp
int[] a = { -3, 4, 0, 7 };
foreach (int x in a)
{
    if (x > 0)
    {
        Console.WriteLine(x);
    }
}
```

The output is:

```
4
7
```

Only the elements passing the test print. If none pass, nothing prints.

## Transforming each element: the map shape

To print each element changed in some way, compute the new value inside the loop and print that. This is a map
written as a loop:

```csharp
int[] a = { 1, 2, 3 };
foreach (int x in a)
{
    Console.WriteLine(x * 2);
}
```

The output is:

```
2
4
6
```

The array itself is unchanged; each printed line is a transformed copy. Filter and map here are loop shapes you
write by hand. C# has library operators for them, but those come in a later course.

## When it does not compile, and when it crashes

Trying to assign to a `foreach` variable is a compile error, the one that enforces read-only:

```
Program.cs(10,13): error CS1656: Cannot assign to 'x' because it is a 'foreach iteration variable'
```

That means you tried to change the loop variable (or write the array through it). Switch to an indexed `for`
and assign `a[i]`.

The other classic array-loop mistake is not caught by the compiler. Looping with `i <= a.Length` runs one pass
too many and reads `a[a.Length]`, which is out of bounds:

```
Unhandled exception. System.IndexOutOfRangeException: Index was outside the bounds of the array.
```

That means the loop went one step too far. The condition should be `i < a.Length`, so the last index touched
is `a.Length - 1`.

## What you'll practise

Walking an array with a loop: the indexed `for` and `foreach`, printing with 1-based positions, reverse order,
filtering and mapping as loop shapes, summing in a loop, stepping the index, counting matches, and fixing an
off-by-one bound. Twelve reps on visiting every element. Next is turning a whole array into one answer: sum,
average, max, min, count, and search.
