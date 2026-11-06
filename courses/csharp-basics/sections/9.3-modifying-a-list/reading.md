# Modifying a list

## What arrays cannot do

A fixed-size array has a length set at creation and it never changes. Every slot exists from the start. You
cannot add a new element or remove an existing one; only the values inside can be replaced.

A list is different. Its count changes every time you add or remove an element. This section covers the
modification methods that make that possible.

## Add

You already know `Add` from 9.1. It appends to the end:

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        var list = new List<int> { 1, 2, 3 };
        list.Add(99);
        Console.WriteLine(list.Count);
        Console.WriteLine(list[3]);
    }
}
```

The output is:

```
4
99
```

`Count` rose from 3 to 4. The new element is at the end.

## Remove

`list.Remove(x)` removes the first element equal to `x` and returns a `bool`: `true` if an element was found
and removed, `false` if `x` was not in the list. Only the first occurrence is removed when there are
duplicates.

```csharp
var list = new List<int> { 10, 20, 30, 20 };
bool ok = list.Remove(20);
Console.WriteLine(ok);
Console.WriteLine(list.Count);
Console.WriteLine(list[1]);
```

The output is:

```
True
3
30
```

`20` appeared twice; only the first was removed. The element that was at index 2 (`30`) shifted down to index
1. If you try to remove a value that is not present, the list is unchanged and `Remove` returns `false`.

## RemoveAt

`list.RemoveAt(i)` removes the element at a specific index. Elements above the removed position shift down by
one:

```csharp
var list = new List<int> { 10, 20, 30 };
list.RemoveAt(0);
Console.WriteLine(list[0]);
Console.WriteLine(list.Count);
```

The output is:

```
20
2
```

Index 0 (`10`) was removed. The former index 1 (`20`) is now index 0.

## Insert

`list.Insert(i, x)` inserts `x` at position `i`. Elements at `i` and above shift up:

```csharp
var list = new List<int> { 10, 20, 30 };
list.Insert(1, 99);
Console.WriteLine(list[1]);
Console.WriteLine(list[2]);
Console.WriteLine(list.Count);
```

The output is:

```
99
20
4
```

The new element `99` landed at index 1. `20` and `30` shifted to indexes 2 and 3.

## Clear

`list.Clear()` removes every element. `Count` becomes 0:

```csharp
var list = new List<int> { 1, 2, 3 };
list.Clear();
Console.WriteLine(list.Count);
```

The output is:

```
0
```

The list still exists; it is just empty. You can add to it again immediately.

## The stale-index trap

When you remove elements inside a loop, the indexes shift down after each removal. A forward loop can skip
elements:

```csharp
// Bug: removes 1 from {1, 2, 1} with a forward loop
for (int i = 0; i < list.Count; i++)
{
    if (list[i] == 1)
    {
        list.RemoveAt(i);  // after removing index 0, index 1 becomes index 0 (the loop skips it)
    }
}
```

The safe fix is to loop from the end backward. When you remove index `i` going backward, only positions
above `i` shift, which you have already passed:

```csharp
for (int i = list.Count - 1; i >= 0; i--)
{
    if (list[i] == 1)
    {
        list.RemoveAt(i);
    }
}
```

## When it goes wrong

`RemoveAt` and `Insert` with an out-of-range index throw `ArgumentOutOfRangeException` at runtime, the same
exception as indexing past `Count - 1`. Make sure the index you pass is between `0` and `list.Count - 1`
(or `list.Count` for `Insert`, which can add to the end). There is no compiler error for an invalid index.

## What you'll practise

Adding, removing by value, removing by index, inserting, clearing, and the backward-loop pattern for safe
removal. Twelve reps on the resizable side of a list. Next is computing a result from a list: the same
aggregate operations from Chapter 7.3, now available through the list's own methods too.
