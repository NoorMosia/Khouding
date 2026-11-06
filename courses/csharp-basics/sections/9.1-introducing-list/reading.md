# Introducing List\<T\>

## The problem: not knowing the count in advance

Arrays from Chapter 7 are the right tool when you know the size at the start. You write `new int[5]` and that
array holds exactly five integers, always. But sometimes you do not know how many values there will be. Suppose
you want to read numbers until the user types "stop". You cannot write `new int[n]` when `n` is not known yet.
You need a collection that can grow.

## A list grows as you add to it

`List<int>` is a growable collection of integers. You create an empty one with `new List<int>()`, add values
one at a time with `Add`, access any element by index just like an array, and check the current count with
`.Count`:

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
        Console.WriteLine(list.Count);
        Console.WriteLine(list[1]);
    }
}
```

The output is:

```
3
20
```

`list.Count` is the number of elements currently in the list. `list[1]` is the second element, indexed from
zero, exactly like an array. The difference is that the list started empty and grew to three elements through
three `Add` calls.

## The using directive

`List<T>` lives in the `System.Collections.Generic` namespace. Without the `using` line at the top, the
compiler cannot find it:

```
Program.cs(8,24): error CS0246: The type or namespace name 'List<>' could not be found (are you missing a using directive or an assembly reference?)
```

Add `using System.Collections.Generic;` at the top of every program that uses a list.

## Count and the valid range

`.Count` is the number of elements. Valid indexes are `0` through `Count - 1`, the same rule as arrays. The
last element is `list[list.Count - 1]`.

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
        Console.WriteLine(list[0]);
        Console.WriteLine(list[list.Count - 1]);
    }
}
```

The output is:

```
10
30
```

Going outside the valid range throws at runtime:

```
Unhandled exception. System.ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than the size of the collection. (Parameter 'index')
```

That means `list[list.Count]` was used where `list[list.Count - 1]` was intended.

## Building a list from the count-then-values pattern

The same input shape used in Chapter 7 works for lists. Read `n`, then add `n` values:

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++)
        {
            list.Add(int.Parse(Console.ReadLine()));
        }
        Console.WriteLine(list.Count);
        Console.WriteLine(list[0]);
    }
}
```

Given the input `3` then `10`, `20`, `30`, the output is:

```
3
10
```

## Building a list until a sentinel

A list also handles the case where the count is not known. Read values until a fixed token:

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        var list = new List<int>();
        string line = Console.ReadLine();
        while (line != "stop")
        {
            list.Add(int.Parse(line));
            line = Console.ReadLine();
        }
        Console.WriteLine(list.Count);
    }
}
```

Given the input `10`, `20`, `stop`, the output is:

```
2
```

The loop reads until "stop" without needing to know the count in advance. This is the kind of problem where
a fixed-size array would force you to guess the size; a list just grows.

## What you'll practise

Creating a list, adding values, accessing elements by index, reading `.Count`, the first and last element,
building from count-then-values and from a sentinel. Ten reps on the basics of a list. Next is iterating over
a list, which uses the same loop patterns you already know from Chapter 7.
