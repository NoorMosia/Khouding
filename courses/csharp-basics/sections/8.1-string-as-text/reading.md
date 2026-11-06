# A string is text you can measure and index

## The problem: a string you cannot look inside

You have used strings as whole values since Chapter 2: read one, join a few with `+`, interpolate them into
output. But you could only ever handle the string all at once. You could not ask how long it is, or reach in
and read its third letter:

```csharp
string word = "hello";
Console.WriteLine(word);
```

The output is:

```
hello
```

That prints the whole thing. To do real text work, counting characters, checking the first letter, pulling
out a piece, you need to get inside the string. A string turns out to have a structure you already know from
Chapter 7: it is a sequence of characters you can measure and index.

## Length

Every string knows its own length. `s.Length` is the number of characters in it:

```csharp
string s = "hello";
Console.WriteLine(s.Length);
```

The output is:

```
5
```

`"hello"` has five characters, so `s.Length` is `5`. This is the same `.Length` you used on arrays in Chapter
7, a string is that much like an array.

## Indexing: reaching a single character

You reach one character by its index, in square brackets, exactly as with an array. Indexes are zero-based:
the first character is `s[0]`.

```csharp
string s = "hello";
Console.WriteLine(s[0]);
Console.WriteLine(s[1]);
```

The output is:

```
h
e
```

`s[0]` is the first character, `s[1]` the second. The last character is at index `s.Length - 1`, one less than
the length, the same rule as arrays:

```csharp
string s = "hello";
Console.WriteLine(s[s.Length - 1]);
```

The output is:

```
o
```

## A character is a char, not a string

`s[0]` is not a one-character string. It is a `char`, a distinct type that holds exactly one character. A
`char` literal is written with single quotes, `'h'`, where a string uses double quotes, `"h"`. You can store
one in a `char` variable and compare it:

```csharp
string s = "hello";
char first = s[0];
Console.WriteLine(first);
Console.WriteLine(first == 'h');
```

The output is:

```
h
True
```

Printing a `char` prints its single character. Comparing two chars with `==` gives a `bool`, just like
comparing numbers. For now that is all you need from `char`: read one out of a string, print it, compare it.

## A string cannot be changed in place

A string is read-only. You can read any character by index, but you cannot assign to one. This does not
compile:

```csharp
string s = "hello";
s[0] = 'H';
```

Trying to build it gives:

```
Program.cs(8,9): error CS0200: Property or indexer 'string.this[int]' cannot be assigned to -- it is read only
```

That means the character at `s[0]` cannot be overwritten: a string is immutable. This is the opposite of a
Chapter 7 array, where `a[0] = 5;` is fine. To get a changed string you make a new one, which is exactly what
the string methods in the next sections do: they return a new string and leave the original untouched. Keep
this in mind, it is the single most important fact about strings.

## When it crashes

Reading a character outside the string is not a compile error. Like an array, it compiles and then throws at
run time:

```
Unhandled exception. System.IndexOutOfRangeException: Index was outside the bounds of the array.
```

That means an index went past the end, usually `s[s.Length]` instead of `s[s.Length - 1]`. The valid indexes
are `0` through `s.Length - 1`. Keep every access inside that range.

## What you'll practise

Looking inside a string: `s.Length`, reading a character by index, the first and last character, storing and
comparing a `char`, and staying in bounds. Ten reps on the structure of a string. Next is searching a string,
asking whether and where a piece of text occurs in it.
