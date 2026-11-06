# Arrays and methods

## Passing an array to a method

A method can take an array parameter, written with the element type and `[]`. Here a method sums an `int[]` and
returns the total, and `Main` passes its array in:

```csharp
using System;

class Program
{
    static int Sum(int[] a)
    {
        int total = 0;
        foreach (int x in a)
        {
            total = total + x;
        }
        return total;
    }

    static void Main()
    {
        int[] nums = { 10, 20, 30 };
        Console.WriteLine(Sum(nums));
    }
}
```

The output is:

```
60
```

`Sum` works on whatever array it is handed. This is the operations of 7.3 moved into a reusable method: the
array goes in, a single value comes out. Nothing surprising yet.

## The difference from a plain value

In Chapter 6 you saw that passing an `int` copies it: a method changing its parameter does not touch the
caller's variable. An array behaves differently. When you pass an array, the method and the caller end up
referring to the same array, not two copies. So if the method changes an element, the caller sees the change.

Here are both side by side:

```csharp
using System;

class Program
{
    static void BumpValue(int x)
    {
        x = x + 1;
    }

    static void BumpElement(int[] a)
    {
        a[0] = a[0] + 1;
    }

    static void Main()
    {
        int n = 5;
        BumpValue(n);
        Console.WriteLine(n);

        int[] arr = { 5, 0 };
        BumpElement(arr);
        Console.WriteLine(arr[0]);
    }
}
```

The output is:

```
5
6
```

`BumpValue` got a copy of `5`; `Main`'s `n` is still `5` after the call. `BumpElement` got a reference to the
same array `Main` holds, so its change to `arr[0]` is there when `Main` prints it: `6`. A single value is
copied in; an array is shared.

## Mutating an array in a method

Because the array is shared, a `void` method can change every element and the caller sees the result. A common
pattern is a method that transforms the array in place:

```csharp
static void DoubleAll(int[] a)
{
    for (int i = 0; i < a.Length; i++)
    {
        a[i] = a[i] * 2;
    }
}

static void Main()
{
    int[] nums = { 1, 2, 3 };
    DoubleAll(nums);
    foreach (int x in nums)
    {
        Console.WriteLine(x);
    }
}
```

The output is:

```
2
4
6
```

`DoubleAll` returns nothing. It changes the array `Main` passed in, and `Main` prints the changed array. This
needs the indexed `for`, since writing elements is exactly what `foreach` cannot do.

## Returning an array

A method can also build a new array and return it, with a return type of `int[]`:

```csharp
static int[] Range(int n)
{
    int[] result = new int[n];
    for (int i = 0; i < n; i++)
    {
        result[i] = i + 1;
    }
    return result;
}

static void Main()
{
    int[] nums = Range(4);
    foreach (int x in nums)
    {
        Console.WriteLine(x);
    }
}
```

The output is:

```
1
2
3
4
```

`Range` creates the array, fills it, and hands it back. `Main` stores the returned array and uses it.

## Reassigning the parameter does not reach the caller

There is one subtlety. Changing an *element* through the parameter reaches the caller, but pointing the
parameter at a brand new array does not. The parameter is itself a copy of the reference, so reassigning it
only changes where the method's own copy points:

```csharp
static void Replace(int[] a)
{
    a = new int[] { 99, 99 };   // the caller does not see this
}

static void Main()
{
    int[] nums = { 1, 2 };
    Replace(nums);
    Console.WriteLine(nums[0]);
}
```

The output is:

```
1
```

`Main`'s `nums` still points at the original array, so `nums[0]` is `1`. To change what the caller holds, write
through the elements (`a[i] = ...`) or return a new array and let the caller assign it. This is the single most
common array-method bug: writing `a = new int[...]` and expecting the caller to see it.

## When it does not compile

Passing the wrong type where an array is expected is a compile error. An `int` is not an `int[]`:

```
Program.cs(15,31): error CS1503: Argument 1: cannot convert from 'int' to 'int[]'
```

That means a method wanted an array but got a single value (or the reverse). Pass the array variable itself,
`Sum(nums)`, not one element and not a plain number.

## What you'll practise

Arrays through methods: array parameters with a value returned (sum, max, count), `void` methods that mutate
the array in place and the caller sees it, the value-vs-reference contrast against Chapter 6, methods that
build and return a new array, returning a new array versus mutating in place, an in-place reverse, and fixing
the reassign-the-parameter bug. Twelve reps. Next is arrays with more than one dimension: grids addressed by
row and column.
