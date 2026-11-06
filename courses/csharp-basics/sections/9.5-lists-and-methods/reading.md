# Lists and methods

## The same behaviour as arrays

In Chapter 7.4 you saw that an array passed to a method is shared by reference: the method's parameter and the
caller's variable refer to the same array, so element mutations are visible after the call. A `List<T>` follows
exactly the same rule. The list is a reference type; passing it to a method shares the list, not a copy of it.

## A method that computes from a list

A method can take a `List<int>` and return a computed value:

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static int Sum(List<int> list)
    {
        int total = 0;
        foreach (int x in list) total = total + x;
        return total;
    }

    static void Main()
    {
        var numbers = new List<int> { 10, 20, 30 };
        Console.WriteLine(Sum(numbers));
    }
}
```

The output is:

```
60
```

The list is passed in and the total comes back. Nothing in the list changes.

## A method that mutates the list

Because the list is shared, a `void` method that changes elements, adds, or removes elements does so on the
same list that `Main` holds:

```csharp
static void DoubleAll(List<int> list)
{
    for (int i = 0; i < list.Count; i++) list[i] = list[i] * 2;
}

static void Main()
{
    var numbers = new List<int> { 1, 2, 3 };
    DoubleAll(numbers);
    foreach (int x in numbers) Console.WriteLine(x);
}
```

The output is:

```
2
4
6
```

`DoubleAll` modified the shared list and `Main` printed the changed values.

## The three-way contrast

You have now seen the same pattern three times:

- Chapter 6.4: a plain `int` is copied. The method changes its own copy; the caller's variable is unchanged.
- Chapter 7.4: an `int[]` is shared. The method changes an element; the caller sees it.
- Chapter 9.5: a `List<T>` is shared. The method changes an element or adds/removes; the caller sees it.

Value types are copied; reference types (arrays and lists) are shared. One rule, three encounters.

## Reassigning the parameter does not reach the caller

The same subtlety from 7.4 applies. Pointing the method's parameter at a new list does not affect the
caller:

```csharp
static void Replace(List<int> list)
{
    list = new List<int> { 99, 99 };
}

static void Main()
{
    var numbers = new List<int> { 1, 2 };
    Replace(numbers);
    Console.WriteLine(numbers[0]);
}
```

The output is:

```
1
```

`Main`'s `numbers` still points at the original list. Only mutations to the list's elements or
`Add`/`Remove` calls reach the caller; reassigning the parameter does not.

## Returning a list

A method can build a new list and return it:

```csharp
static List<int> Range(int n)
{
    var result = new List<int>();
    for (int i = 1; i <= n; i++) result.Add(i);
    return result;
}

static void Main()
{
    var nums = Range(4);
    foreach (int x in nums) Console.WriteLine(x);
}
```

The output is:

```
1
2
3
4
```

The return type is `List<int>`.

## Building a list from a file

The pieces from Chapter 8.6 and Chapter 9.1 connect naturally. `StreamReader` + `ReadLine` gives you the
content; `list.Add` grows the list as each line arrives. You do not need to know the line count in advance,
which is exactly the problem lists solve:

```csharp
using System;
using System.Collections.Generic;
using System.IO;

class Program
{
    static void Main()
    {
        var numbers = new List<int>();
        using (var reader = new StreamReader("data.txt"))
        {
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                numbers.Add(int.Parse(line));
            }
        }
        Console.WriteLine(numbers.Count);
    }
}
```

Writing a list to a file is the reverse: loop the list, write each element with `StreamWriter`:

```csharp
using (var writer = new StreamWriter("output.txt"))
{
    foreach (int x in numbers) writer.WriteLine(x);
}
```

The combination (read from file into a list, process the list with the operations from 9.2-9.5, write
results back) is the full toolkit in use. The model is still open, read or write, close; the `using`
block guarantees the close.

## When it goes wrong

The common mistake is reassigning the parameter (a logic bug, not a compiler error): the method appears to
work but `Main` sees no change. If a method is supposed to transform the caller's list and does not, check
whether the method is mutating elements and calling `Add`/`Remove` (visible to the caller) or replacing the
parameter with `new List<int>()` (invisible to the caller).

## What you'll practise

Methods that compute from a list (sum, max), methods that mutate in place (double all, remove negatives),
the three-way int/array/list contrast, building and returning a list, adding inside a method, and fixing
the reassign-the-parameter bug. Ten reps on lists across method boundaries. This is the last section;
next is the chapter test.
