# Declaring and accessing arrays

## The problem: one name per value

Suppose you want to hold three test scores. With what you know so far, that is three variables:

```csharp
int score0 = 90;
int score1 = 75;
int score2 = 82;
Console.WriteLine(score1);
```

The output is:

```
75
```

It works for three. But if you need ten scores, that is ten names, and if the count is read at runtime you
cannot even write the names in advance. Separate variables do not scale, and you cannot pick one by a number.

## An array: many values, one name

An array is a fixed-size collection of values of one type, stored under a single name. You reach each value by
its position, called its index. The three scores become one array:

```csharp
int[] scores = new int[3];
scores[0] = 90;
scores[1] = 75;
scores[2] = 82;
Console.WriteLine(scores[1]);
```

The output is the same:

```
75
```

`int[]` is the type: an array of `int`. `new int[3]` builds an array with three slots. `scores[1]` reads the
slot at index 1. One name now holds all three values, and the index is a number you can compute, read, or loop
over later.

## Indexes start at zero

The first slot is index 0, not 1. An array of length 3 has valid indexes 0, 1, and 2. The last index is always
one less than the length:

```csharp
int[] a = new int[3];
a[0] = 10;   // first
a[1] = 20;
a[2] = 30;   // last: index 2, not 3
Console.WriteLine(a[0]);
Console.WriteLine(a[2]);
```

The output is:

```
10
30
```

Counting from zero is the single most common source of array mistakes. Keep it in mind: length 3 means
indexes 0 through 2.

## Default values and length

`new int[3]` does not leave the slots empty. Every slot starts at the type's default, which is `0` for `int`.
You can read a slot before assigning it:

```csharp
int[] a = new int[3];
Console.WriteLine(a[0]);
Console.WriteLine(a.Length);
```

The output is:

```
0
3
```

`a.Length` is the number of slots, fixed when the array is built. It does not change.

## The literal form

When you know the values up front, write them in braces and C# counts them for you:

```csharp
int[] nums = { 10, 20, 30 };
Console.WriteLine(nums.Length);
Console.WriteLine(nums[2]);
```

The output is:

```
3
30
```

`{ 10, 20, 30 }` builds a length-3 array already filled. No `new int[3]` and no slot-by-slot assignment needed.

## Arrays hold one type

An `int[]` holds `int` values. A `string[]` holds strings. The element type is part of the array's type, so a
`string[]` works the same way with text:

```csharp
string[] people = new string[2];
people[0] = "Ada";
people[1] = "Linus";
Console.WriteLine(people[0]);
```

The output is:

```
Ada
```

## When it does not compile, and when it crashes

Two array mistakes are caught at compile time. Creating an array with `new` but no size and no initializer is
one:

```
Program.cs(7,26): error CS1586: Array creation must have array size or array initializer
```

That means `new int[]` on its own is incomplete. Give it a size, `new int[3]`, or an initializer,
`{ 10, 20, 30 }`.

Indexing with the wrong type is the other. An index must be an `int`, so a string in the brackets does not
convert:

```
Program.cs(9,29): error CS0029: Cannot implicitly convert type 'string' to 'int'
```

That means something like `a["x"]` was written. Use a whole number, `a[0]`.

A third mistake is not a compile error at all. Reading or writing an index outside `0 .. Length-1` compiles
fine, then crashes when it runs:

```
Unhandled exception. System.IndexOutOfRangeException: Index was outside the bounds of the array.
```

That means an index went past the end (often `a[a.Length]` instead of `a[a.Length - 1]`). The compiler cannot
catch it because the index is only known at runtime. Keep every access inside the bounds.

## What you'll practise

Building arrays and reaching their elements: `new int[n]` and the `{ ... }` literal form, reading and writing
slots by index, `a.Length`, the first and last element, default values, swapping two elements, and a
`string[]`. Ten reps on the start of arrays: one name, many values, reached by index. Next is iterating over an
array with a loop, so you can touch every element without naming each index by hand.
