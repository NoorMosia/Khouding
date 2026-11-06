# Splitting and joining

## The problem: a line of values

Programs often receive several values packed into one line of text, words separated by spaces, fields
separated by commas, items separated by pipes. You need a way to break the line into its pieces, work on each
one, and sometimes put them back together. This is where the string and array worlds meet directly.

## Split: one string into many

`s.Split(' ')` breaks `s` at every space and returns a `string[]`, a plain array of strings:

```csharp
string s = "one two three";
string[] parts = s.Split(' ');
Console.WriteLine(parts.Length);
Console.WriteLine(parts[0]);
Console.WriteLine(parts[2]);
```

The output is:

```
3
one
three
```

`parts` is a `string[]` with three elements. Everything you know from Chapter 7 now applies: `.Length`,
indexing, and looping. Each element is itself a string, so 8.1 to 8.3 apply to each piece too.

You can split on any character: `s.Split(',')` splits on commas, `s.Split('|')` on pipes.

## Walking the pieces

Because the result is a `string[]`, you walk it with the same loop you used in Chapter 7:

```csharp
string s = "red green blue";
foreach (string word in s.Split(' '))
{
    Console.WriteLine(word);
}
```

The output is:

```
red
green
blue
```

Split, then loop. This works for any count of words; the loop adapts automatically.

## Join: many strings into one

`string.Join(separator, array)` is the reverse. It takes a separator and a `string[]`, and produces one string
with the separator between each pair of elements:

```csharp
string[] words = { "a", "b", "c" };
Console.WriteLine(string.Join(", ", words));
Console.WriteLine(string.Join("-", words));
```

The output is:

```
a, b, c
a-b-c
```

Note the argument order: **separator first, array second**. Swapping them is the common mistake (covered in the
error beat below).

## The round trip

Split then join can transform a separator:

```csharp
string s = "one two three";
string[] parts = s.Split(' ');
Console.WriteLine(string.Join("-", parts));
```

The output is:

```
one-two-three
```

Split on space, join with hyphen. Each piece is available between the two calls for further processing, upper-
casing each word or printing the count before rejoining.

## Edges to know

Splitting the empty string gives a one-element array containing one empty piece. Splitting a string with no
separator gives a one-element array of the whole string. Both follow the rule: the separator divides, so `n`
separators produce `n + 1` pieces; zero separators produce one piece (the whole string).

## When it goes wrong

The only typical logic bug is getting the `string.Join` arguments in the wrong order. This compiles and runs
but produces wrong output (or a runtime error if you accidentally pass the array where the separator string is
expected). The signature is:

```
string.Join(separator, array)
```

Separator is a string, array is a `string[]`. Put the separator first.

There is no specific exception for a wrong split character (the result just has one piece). The errors you saw
in Chapter 7 for out-of-bounds array access apply equally to a `string[]` from `Split`: going past `parts.Length - 1`
throws `IndexOutOfRangeException`.

## What you'll practise

Splitting a line into an array, counting the pieces, printing them in order and reverse, reaching the first
and last piece, picking by index, joining an array with a separator, transforming each piece and joining back,
and fixing the argument-order bug in `string.Join`. Twelve reps. Next is the one place you write the loop by
hand: walking a string character by character to count, validate, or build.
